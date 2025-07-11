import React, { useState, useEffect } from 'react';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Connect from './components/Connect.jsx';
import BottomNav from './components/BottomNav.jsx';
import './styles/App.css';

export default function App() {
    const [activeSection, setActiveSection] = useState('about');
    const [fadeState, setFadeState] = useState('fade-in');
    const [pendingSection, setPendingSection] = useState(null);

    const handleSectionChange = (section) => {
        if (section === activeSection) return;
        setFadeState('fade-out');
        setPendingSection(section);
    };

    useEffect(() => {
        if (fadeState === 'fade-out' && pendingSection) {
            const timeout = setTimeout(() => {
                setActiveSection(pendingSection);
                setFadeState('fade-in');
                setPendingSection(null);
            }, 300); // matches the CSS transition duration
            return () => clearTimeout(timeout);
        }
    }, [fadeState, pendingSection]);

    const renderActiveSection = () => {
        switch(activeSection) {
            case 'about': return <About />;
            case 'experience': return <Experience />;
            case 'skills': return <Skills />;
            case 'projects': return <Projects />;
            case 'connect': return <Connect />;
            default: return <About />;
        }
    };

    return (
        <div>
            <main className={`fade-wrapper ${fadeState}`}>
                {renderActiveSection()}
            </main>
            <BottomNav
                setActiveSection={handleSectionChange}
                activeSection={activeSection}
            />
        </div>
    );
}
