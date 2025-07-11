import React from 'react';
import '../styles/Connect.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Connect() {
    return (
        <section className="connect-section">
            <h2>Let’s Connect</h2>
            <p>Interested in working together or just want to say hi? Reach out via any of the platforms below.</p>

            <div className="social-links">
                <a href="https://www.linkedin.com/in/colejstevens/" target="_blank" rel="noopener noreferrer" className="button-shadow">
                    <FaLinkedin className="icon" />
                    LinkedIn
                </a>
                <a href="https://github.com/colejstevens" target="_blank" rel="noopener noreferrer" className="button-shadow">
                    <FaGithub className="icon" />
                    GitHub
                </a>
                <a href="mailto:colejstevens@gmail.com" className="button-shadow">
                    <FaEnvelope className="icon" />
                    Email Me
                </a>
            </div>
        </section>
    );
}
