import React, { useState } from 'react';
import './Gallery.css';

const categories = ['Tout', 'Grand Format', 'Gadgets', 'Infographie'];

const projects = [
    { id: 1, category: 'Grand Format', title: 'Impression Banderole', image: 'https://www.google.com/imgres?q=banderole%20evenement&imgurl=https%3A%2F%2Fwww.copytop.com%2Fupload%2Fmedia%2FmagazineImage%2F0001%2F10%2Fthumb_9428_magazineImage_desktop.jpeg&imgrefurl=https%3A%2F%2Fwww.copytop.com%2Fguides-impression%2Fconseil-entreprise%2Fpratique-amovible-et-a-forte-visibilite-decouvrez-tous-les-avantages-de-la-banderole-publicitaire&docid=-g0Xw1bYjVQ3QM&tbnid=sPyVDIDSjF8ofM&vet=12ahUKEwiR6sOR8OWRAxUGZ0EAHcZdL6AQM3oECDQQAA..i&w=537&h=346&hcb=2&ved=2ahUKEwiR6sOR8OWRAxUGZ0EAHcZdL6AQM3oECDQQAA' },
    { id: 2, category: 'Gadgets', title: 'T-Shirts Personnalisés', image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=600&auto=format&fit=crop' },
    { id: 3, category: 'Infographie', title: 'Création Logo', image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=600&auto=format&fit=crop' },
    { id: 4, category: 'Gadgets', title: 'Mugs Magiques', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=600&auto=format&fit=crop' },
    { id: 5, category: 'Grand Format', title: 'Habillage Véhicule', image: 'https://images.unsplash.com/photo-1617727553252-65863c156eb0?q=80&w=600&auto=format&fit=crop' },
    { id: 6, category: 'Infographie', title: 'Flyer Event', image: 'https://images.unsplash.com/photo-1558655146-d09347e0b7a9?q=80&w=600&auto=format&fit=crop' },
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
