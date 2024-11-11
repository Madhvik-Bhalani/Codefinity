import React, { useState } from 'react';
import './ContactSection.css';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import validator from 'validator';

function ContactSection() {
    // Initialize state
    const [data, setData] = useState({ fname: '', lname: '', email: '', msg: '' });

    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Function to handle form submission
    const submitHandler = async (e) => {
        e.preventDefault();

        // Trim whitespace and validate email and other fields
        const trimmedData = {
            fname: data.fname.trim(),
            lname: data.lname.trim(),
            email: data.email.trim(),
            msg: data.msg.trim(),
        };


        if (!trimmedData.fname || !trimmedData.lname || !trimmedData.msg) {
            toast.error("Please fill in all fields without whitespace.", {
                position: "top-right",
                autoClose: 3500
            });
            return;
        }


        // Validate email
        if (!validator.isEmail(data.email)) {
            toast.error("Please enter a valid email address.", {
                position: "top-right",
                autoClose: 3500
            });
            return; // Exit the function if the email is invalid
        }

        const mailData = {
            from_name: `${data.fname} ${data.lname}`,
            from_email: data.email,
            msg: data.msg,
        };

        try {
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                mailData,
                { publicKey: process.env.REACT_APP_PUBLIC_API }
            );

            toast.success("Thank you for reaching out! Your message has been sent successfully.", {
                position: "top-right",
                autoClose: 3500
            });
            setData({ fname: '', lname: '', email: '', msg: '' });
        } catch (error) {
            console.error(error);
            toast.error("There was an error sending your message. Please try again later." + error.message, {
                position: "top-right",
                autoClose: 3500
            });
        }
    };


    return (
        <div className="container py-5" id='contact'>
            <div className="row justify-content-between">
                {/* Contact Information Section */}
                <div className="col-md-5 p-4 contact-box" style={{ background: 'linear-gradient(172deg, #1296DF 6.23%, #1F5B7C 131.99%, #22506A 146.31%, #292F32 165.42%)', color: '#fff', borderRadius: '8px' }}>
                    <h3>Contact Information</h3>
                    <p style={{ fontSize: '17px' }}>Let’s explore how we can build <span>a safer digital future together.</span></p>
                    <div className="mb-3 mt-4 contact-icons">
                        <a href="tel:+4917657616606">
                            <i className="fas fa-phone-alt me-2" style={{ fontSize: '18px' }}></i>
                            <span style={{ fontSize: '17px' }}>+49 185966 57797</span>
                        </a>
                    </div>
                    <div className="mb-3 contact-icons">
                        <a href="mailto:info.codefinity@gmail.com">
                            <i className="fas fa-envelope me-2" style={{ fontSize: '18px' }}></i>
                            <span style={{ fontSize: '17px' }}>info.codefinity@gmail.com</span>
                        </a>
                    </div>
                    <div className="mb-3 contact-icons">
                        <a href="https://maps.app.goo.gl/57BmAnCyAQHGw7GJ7" target="_blank" rel="noreferrer">
                            <i className="fas fa-map-marker-alt me-2" style={{ fontSize: '18px' }}></i>
                            <span style={{ fontSize: '17px' }}>Str. der Nationen 62, 09111, Chemnitz, Germany</span>
                        </a>
                    </div>
                    <div className="mt-5 contact-social-links">
                        <a href="https://www.facebook.com/teamcodefinity
" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook me-3" style={{ fontSize: '22px' }}></i>
                        </a>
                        <a href="" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram me-3" style={{ fontSize: '22px' }}></i>
                        </a>
                        <a href="https://www.linkedin.com/in/Team-Codefinity/" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin me-3" style={{ fontSize: '22px' }}></i>
                        </a>
                        <a href="https://x.com/Team_Codefinity" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter me-3" style={{ fontSize: '22px' }}></i>
                        </a>
                    </div>
                </div>

                {/* Form Section */}
                <div className="col-md-6 p-4 col-end">
                    <h3 className="text-center mb-3">Get in Touch with Us</h3>
                    <form onSubmit={submitHandler}>
                        <div className="row mb-4 mt-4">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="First Name"
                                    name="fname"
                                    value={data.fname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Last Name"
                                    name="lname"
                                    value={data.lname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <textarea
                                className="form-control"
                                rows="4"
                                placeholder="Message..."
                                name="msg"
                                value={data.msg}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            style={{
                                background: 'linear-gradient(172deg, #1296DF 6.23%, #1F5B7C 131.99%, #22506A 146.31%, #292F32 165.42%)',
                                color: 'white',
                                width: '35%',
                            }}
                            className="btn mx-auto d-block"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;
