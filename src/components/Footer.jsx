
import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <h2>Harsha Sri Beeraka</h2>

            <p>
                Aspiring Full-Stack Developer
            </p>

            <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>

            <div className="footer-divider"></div>

            <p className="footer-copy">
                © {new Date().getFullYear()} Harsha Sri Beeraka.
                All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
