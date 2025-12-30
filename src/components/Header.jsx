import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Printer, Phone } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Accueil', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Réalisations', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className={`header ${isScrolled || location.pathname !== '/' ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo">
                    <span className="logo-icon"><Printer /></span>
                    <div className="logo-text">
                        <span className="logo-main">PRO</span>
                        <span className="logo-sub">INFORMATIQUE</span>
                    </div>
                </Link>

                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
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
