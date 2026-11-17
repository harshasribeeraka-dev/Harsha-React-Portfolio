
import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                Harsha's Portfolio
            </div>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
                <li><a href="#home" onClick={closeMenu}>Home</a></li>
                <li><a href="#about" onClick={closeMenu}>About</a></li>
                <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
                <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                <li><a href="#education" onClick={closeMenu}>Education</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
