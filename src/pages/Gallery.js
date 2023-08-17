import React, { useState } from 'react'
import Images from "../Components/Images";

export default function Gallery() {
    const [isShowing, setIsShowing] = useState(true);

    function handleImageToggle() {
        setIsShowing(!isShowing);
    }
    
    return (
        <section className="flex justify-center">
            <div className="w-1/2">
                {isShowing === true ? <Images /> : null}
            </div>
        </section>
    );
}
