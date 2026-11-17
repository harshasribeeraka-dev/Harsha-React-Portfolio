import React from "react";
import "./Projects.css";

function Projects() {
    const projects = [
        {
            title: "Food Delivery Website",
            category: "Web Development",
            description:
                "A website concept for browsing food items and exploring an online food ordering experience.",
            technologies: "HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB"
        },
        {
            title: "Travel Landing Page",
            category: "Frontend Development",
            description:
                "A responsive landing page designed to showcase travel destinations and inspire users to explore.",
            technologies: "HTML, CSS, JavaScript"
        },
        {
            title: "Expense Tracker",
            category: "Web Application",
            description:
                "An application concept for recording expenses and keeping track of personal spending.",
            technologies: "React.js, JavaScript, CSS"
        }
    ];

    return (
        <section className="projects" id="projects">
            <div className="projects-container">

                <h2 className="projects-title">
                    My <span>Projects</span>
                </h2>

                <p className="projects-description">
                    Some projects I've worked on during my development journey.
                </p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-number">
                                0{index + 1}
                            </div>

                            <h3>{project.title}</h3>

                            <h4>{project.category}</h4>

                            <p>{project.description}</p>

                            <div className="project-tech">
                                {project.technologies}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Projects;