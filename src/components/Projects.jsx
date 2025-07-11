import React, { useState, useEffect, useRef } from 'react';
import '../styles/Projects.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const projects = [
    {
        title: 'Fake News Classifier',
        image: '../../public/img/project1.png',
        miniDescription: 'A LLM designed to determine the truthfulness of news articles',
        description: "For my honours project, I worked with a small team to build a classifier using Meta’s LLaMA model, training it on hundreds of thousands of real and fake news articles so it could predict whether an article was genuine or misleading.",
        technologies: ['Python', 'Machine Learning', 'Scikit-Learn', 'LLaMA', 'PyTorch', 'Unsloth', 'Pandas', 'Transformers'],
        repoUrl: 'https://github.com/c-stev/CSI-4900',
    },
    {
        title: 'Stock Market Analysis',
        image: '../../public/img/project2.png',
        miniDescription: 'Analyzed S&P 500 stock trends and trained classification models to predict market behaviour.',
        description: 'Collaborated with a small team to analyze decades of S&P 500 data, identifying historical patterns and trends. We developed and tested several AI models to forecast stock performance and assess potential profitability.',
        technologies: ['Python', 'APIs', 'PostgreSQL', 'Machine Learning', 'Scikit-Learn', 'Power BI'],
        repoUrl: 'https://github.com/c-stev/CSI-4142-Project',
    }
];

export default function Projects() {
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (!isHovered) {
            intervalRef.current = setInterval(() => {
                setCurrent((prev) => (prev + 1) % projects.length);
            }, 20000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isHovered]);

    // Clean up interval on unmount
    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    const handlePrevious = () => {
        setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % projects.length);
    };

    const handleDotClick = (index) => {
        setCurrent(index);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleProjectClick = () => {
        window.open(projects[current].repoUrl, '_blank', 'noopener,noreferrer');
    };

    const currentProject = projects[current];

    return (
        <section className="projects-section">
            <h2 className="projects-title">Featured Projects</h2>
            <div
                className={`project-card ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleProjectClick}
            >
                <div className="project-content">
                    <h3 className="project-title">{currentProject.title}</h3>

                    {!isHovered ? (
                        <>
                            <img
                                src={currentProject.image}
                                alt={`${currentProject.title} screenshot`}
                                className="project-image"
                            />
                            <p className="project-mini-description">
                                {currentProject.miniDescription}
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="project-description">
                                {currentProject.description}
                            </p>
                            <div className="project-technologies">
                                <h4>Technologies:</h4>
                                <ul className="tech-list">
                                    {currentProject.technologies.map((tech, index) => (
                                        <li key={index} className="tech-item">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <div className="project-controls">
                <button
                    className="nav-arrow nav-arrow--prev"
                    onClick={handlePrevious}
                    aria-label="Previous Project"
                >
                    <FaArrowLeft />
                </button>

                <div className="project-indicators">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === current ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    className="nav-arrow nav-arrow--next"
                    onClick={handleNext}
                    aria-label="Next Project"
                >
                    <FaArrowRight />
                </button>
            </div>
        </section>
    );
}