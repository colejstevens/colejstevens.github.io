import React, { useState, useRef } from 'react';
import '../styles/Experience.css';

const experiences = [
    {
        title: 'Software and Database Developer',
        company: 'Innovation, Science, and Economic Development Canada',
        dates: 'Jan – Apr 2023',
        tasks: [
            'Built SQL and FME pipelines to process large geospatial datasets from GIS-based systems.',
            'Automated internal tools using Python and VBA, reducing manual task time.',
            'Created and maintained Microsoft Access databases supporting several departments.',
        ],
    },
    {
        title: 'Software and Database Developer',
        company: 'Innovation, Science, and Economic Development Canada',
        dates: 'Sep – Dec 2023',
        tasks: [
            'Built SQL and FME pipelines to process large geospatial datasets from GIS-based systems.',
            'Automated internal tools using Python and VBA, reducing manual task time.',
            'Created and maintained Microsoft Access databases supporting several departments.',
        ],
    },
    {
        title: 'Engineering Intern',
        company: 'quantilope',
        dates: 'Jun – Aug 2022',
        tasks: [
            'Managed service workflows using Salesforce, ensuring consistent response tracking.',
            'Developed Python scripts to convert JSON data into formatted Excel charts for client delivery.',
            'Assisted in backend service migration from JavaScript to Python, improving code maintainability.',
            'Designed and executed unit tests for PowerPoint and data tabulation tools.',
        ],
    },
];

export default function Experience() {
    const [activeIndex, setActiveIndex] = useState(null);
    const cardRefs = useRef([]);

    const toggleExpand = (index) => {
        setActiveIndex((prev) => {
            const newIndex = prev === index ? null : index;
            setTimeout(() => {
                if (cardRefs.current[index]) {
                    cardRefs.current[index].scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'nearest',
                    });
                }
            }, 10);
            return newIndex;
        });
    };

    return (
        <section className="experience-section">
            <h2 className="experience-title">Experience Timeline</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardRefs.current[index] = el)}
                        className={`experience-card ${activeIndex === index ? 'expanded' : ''}`}
                        onClick={() => toggleExpand(index)}
                    >
                        <div className="experience-header">
                            <h3>{exp.title}</h3>
                            <p className="company">{exp.company}</p>
                            <p className="dates">{exp.dates}</p>
                        </div>
                        {activeIndex === index && (
                            <ul className="task-list">
                                {exp.tasks.map((task, i) => (
                                    <li key={i}>{task}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
