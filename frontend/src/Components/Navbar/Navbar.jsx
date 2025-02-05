import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from '../../Assets/logo1.png';
import './Navbar.css';
import { motion } from 'framer-motion';

function Navbar() {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); 
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav
            className={`navbar navbox navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : ''}`}
        >
            <div className="container-fluid nav-main-box">
                {/* Logo */}
                <Link
                    className="navbar-brand"
                    to="#"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('home');
                    }}
                >
                    <img src={logo} className="logoimg" alt="Codefinity Logo" />
                </Link>

                {/* Navbar Links */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 nav-links">
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.hash === "#home" ? "active" : ""}`}
                                to="#"
                                onClick={(e) => {
                                    e.preventDefault(); 
                                    scrollToSection('home');
                                }}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.hash === "#about" ? "active" : ""}`}
                                to="#about"
                                onClick={() => scrollToSection('about')}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.hash === "#product" ? "active" : ""}`}
                                to="#product"
                                onClick={() => scrollToSection('product')}
                            >
                                Product
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.hash === "#team" ? "active" : ""}`}
                                to="#team"
                                onClick={() => scrollToSection('team')}
                            >
                                Team
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.hash === "#contact" ? "active" : ""}`}
                                to="#contact"
                                onClick={() => scrollToSection('contact')}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Get Started Button */}
                <a
      href="https://astra-codefinity.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.button
        className="btn-outline-sm"
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.3 }}
      >
        <span className="shimmer-effect"></span>
        Get Started
      </motion.button>
    </a>
            </div>
        </nav>
    );
}

export default Navbar;
