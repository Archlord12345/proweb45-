import React, { useEffect } from 'react';
import Services from '../components/Services';

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-services" style={{ paddingTop: '80px' }}>
            <Services />
        </div>
    );
};

export default ServicesPage;
