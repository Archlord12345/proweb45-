import React, { useEffect } from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-contact" style={{ paddingTop: '80px', minHeight: '80vh' }}>
            <div className="container" style={{ paddingTop: '2rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Contactez-nous</h2>
                <Contact />
            </div>
        </div>
    );
};

export default ContactPage;
