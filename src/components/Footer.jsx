import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <h3 className="footer-title">Ets PRO INFORMATIQUE</h3>
                    <p>
                        Impression numérique grand format, infographie et services bureautiques de qualité supérieure.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-link"><Facebook size={20} /></a>
                        <a href="#" className="social-link"><Instagram size={20} /></a>
                    </div>
                </div>

                <div className="footer-contact">
                    <h4>Nous Contacter</h4>
                    <ul className="contact-list">
                        <li>
                            <MapPin size={18} className="contact-icon" />
                            <span>Bafoussam : Déscente Akwa</span>
                        </li>
                        <li>
                            <Phone size={18} className="contact-icon" />
                            <span>(+237) 699 97 98 57</span>
                        </li>
                        <li>
                            <Phone size={18} className="contact-icon" />
                            <span>(+237) 679 92 93 64</span>
                        </li>
                        <li>
                            <Mail size={18} className="contact-icon" />
                            <span>contact@pro-imprimerie.cm</span>
                        </li>
                    </ul>
                </div>

                <div className="footer-services">
                    <h4>Nos Services</h4>
                    <ul>
                        <li>Grand Format</li>
                        <li>Roll-up & Banderoles</li>
                        <li>Gadgets Publicitaires</li>
                        <li>Infographie</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Ets PRO INFORMATIQUE. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
