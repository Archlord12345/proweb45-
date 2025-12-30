import React, { useState } from 'react';
import './Gallery.css';

const categories = ['Tout', 'Grand Format', 'Gadgets', 'Infographie'];

const projects = [
    { id: 1, category: 'Grand Format', title: 'Impression Banderole', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8tN5mkvc8Pq7RIY7w7Nj4Wa8RaJWfYs7Zaw&s' },
    { id: 2, category: 'Gadgets', title: 'T-Shirts Personnalisés', image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=600&auto=format&fit=crop' },
    { id: 3, category: 'Infographie', title: 'Création Logo', image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=600&auto=format&fit=crop' },
    { id: 4, category: 'Gadgets', title: 'Mugs Magiques', image: 'https://live.staticflickr.com/65535/55014363461_7ce5a00f31.jpg' },
    { id: 5, category: 'Grand Format', title: 'Habillage Véhicule', image: 'https://live.staticflickr.com/65535/55014679925_c72cda9c62_w.jpg' },
    { id: 6, category: 'Infographie', title: 'Flyer Event', image: 'https://static.vecteezy.com/ti/vecteur-libre/p1/1829863-business-design-concept-poster-with-flat-cartoon-illustration-flyer-business-pamphlet-brochure-magazine-cover-design-layout-space-for-promotion-advertising-marketing-vector-print-template-in-taille-a4-gratuit-vectoriel.jpg' },
];

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('Tout');

    const filteredProjects = activeCategory === 'Tout'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section className="section gallery-section" id="gallery">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Nos Réalisations</h2>
                    <p className="section-subtitle">Découvrez quelques-uns de nos projets récents.</p>
                </div>

                <div className="gallery-filters">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="gallery-grid">
                    {filteredProjects.map(project => (
                        <div className="gallery-item" key={project.id}>
                            <img src={project.image} alt={project.title} loading="lazy" />
                            <div className="gallery-overlay">
                                <h3>{project.title}</h3>
                                <span>{project.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
