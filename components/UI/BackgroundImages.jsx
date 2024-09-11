import React, { useEffect } from 'react';

const BackgroundImages = () => {
    useEffect(() => {
        const bgImages = document.querySelectorAll('.bg-image');

        if (bgImages) {
            bgImages.forEach((bgImage) => {
                const bgData = bgImage.getAttribute('data-bg-src');
                bgImage.style.backgroundImage = `url("${bgData}")`;
            });
        }
    }, []);

    return (
        <div className="bg-lines">
            <div className="bg-line-1"></div>
            <div className="bg-line-2"></div>
            <div className="bg-line-3"></div>
            <div className="bg-line-4"></div>
        </div>
    );
}

export default BackgroundImages;
