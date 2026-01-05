import React from 'react';
import { ArrowRight, Printer, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-bg"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <br /><br />
                    <div className="hero-badge">

                        <span className="scrolling-text">Impression Numérique • Infographie • Bureautique</span>
                    </div>
                    <h1>
                        Votre Vision,<br />
                        <span className="text-gradient">Imprimée en Grand.</span>
                    </h1>
                    <p className="hero-description">
                        Ets PRO INFORMATIQUE vous accompagne dans tous vos projets de communication visuelle.
                        De la conception graphique à l'impression grand format, nous donnons vie à vos idées.
                    </p>
                    <div className="hero-actions">
                        <a href="#services" className="btn btn-primary">
                            Nos Services <ArrowRight size={20} />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Demander un Devis
                        </a>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Qualité</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Support</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">+1k</span>
                            <span className="stat-label">Clients</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="visual-card card-1">
                        <Printer size={32} />
                        <span>Grand Format</span>
                    </div>
                    <div className="visual-card card-2">
                        <span>Roll-Up</span>
                    </div>
                    <div className="visual-circle"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
