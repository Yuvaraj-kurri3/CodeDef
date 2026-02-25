import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Our Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Contact Us', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    const menuRef = useRef(null);

    // Scroll detection for glassmorphism background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close on outside click
    useEffect(() => {
        const handleOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        if (menuOpen) document.addEventListener('mousedown', handleOutside);
        return () => document.removeEventListener('mousedown', handleOutside);
    }, [menuOpen]);

    // Lock body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const handleLinkClick = (href) => {
        setActiveLink(href);
        setMenuOpen(false);
    };

    return (
        <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
            <nav className="navbar__inner" ref={menuRef}>

                {/* ===== LOGO ===== */}
                <a href="#" className="navbar__logo" aria-label="CodeDef Home">
                    <div className="navbar__logo-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" fill="var(--accent-blue)" />
                            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="var(--accent-blue-light)" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>
                    <span className="navbar__logo-text">
                        Code<span className="navbar__logo-accent">Def</span>
                    </span>
                </a>

                {/* ===== DESKTOP NAV LINKS ===== */}
                <ul className="navbar__links" role="navigation" aria-label="Main navigation">
                    {navLinks.map(({ label, href }) => (
                        <li key={href} className="navbar__link-item">
                            <a
                                href={href}
                                className={`navbar__link${activeLink === href ? ' navbar__link--active' : ''}`}
                                onClick={() => handleLinkClick(href)}
                            >
                                {label}
                                <span className="navbar__link-underline" />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* ===== CTA BUTTON ===== */}
                <a href="#contact" className="navbar__cta" onClick={() => setMenuOpen(false)}>
                    <span>Let's Talk</span>
                    <svg className="navbar__cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>

                {/* ===== HAMBURGER (Mobile) ===== */}
                <button
                    className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                >
                    <span className="navbar__ham-line navbar__ham-line--top" />
                    <span className="navbar__ham-line navbar__ham-line--mid" />
                    <span className="navbar__ham-line navbar__ham-line--bot" />
                </button>

            </nav>

            {/* ===== MOBILE MENU OVERLAY ===== */}
            <div className={`navbar__mobile-overlay${menuOpen ? ' navbar__mobile-overlay--open' : ''}`}>
                <ul className="navbar__mobile-links" role="navigation" aria-label="Mobile navigation">
                    {navLinks.map(({ label, href }, i) => (
                        <li
                            key={href}
                            className="navbar__mobile-item"
                            style={{ '--delay': `${i * 0.07 + 0.1}s` }}
                        >
                            <a
                                href={href}
                                className={`navbar__mobile-link${activeLink === href ? ' navbar__mobile-link--active' : ''}`}
                                onClick={() => handleLinkClick(href)}
                            >
                                <span className="navbar__mobile-link-num">0{i + 1}</span>
                                {label}
                            </a>
                        </li>
                    ))}
                    <li className="navbar__mobile-item" style={{ '--delay': `${navLinks.length * 0.07 + 0.1}s` }}>
                        <a href="#contact" className="navbar__cta navbar__cta--mobile" onClick={() => setMenuOpen(false)}>
                            Let's Talk
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
