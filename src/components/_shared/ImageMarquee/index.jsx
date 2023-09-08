import React from 'react';
import './ImageMarquee.css';

const ImageMarquee = ({ imageUrl }) => {
    return (
        <div className="marquee-container">
            <image
                src="/path/to/your/image.jpg"
                alt="Marquee Image"
                className="marquee-image"
            />
        </div>
    );
};

export default ImageMarquee;