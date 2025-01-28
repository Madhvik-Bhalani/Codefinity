import React from 'react';
import './Hero.css';
import videoBg from '../../Assets/cherobg.mp4'; 

function Hero() {
    return (
        <div className="hero-container">
            <video className="hero-video" autoPlay loop muted>
                <source src={videoBg} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-content">
                <h2 className="hero-subtitle">Your security is our commitment</h2>
                <h1 className="hero-title">
                    <span style={{ color: 'white' }}>"Code</span>
                    <span style={{ color: '#1296DF' }}>finity"</span>
                </h1>
                <p className="hero-tagline">Boundless security, infinite trust</p>
            </div>
        </div>
    );
}

export default Hero;



