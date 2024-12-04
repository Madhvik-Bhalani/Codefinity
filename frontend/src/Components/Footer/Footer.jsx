import React from 'react';
import './Footer.css'

function Footer({ imprintRef }) {
    const imprintHandler = () => {
        imprintRef.current.click()
    }

    return (
        <footer className="py-3 footer-box mt-3">
            <div className="container d-flex justify-content-between align-items-center">
                {/* Left Side: Copyright */}
                <p className="mb-0 text-dark">
                    &copy; {new Date().getFullYear()} Codefinity. All rights reserved.
                </p>

                {/* Right Side: Imprint */}
                <div className="d-flex align-items-center footer-icon" onClick={imprintHandler} style={{ cursor: "pointer" }}>

                    <i className="fas fa-file-contract me-2"></i>
                    <span className='text-dark'>Imprint</span>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
