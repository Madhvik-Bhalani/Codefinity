import React from 'react'
import { Link, useLocation } from "react-router-dom";
import logo from '../../Assets/logo1.png';
import './Navbar.css';
function Navbar() {

    let location = useLocation();


    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav className="navbar navbox navbar-expand-lg bg-light bg-body-tertiary fixed-top" style={{ height: "75px" }}>
                <div className="container-fluid nav-main-box">
                    <Link className="navbar-brand d-flex align-items-center" to="/#home" onClick={() => scrollToSection('home')}>
                        <img src={logo} className="logoimg" alt="Codefinity.." />
                        <span className="nav-link active web-app-name mt-1">
                            <h1 style={{ fontSize: "39px" }}><span style={{ color: "#121b22", textShadow: "0.4px 0.4px 0.4px #121b22" }}>Code</span><span style={{ color: "#5a8ad3", textShadow: "0.4px 0.4px 0.4px #121b22" }}>finity</span></h1>
                        </span>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 sidebox">


                            <li className="nav-item">
                                <Link className="nav-link links" to="/#home" onClick={() => scrollToSection('home')} style={{ color: location.hash === "#home" ? "#5a8ad3" : "", textShadow: location.hash === "#home" ? ".37px .37px .37px #121b22" : "" }}>
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link links" to="/#about" onClick={() => scrollToSection('about')} style={{ color: location.hash === "#about" ? "#5a8ad3" : "", textShadow: location.hash === "#about" ? ".37px .37px .37px #121b22" : "" }}>
                                    About
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link links" to="/#team" onClick={() => scrollToSection('team')} style={{ color: location.hash === "#team" ? "#5a8ad3" : "", textShadow: location.hash === "#team" ? ".37px .37px .37px #121b22" : "" }}>
                                    Team
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link links" to="/#contact" onClick={() => scrollToSection('contact')} style={{ color: location.hash === "#contact" ? "#5a8ad3" : "", textShadow: location.hash === "#contact" ? ".37px .37px .37px #121b22" : "" }}>
                                    Contact
                                </Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
