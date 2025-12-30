import React from 'react';
import { Printer, Palette, Coffee, PenTool } from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: <Printer size={40} />,
        title: 'Impression Grand Format',
        description: 'Banderoles, Roll-ups, Affiches publicitaires, Autocollants. Qualité haute définition pour votre communication.',
        color: 'var(--color-primary)'
    },
    {
        icon: <Palette size={40} />,
        title: 'Infographie & Design',
        description: 'Création de logos, flyers, dépliants, cartes de visite et maquettes professionnelles.',
        color: 'var(--color-secondary)'
    },
    {
        icon: <PenTool size={40} />,
        title: 'Gadgets Personnalisés',
        description: 'T-shirts, Casquettes, Stylos, Mugs, Porte-clés. Idéal pour vos cadeaux d\'entreprise.',
        color: '#eab308' // Yellow/Gold
    },
    {
        icon: <Coffee size={40} />,
        title: 'Cyber Café / Bureautique',
        description: 'Saisie, reliure, plastification, photocopie, scan, et accès internet haut débit.',
        color: '#3b82f6' // Blue
    }
];

const Services = () => {
    return (
        <section className="section services-section" id="services">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Nos Services</h2>
                    <p className="section-subtitle">Une gamme complète de solutions pour votre entreprise.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index} style={{ '--accent-color': service.color }}>
                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <a href="#contact" className="service-link">Commander service →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
