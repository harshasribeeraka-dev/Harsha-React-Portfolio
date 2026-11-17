import React from "react";
import "./Experience.css";

function Experience() {
    return (
        <section className="experience" id="experience">
            <div className="experience-container">

                <h2 className="experience-title">
                    My <span>Journey</span>
                </h2>

                <p className="experience-description">
                    My learning journey and practical development experience.
                </p>

                <div className="experience-timeline">

                    <div className="experience-card">
                        <div className="experience-dot"></div>

                        <h3>MCA Graduate</h3>
                        <h4>Academic Journey</h4>
                        <p>
                            Completed my Master of Computer Applications
                            and developed an interest in software
                            development and web technologies.
                        </p>
                    </div>

                    <div className="experience-card">
                        <div className="experience-dot"></div>

                        <h3>Frontend Development</h3>
                        <h4>Learning & Practice</h4>
                        <p>
                            Practicing HTML, CSS, JavaScript and React.js
                            by building responsive web pages and
                            frontend projects.
                        </p>
                    </div>

                    <div className="experience-card">
                        <div className="experience-dot"></div>

                        <h3>Full-Stack Development</h3>
                        <h4>Practical Learning</h4>
                        <p>
                            Exploring Node.js, Express.js and MongoDB
                            while improving my understanding of
                            full-stack application development.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Experience;