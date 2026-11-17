import React from "react";
import "./Skills.css";

function Skills() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Git & GitHub",
        "Prompt Engineering"
    ];

    return (
        <section className="skills" id="skills">
            <div className="skills-container">
                <h2 className="skills-title">
                    My <span>Skills</span>
                </h2>

                <p className="skills-description">
                    Technologies and tools I use
                    while learning and building projects.
                </p>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;