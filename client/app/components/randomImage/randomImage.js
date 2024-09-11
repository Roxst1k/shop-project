'use client'

import React, {useEffect, useState} from 'react';
import Loader from "@/app/components/loader/loader";

const RandomImage = () => {
    const [randomImageUrl, setRandomImageUrl] = useState('');
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const getRandomImage = () => {
            const randomNumber = Math.floor(Math.random() * 1000);
            const url = `https://picsum.photos/300/250?random=${randomNumber}`;
            setRandomImageUrl(url);
        };

        getRandomImage();
    }, []);

    useEffect(() => {
        if (randomImageUrl) {
            setLoading(true);
        }
    }, [randomImageUrl]);

    return (
        <div>
            {loading && <Loader />}
            {randomImageUrl && (
                <img
                    onLoad={() => setLoading(false)}
                    src={randomImageUrl}
                    alt="Random"
                    style={{objectFit: "contain"}}
                />
            )}
        </div>
    );
};

export default RandomImage;
