import React, { useState } from 'react';
import '../styles/Skills.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const languageSkills = [
    { name: 'Python' },
    { name: 'Java' },
    { name: 'SQL' },
    { name: 'C++' },
    { name: 'JavaScript' },
    { name: 'HTML/CSS' },
    { name: 'R' },
    { name: 'Golang' },
    { name: 'VBA' }
];

const techSkills = [
    { name: 'React' },
    { name: 'Node.js' },
    { name: 'Salesforce' },
    { name: 'FME' },
    { name: 'Microsoft Access' },
    { name: 'Android Development' },
    { name: 'PostgreSQL' },
    { name: 'MySQL' },
    { name: 'Dialogflow' },
];

const toolSkills = [
    { name: 'Git' },
    { name: 'Version Control' },
    { name: 'Unit Testing' },
    { name: 'Debugging' },
    { name: 'Data Structures' },
    { name: 'Algorithms' },
    { name: 'Object-Oriented Programming' },
    { name: 'AI/ML Modeling' },
];

// Reusable row component
const CarouselRow = ({ title, data }) => {
    const [index, setIndex] = useState(0);
    const visibleCount = 4;

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % data.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + data.length) % data.length);
    };

    const visibleSkills = [];
    for (let i = 0; i < visibleCount; i++) {
        const currentIndex = (index + i) % data.length;
        visibleSkills.push(data[currentIndex]);
    }

    return (
        <div className="skill-row">
            <div className="skill-row-header">
                <button className="nav-button left" onClick={handlePrev}>
                    <FaArrowLeft />
                </button>
                <h3 className="skill-row-title">{title}</h3>
                <button className="nav-button right" onClick={handleNext}>
                    <FaArrowRight />
                </button>
            </div>
            <div className="skills-container">
                <div className="carousel-track">
                    {visibleSkills.map((skill, idx) => (
                        <div key={`${index}-${idx}`} className="skill-card">
                            {skill.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function Skills() {
    return (
        <section className="skills-section">
            <CarouselRow title="Programming Languages" data={languageSkills} />
            <CarouselRow title="Technologies & Frameworks" data={techSkills} />
            <CarouselRow title="Tools & Concepts" data={toolSkills} />
        </section>
    );
}