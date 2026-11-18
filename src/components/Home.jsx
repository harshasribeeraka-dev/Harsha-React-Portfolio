
import React from "react";
import profileImage from "url:../assets/portfolioimg.png";

import "./Home.css";

function Home() {
    return (
        <section className="home" id="home">
            <div className="home-content">
                <p className="home-greeting">
                    Hello, Welcome to my Portfolio
                </p>
                
                <h1>
                    I'm <span>Harsha Sri Beeraka</span>
                </h1>

                <h2>
                    Aspiring Full-Stack Developer
                </h2>

                <p className="home-description">
                    I'm an MCA graduate passionate about
                    building responsive websites and web
                    applications. I enjoy learning new
                    technologies and turning ideas into
                    real-world projects.
                </p>

                <div className="home-buttons">

                    <a href="#projects" className="btn-primary">
                        View Projects
                    </a>

                    <a href="#contact" className="btn-secondary">
                        Contact Me
                    </a>

                </div>

            </div>

            <div className="home-image">
                <img src={profileImage} alt="My Profile" className="profile-photo" />
            </div>

        </section>
    );
}

export default Home;
