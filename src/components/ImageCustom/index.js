import React, { useState } from 'react';
import { forwardRef } from 'react';
import img from 'assets/image/noImage.webp';
const ImageCustom = forwardRef(({ src, fallback = img, ...props }, ref) => {
    const [defaultImage, setDefaultImage] = useState('');

    const onError = () => {
        setDefaultImage(fallback);
    };
    return (
        <img
            src={src || defaultImage}
            ref={ref}
            onError={onError}
            alt=""
            {...props}
        />
    );
});
export default ImageCustom;
