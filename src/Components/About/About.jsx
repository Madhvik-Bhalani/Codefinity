import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section bg-light py-5" id='about'>
            <div className="container">
                <div className="text-center mb-5">
                    <h2>Who We Are</h2>
                    <p className='mt-3 mb-2'>
                        Codefinity is where AI meets proactive security. We are a passionate team pushing boundaries to create intelligent, trust-centered solutions.
                    </p>
                </div>
                <div className="row">
                    {/* Vision */}
                    <div className="col-md-6 mb-4">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-eye fs-1 me-3"></i>
                                    <h5 className="mb-0">Our Vision</h5>
                                </div>

                                <p className="text-muted" style={{ textAlign: "justify" }}>
                                    Our vision is to shape a trusted digital landscape by pioneering AI-driven security solutions that proactively protect what matters most. We empower organizations to stay ahead of emerging threats, safeguard their assets, and maintain resilience in a rapidly changing world—ensuring a safer, more confident, and trustworthy digital future for all.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mission */}
                    <div className="col-md-6 mb-4">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-bullseye fs-1 me-3"></i>
                                    <h5 className="mb-0">Our Mission</h5>
                                </div>

                                <p className="text-muted" style={{ textAlign: "justify" }}>
                                    Our mission is to make security smarter by harnessing the power of AI to equip organizations for proactive defense. We develop adaptive, AI-driven solutions that enable them to stay ahead of evolving threats, safeguard critical assets, and maintain operational resilience—ensuring they can thrive securely in a dynamic digital environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
