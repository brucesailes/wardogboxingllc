import React from 'react';
import StoreSlideshow from '../../components/StoreSlideShow';

const image = [
    {
        src: "/tshirts1.png",
        alt: "Image 1",
    },
    {
        src: "/tshirts2.png",
        alt: "Image 2",
    },
];

export default function Shop() {
    return (
        <div className="flex flex-col items-center justify-center space-y-8 mt-20 min-h-screen">  
            <StoreSlideshow images={image} />
        </div>
    );
}
