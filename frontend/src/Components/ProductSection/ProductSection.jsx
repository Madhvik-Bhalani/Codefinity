import React from 'react';
import './ProductSection.css';
import astraImage from '../../Assets/Astra_nobg.png';

function ProductSection() {
    return (
        <div className="product-section" id="product">
            {/* Centered Heading */}
            <h2 className="product-title">Introducing Astra</h2>

            {/* Image and Text Side by Side */}
            <div className="product-content">
                {/* Image Section */}
                <div className="product-image">
                    <img src={astraImage} alt="Astra AI Tool" />
                </div>

                {/* Text Section */}
                <div className="product-text">
                    <p className="product-description">
                        Take your digital security to the next level with
                        <strong>
                            <span className="highlighted-text"> Astra</span>
                        </strong>
                        – the ultimate AI-powered cybersecurity tool. Detect threats in real-time, gain actionable insights, and secure your assets like never before.
                    </p>

                    <button className="cta-button">Explore Astra</button>
                </div>
            </div>
        </div>
    );
}

export default ProductSection;
