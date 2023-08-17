import Axios from 'axios';
import React, { useEffect, useState } from 'react'

const baseUrl = process.env.REACT_APP_UNSPLASH_BASE_URL;
const key = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage(pageNo, search) {
    const [imageSrc, setImageSrc] = useState([]);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function fetchImage(){
        const url = search != null ? `photos?` : `search/photos?`
    }

    useEffect(() => {
        setIsLoading(true);

        Axios.get(`${baseUrl}/photos?client_id=${key}&page=${pageNo}`)
            .then((res) => {
                setImageSrc([...imageSrc, ...res.data]);
                setIsLoading(false);
            }).catch((e) => {
                setErrors(e.response.data.errors);
                setIsLoading(false);
            });

    }, [pageNo]);

    useEffect(() => {
        setIsLoading(true);

        Axios.get(`${baseUrl}/search/photos?client_id=${key}&page=${pageNo}&query=${search}`)
            .then((res) => {
                if(pageNo > 1){
                    setImageSrc([...imageSrc, ...res.data.results]);
                } else{
                    setImageSrc([...res.data.results]);
                }
                setIsLoading(false);
            }).catch((e) => {
                setErrors(e.response.data.errors);
                setIsLoading(false);
            });

    }, [search]);

    return [imageSrc, setImageSrc, errors, isLoading];
}
