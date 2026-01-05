import React, { useState } from 'react';
import { Printer, Palette, Coffee, PenTool, Check } from 'lucide-react';
import './ServicesTabs.css';

const serviceCategories = [
    {
        id: 'impression',
        name: 'Impression',
        icon: <Printer size={24} />,
        services: [
            { name: 'Banderoles', features: ['Haute résolution', 'Toutes tailles', 'Matériaux variés'] },
            { name: 'Roll-ups', features: ['Rétractables', 'Transport facile', 'Design professionnel'] },
            { name: 'Affiches', features: ['Couleurs éclatantes', 'Finition brillante', 'Livraison rapide'] },
            { name: 'Autocollants', features: ['Résistants', 'Étanche', 'Personnalisés'] }
        ]
    },
    {
        id: 'design',
        name: 'Design',
        icon: <Palette size={24} />,
        services: [
            { name: 'Logos', features: ['Original', 'Moderne', 'Mémorable'] },
            { name: 'Flyers', features: ['Attractif', 'Impactant', 'Multi-format'] },
            { name: 'Branding', features: ['Identité complète', 'Cohérence', 'Impact visuel'] },
            { name: 'Infographie', features: ['Créative', 'Professionnelle', 'Engagement'] }
        ]
    },
    {
        id: 'gadgets',
        name: 'Gadgets',
        icon: <PenTool size={24} />,
        services: [
            { name: 'T-Shirts', features: ['Qualité premium', 'Tous les styles', 'Durabilité'] },
            { name: 'Mugs', features: ['Thermique', 'Couleurs vives', 'Commande min basse'] },
            { name: 'Casquettes', features: ['Réglable', 'Broderie', 'Logo personnalisé'] },
            { name: 'Stylos', features: ['Logo gravé', 'Écritoire', 'Pratique'] }
        ]
    },
    {
        id: 'bureautique',
        name: 'Bureautique',
        icon: <Coffee size={24} />,
        services: [
            { name: 'Saisie', features: ['Rapide', 'Précis', 'Confidentiel'] },
            { name: 'Reliure', features: ['Professionnelle', 'Tout type', 'Rapide'] },
            { name: 'Plastification', features: ['Protection', 'Brillant', 'Durabilité'] },
            { name: 'Scan & Copie', features: ['Haute qualité', 'Rapide', 'Affordable'] }
        ]
    }
];

const ServicesTabs = () => {
    const [activeTab, setActiveTab] = useState('impression');
    const activeCategory = serviceCategories.find(cat => cat.id === activeTab);

    return (
        <section className="section services-tabs-section" id="services-tabs">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Nos Services Premium</h2>
                    <p className="section-subtitle">Explorez notre gamme complète de services professionnels</p>
                </div>

                {/* Tabs Navigation */}
                <div className="tabs-navigation">
                    {serviceCategories.map(category => (
                        <button
                            key={category.id}
                            className={`tab-button ${activeTab === category.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(category.id)}
                        >
                            <span className="tab-icon">{category.icon}</span>
                            <span className="tab-name">{category.name}</span>
                        </button>
                    ))}
                </div>

                {/* Content Container */}
                <div className="tabs-content">
                    <div className="services-3d-grid">
                        {activeCategory.services.map((service, index) => (
                            <div
                                key={index}
                                className="service-3d-card"
                                style={{ '--delay': `${index * 0.1}s` }}
                            >
                                <div className="card-inner">
                                    <div className="card-front">
                                        <div className="card-front-content">
                                            <h3>{service.name}</h3>
                                            <div className="card-icon-large">→</div>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="card-back-content">
                                            <h4>{service.name}</h4>
                                            <ul className="features-list">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx}>
                                                        <Check size={16} />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="services-cta">
                    <p>Besoin d'un devis personnalisé ?</p>
                    <a href="#contact" className="btn btn-primary">Demander un devis</a>
                </div>
            </div>
        </section>
    );
};

export default ServicesTabs;
