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
        <div className="flex items-center justify-center min-h-screen space-y-8 m-20">  
            <StoreSlideshow images={image} />
        </div>
    );
}
