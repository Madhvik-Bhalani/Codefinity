import React from 'react';
import './Footer.css'

function Footer({ imprintRef }) {
    const imprintHandler = () => {
        imprintRef.current.click()
    }

    return (
        <footer className="py-3 footer-box">
            <div className="container d-flex justify-content-between align-items-center">
                {/* Left Side: Copyright */}
                <p className="mb-0 text-light">
                    &copy; {new Date().getFullYear()} Codefinity. All rights reserved. This website does not belong to a real company. It is a{' '}
                    <em>Planspiel Web Engineering</em> project at the Technical University of Chemnitz.
                </p> 

                {/* Right Side: Imprint */}
                <div className="d-flex align-items-center footer-icon" onClick={imprintHandler} style={{ cursor: "pointer" }}>

                    <i className="fas fa-file-contract me-2"></i>
                    <span className='text-light'>Imprint</span>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
