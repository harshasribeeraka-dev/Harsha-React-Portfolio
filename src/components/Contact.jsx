
import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">

                <h2 className="contact-title">
                    Contact <span>Me</span>
                </h2>

                <p className="contact-description">
                    Have an opportunity or project in mind?
                    Feel free to get in touch.
                </p>

                <div className="contact-card">
                    <div className="contact-item">
                        <span>📧</span>
                        <div>
                            <h3>Email</h3>
                            <p>harshasribeeraka@gmail.com</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span>📍</span>
                        <div>
                            <h3>Location</h3>
                            <p>Peddapuram, Andhra Pradesh</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span>💻</span>
                        <div>
                            <h3>GitHub</h3>
                            <a
                                href="https://github.com/harshasribeeraka-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit My GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <a
                    href="mailto:YOUR_EMAIL@example.com"
                    className="contact-button"
                >
                    Send Me an Email
                </a>

            </div>
        </section>
    );
}

export default Contact;
