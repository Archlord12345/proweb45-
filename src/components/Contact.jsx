import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Merci de nous avoir contacté ! Nous reviendrons vers vous bientôt.');
    };

    return (
        <section className="section contact-section" id="contact">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2 className="section-title text-left">Discutons de votre projet</h2>
                        <p className="contact-desc">
                            Besoin d'un devis ou d'informations ? Remplissez le formulaire ou contactez-nous directement.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="icon-box"><Phone /></div>
                                <div>
                                    <h4>Téléphone</h4>
                                    <p>(+237) 699 97 98 57</p>
                                    <p>(+237) 679 92 93 64</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon-box"><Mail /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p>contact@pro-imprimerie.cm</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon-box"><MapPin /></div>
                                <div>
                                    <h4>Adresse</h4>
                                    <p>Bafoussam : Déscente Akwa</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="map-placeholder">
                            <span>Carte Google Maps (Bafoussam)</span>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Nom complet</label>
                            <input type="text" placeholder="Votre nom" required />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="votre@email.com" required />
                        </div>

                        <div className="form-group">
                            <label>Service souhaité</label>
                            <select>
                                <option>Impression Grand Format</option>
                                <option>Infographie</option>
                                <option>Gadgets Personnalisés</option>
                                <option>Bureautique</option>
                                <option>Autre</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea placeholder="Décrivez votre besoin..." rows="5" required></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">
                            Envoyer le message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
