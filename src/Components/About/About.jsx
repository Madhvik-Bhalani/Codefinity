import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section bg-light py-5" id='about'>
            <div className="container">
                <div className="text-center mb-5">
                    <h2>Who We Are</h2>
                    <p className='mt-3 mb-2'>  
                        At Codefinity, we are a team of dedicated developers and students exploring innovative AI solutions.
                        Our goal is to push the boundaries of technology and bring impactful ideas to life. With a commitment
                        to continuous learning and development, we are building projects that make a difference in the world of AI.
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
                                <p className="text-muted" style={{textAlign:"justify"}}>
                                Our vision is to empower the next generation of developers and innovators through AI projects that solve real-world problems. We aim to remain at the forefront of technology, setting high standards for learning and innovation, and inspiring others to push the boundaries of what is possible.
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
                                <p className="text-muted" style={{textAlign:"justify"}}>
                                Our mission is to learn, innovate, and apply AI technology in meaningful ways. We strive to develop solutions that increase efficiency, create value, and make a positive impact on the tech world. By exploring and collaborating, we aim to make technology accessible and transformative.
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
