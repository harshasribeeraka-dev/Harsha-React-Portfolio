
import React from "react";
import "./About.css";

function About() {
    return (
        <section className="about" id="about">

            <div className="about-container">

                <div className="about-content">

                    <h2 className="about-title">
                        About <span>Me</span>
                    </h2>

                    <h3>
                        Aspiring Full-Stack Developer
                    </h3>

                    <p>
                        I'm an MCA graduate passionate about
                        web development and building modern
                        web applications.
                    </p>

                    <p>
                        I enjoy learning new technologies,
                        improving my coding skills, and
                        developing practical projects that
                        solve real-world problems.
                    </p>

                    <p>
                        My goal is to become a skilled
                        Full-Stack Developer and continuously
                        grow as a software professional.
                    </p>

                    <a href="#contact" className="about-btn">
                        Let's Connect
                    </a>

                </div>

                <div className="about-details">

                    <div className="about-card">
                        <h3>MCA</h3>
                        <p>Educational Qualification</p>
                    </div>

                    <div className="about-card">
                        <h3>React.js</h3>
                        <p>Frontend Development</p>
                    </div>

                    <div className="about-card">
                        <h3>Node.js</h3>
                        <p>Backend Development</p>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;
