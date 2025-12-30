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
                                    <p>proinformatique2@gmail.com</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon-box"><MapPin /></div>
                                <div>
                                    <h4>Adresse</h4>
                                    <p>Bafoussam : Déscente Akwa</p>
                                </div>
                            </div>BP 1313 Bafoussam Descente Akwa, Bafoussam
                        </div>

                        {/* Map Placeholder */}
                        <div className="map-placeholder">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.6015636301117!2d10.415665875677432!3d5.477242634435217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105f9bd8c5e594a7%3A0xdd699cf2fc9a19bc!2sETS%20Pro%20Informatique!5e0!3m2!1sfr!2scm!4v1767113632964!5m2!1sfr!2scm"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
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
