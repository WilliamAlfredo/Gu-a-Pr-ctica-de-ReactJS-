import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return (
        <section className="home">
            <h2>soy William Vásquez</h2>
            <p>Soy un <strong>Frontend Developer</strong> especializado en React y Laravel</p>
            <p>Sigueme en mis redes solicales:</p>
            <div className="social-links">
                <a href="https://www.facebook.com/brandon.vasquez.7583992" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x"/>
                </a>
                <a href="www.linkedin.com/in/william-vásquez-dev" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                </a>
                <a href="https://github.com/WilliamAlfredo" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
            </div>
        </section>
    );
}

export default Home;