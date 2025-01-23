"use client";
import React, { useEffect, useState } from 'react'

const WaveAnim = ({ src, alt }: { src: string, alt: string }) => {
    const [offsetY, setOffsetY] = useState<number>(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (offsetY >= window.innerHeight) {
        return null;
    }
    return (
        <div className="w-full h-screen absolute">
            <img
                src={src}
                alt={alt}
                className="absolute top-0 left-0 w-full object-cover z-10"
                style={{
                    transform: `translateY(${Math.pow(offsetY / 15, 2)}px) rotate(${-offsetY / 3}deg)`, // Réduire la vitesse de défilement
                    transition: 'transform 0.1s ease-out', // Pour un effet plus fluide
                }}
            />
        </div>
    );
};

export default WaveAnim;