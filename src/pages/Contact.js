import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    return (
        <section className="contact">
            <h2>Contáctame</h2>
            <p>Puedes contactarme a traves de mi correo electronico:</p>
            <h2>av906761@gmail.com</h2>
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

export default Contact;