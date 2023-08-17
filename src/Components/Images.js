import React, { useEffect, useState } from "react";
import Image from "./Image";
import useFetchImage from "../utils/hooks/useFetchImage";
import Loading from "./Loading";
import useScroll from "../utils/hooks/useScroll";
import InfiniteScroll from "react-infinite-scroll-component";
import useDebounce from "../utils/hooks/useDebounce";

export default function Images() {

    const [pageNo, setPageNo] = useState(1);
    const [search, setSearch] = useState(null);
    const [imageSrc, setImageSrc, errors, isLoading] = useFetchImage(pageNo, search);
    const debounce = useDebounce();
    // const [scrollPosition] = useScroll();
    function handleImageSearch(e) {
        const search = e.target.value;
        debounce(() => setSearch(search));
    }

    function handleRemoveImage(index) {
        setImageSrc(imageSrc.filter((image, i) => i != index));
    }

    return (
        <div>
            <div className="my-4">
                <input type="text" className="w-full border rounded shadow p-2"
                    onChange={handleImageSearch} placeholder="Search Image here"
                />
            </div>
            {
                errors.length > 0 && (
                    <div className="flex h-screen">
                        <p className="m-auto">{errors[0]}</p>
                    </div>
                )
            }
            <InfiniteScroll
                dataLength={imageSrc.length}
                next={() => setPageNo(pageNo + 1)}
                hasMore={true}
                className="flex flex-wrap"
            >
                {
                    imageSrc.map((img, index) =>
                        <Image image={img.urls.regular} index={index} handleRemoveImage={handleRemoveImage} key={index} />
                    )
                }
            </InfiniteScroll>

            {
                isLoading && <Loading />
            }
        </div>

    )
}