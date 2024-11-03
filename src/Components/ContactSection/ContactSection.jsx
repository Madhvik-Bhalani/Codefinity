import React from 'react';
import "./ContactSection.css";


function ContactSection() {
    return (
        <div className="container py-5" id='contact'>
            <div className="row justify-content-between">

                <div
                    className="col-md-5 p-4 contact-box"
                    style={{
                        background: "linear-gradient(172deg, #1296DF 6.23%, #1F5B7C 131.99%, #22506A 146.31%, #292F32 165.42%)",
                        color: '#fff',
                        borderRadius: '8px',
                    }}>
                    <h3>Contact Information</h3>
                    <p style={{ fontSize: "17px" }}> Fill up the form and our team will get back to you within 24 hours.</p>

                    <div className="mb-3 mt-4 contact-icons">
                        <a href="tel:+4917657616606"><i className="fas fa-phone-alt me-2" style={{ fontSize: "18px" }}></i><span style={{ fontSize: "17px" }}>+49 185966 57797</span></a>
                    </div>

                    <div className="mb-3 contact-icons">
                        <a href="mailto:info.codefinity@gmail.com"> <i className="fas fa-envelope me-2" style={{ fontSize: "18px" }}></i>
                            <span style={{ fontSize: "17px" }}>info.codefinity@gmail.com</span></a>
                    </div>

                    <div className="mb-3 contact-icons">
                        <a href="https://maps.app.goo.gl/7bCCec5ikEsdQHCb9" target='_blank'><i className="fas fa-map-marker-alt me-2" style={{ fontSize: "18px" }}></i>
                            <span style={{ fontSize: "17px" }}>115 Bernsdorfer Straße, 09126 Chemnitz, Germany</span></a>
                    </div>

                    <div className="mt-5 contact-social-links">
                        <a href="" target='_blank'><i className="fab fa-facebook me-3" style={{ fontSize: "22px" }}></i></a>
                        <a href="" target='_blank'><i className="fab fa-instagram me-3" style={{ fontSize: "22px" }}></i></a>
                        <a href="https://www.linkedin.com/in/Team-Codefinity/" target='_blank'><i className="fab fa-linkedin me-3" style={{ fontSize: "22px" }}></i></a>
                        <a href="https://x.com/Team_Codefinity" target='_blank'><i className="fab fa-twitter me-3" style={{ fontSize: "22px" }}></i></a>
                    </div>
                </div>

                {/* Right Side */}
                <div className="col-md-6 p-4 col-end">
                    <h3 className='text-center mb-3'>Get in Touch with Us</h3>
                    <form>
                        <div className="row mb-4 mt-4">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First Name" required />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last Name" required />
                            </div>
                        </div>

                        <div className="mb-4">
                            <input type="email" className="form-control" placeholder="Email" required />
                        </div>

                        <div className="mb-4">
                            <textarea className="form-control" rows="4" placeholder="Message..." required></textarea>
                        </div>

                        <button type="submit" style={{ background: "linear-gradient(172deg, #1296DF 6.23%, #1F5B7C 131.99%, #22506A 146.31%, #292F32 165.42%)", color: "white", width: "35%" }} className="btn mx-auto d-block">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;
