import React, { useState } from 'react';
import './ContactSection.css';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import validator from 'validator';

function ContactSection() {
    const [data, setData] = useState({ fname: '', lname: '', email: '', msg: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        const trimmedData = {
            fname: data.fname.trim(),
            lname: data.lname.trim(),
            email: data.email.trim(),
            msg: data.msg.trim(),
        };

        if (!trimmedData.fname || !trimmedData.lname || !trimmedData.msg) {
            toast.error("Please fill in all fields without whitespace.", {
                position: "top-right",
                autoClose: 3500,
            });
            return;
        }

        if (!validator.isEmail(data.email)) {
            toast.error("Please enter a valid email address.", {
                position: "top-right",
                autoClose: 3500,
            });
            return;
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
                autoClose: 3500,
            });
            setData({ fname: '', lname: '', email: '', msg: '' });
        } catch (error) {
            console.error(error);
            toast.error("There was an error sending your message. Please try again later." + error.message, {
                position: "top-right",
                autoClose: 3500,
            });
        }
    };

    return (
        <div className="contact-container py-5" id="contact">
            <div className="contact-content">
                {/* Contact Info */}
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p className="contact-description">Let’s explore how we can build a safer digital future together.</p>
                    <div className="contact-details">
                        <div className="contact-item">
                            <a href="tel:+4917657616606">
                                <i className="fas fa-phone-alt"></i> +49 185966 57797
                            </a>
                        </div>
                        <div className="contact-item">
                            <a href="mailto:info.codefinity@gmail.com">
                                <i className="fas fa-envelope"></i> info.codefinity@gmail.com
                            </a>
                        </div>
                        <div className="contact-item">
                            <a href="https://maps.app.goo.gl/57BmAnCyAQHGw7GJ7" target="_blank" rel="noreferrer">
                                <i className="fas fa-map-marker-alt"></i> Str. der Nationen 62, 09111, Chemnitz, Germany
                            </a>
                        </div>
                    </div>
                    <div className="social-links">
                        <a href="https://www.facebook.com/teamcodefinity" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/Team-Codefinity/" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://x.com/Team_Codefinity" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>

                {/* Form */}
                <div className="contact-form">
                    <h3>Get in Touch with Us</h3>
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-input"
                                placeholder="First Name"
                                name="fname"
                                value={data.fname}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Last Name"
                                name="lname"
                                value={data.lname}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <input
                            type="email"
                            className="form-input"
                            placeholder="Email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            className="form-textarea"
                            rows="4"
                            placeholder="Message..."
                            name="msg"
                            value={data.msg}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit" className="form-button">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;
