
import React from "react";
import "./Education.css";

function Education() {
    const educationDetails = [
        {
            icon: "🎓",
            degree: "Master of Computer Applications (MCA)",
            institution: "Andhra University",
            description: "Postgraduate education in Computer Applications.",
            year: "2024 - 2026"
        },
        {
            icon: "🏛️",
            degree: "Bachelor of Computer Applications (BCA)",
            institution: "Aditya Degree College for Women",
            description: "Bachelor's degree.",
            year: "2021 - 2024"
        },
        {
            icon: "📚",
            degree: "Intermediate",
            institution: "K. S. N Junior College",
            description: "Intermediate education.",
            year: "2019 - 2021"
        },
        {
            icon: "🏫",
            degree: "Schooling",
            institution: "Javaharlal Nehru Municipal High School",
            description: "Secondary school education.",
            year: "2018 - 2019"
        }
    ];

    return (
        <section className="education" id="education">
            <div className="education-container">

                <h2 className="education-title">
                    My <span>Education</span>
                </h2>

                <p className="education-description">
                    My academic background and qualifications.
                </p>

                <div className="education-grid">
                    {educationDetails.map((item, index) => (
                        <div className="education-card" key={index}>
                            <div className="education-icon">
                                {item.icon}
                            </div>

                            <div className="education-content">
                                <h3>{item.degree}</h3>
                                <h4>{item.institution}</h4>
                                <p>{item.description}</p>
                                <p className="education-year">{item.year}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Education;
