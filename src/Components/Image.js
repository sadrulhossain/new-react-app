import React, { useState } from "react";

export default function Image(props) {
    const [showImageRemover, setShowImageRemover] = useState(false);

    return (
        <div className="w-1/3 p-1 border flex justify-center" >
            <div className="relative"
                onMouseEnter={() => setShowImageRemover(true)}
                onMouseLeave={() => setShowImageRemover(false)}
            >
                <span className={`px-2 py-1 border border-red-700 bg-red-700 absolute right-0 cursor-pointer ${showImageRemover ? '' : 'hidden'}`}
                    onClick={() => props.handleRemoveImage(props.index)}>
                    <i className="fas fa-times text-white"></i>
                </span>
                <img className="justify-center" src={props.image} alt="wallpaper"
                    width="100%" height="auto" />
            </div>
        </div>
    )
}