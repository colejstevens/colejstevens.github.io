import React, { useEffect, useState } from 'react';
import '../styles/BottomNav.css';

export default function BottomNav({ setActiveSection, activeSection }) {
    const sections = ['about', 'experience', 'skills', 'projects', 'connect'];
    const [animate, setAnimate] = useState(null);

    useEffect(() => {
        setAnimate(null); // reset
        const timer = setTimeout(() => setAnimate(activeSection), 10);
        return () => clearTimeout(timer);
    }, [activeSection]);

    return (
        <nav className="bottom-nav">
            {sections.map((name) => (
                <button
                    key={name}
                    onClick={() => setActiveSection(name)}
                    className={`${
                        activeSection === name ? 'selected' : ''
                    } ${animate === name ? 'animate' : ''}`}
                >
                    {name}
                </button>
            ))}
        </nav>
    );
}
