import React, { useState, useEffect } from 'react';
import { Menu, X, Printer, Phone } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Accueil', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Services Premium', href: '/services-premium' },
        { name: 'Produits', href: '/produits' },
        { name: 'Réalisations', href: '/galerie' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo">
                    <img src="logo.png" alt="PRO INFORMATIQUE Logo" className="logo-img" />
                </Link>

                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.href}
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions">
                    <a href="tel:+237699979857" className="btn-call">
                        <Phone size={18} />
                        <span className="desktop-only">699 97 98 57</span>
                    </a>
                    <button className="menu-toggle" onClick={toggleMenu}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
