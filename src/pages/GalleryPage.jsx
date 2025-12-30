import React, { useEffect } from 'react';
import Gallery from '../components/Gallery';

const GalleryPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-gallery" style={{ paddingTop: '80px' }}>
            <Gallery />
        </div>
    );
};

export default GalleryPage;
