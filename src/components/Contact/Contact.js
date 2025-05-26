import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you for your message! I will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact">
            <div className="contact-container">
                <div className="contact-info animate-slide-up">
                    <h2>Let's Connect</h2>
                    <p className="subtitle">
                        I'm always open to discussing new projects, creative
                        ideas or opportunities to be part of your vision.
                    </p>

                    <div className="contact-methods">
                        <div className="contact-card animate-slide-up delay-1">
                            <div>
                                <h3>Email</h3>
                                <a href="mailto:contact@example.com">
                                    amalaouichi12@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="contact-card animate-slide-up delay-2">
                            <div>
                                <h3>Call</h3>
                                <a href="tel:+1234567890">25642374</a>
                            </div>
                        </div>
                        <div className="contact-card animate-slide-up delay-3">
                            <div>
                                <h3>LinkedIn</h3>
                                <a
                                    href="https://www.linkedin.com/in/amal-aouichi-061697209/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: "linear-gradient(90deg, #6a11cb 0%, #4f6bf5 100%)",
                                    }}>
                                    Amal Aouichi
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-container animate-slide-up delay-3">
                    <form onSubmit={handleSubmit}>
                        <h3>Send Me a Message</h3>

                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Hi Amal, I'd like to talk about..."></textarea>
                        </div>

                        <button type="submit" className="submit-btn">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
