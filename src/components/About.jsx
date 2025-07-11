import React, { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import '../styles/About.css';

const TYPING_SPEED = 100;

export default function About() {
    const fullName = 'Cole Stevens';
    const [displayedText, setDisplayedText] = useState('');
    const [typingDone, setTypingDone] = useState(false);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= fullName.length) {
                setDisplayedText(fullName.slice(0, index));
                index++;
            } else {
                clearInterval(interval);
                setTypingDone(true);
            }
        }, TYPING_SPEED);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="about-section">
            <h1 className="typing-text">
                {displayedText}
                <span className={`cursor ${typingDone ? 'blink' : ''}`} />
            </h1>
            <h2 className="subtitle">Software Engineer</h2>
            <p className="description">
                Honours Computer Science graduate passionate about building impactful software solutions. Experienced in full-stack development and data engineering, creating tools that solve real-world problems.
            </p>
            <a
                href="/Cole_Stevens_Resume.pdf"
                download
                className="download-cv-button"
            >
                <FaDownload className="icon" />
                Download CV
            </a>
        </section>
    );
}
