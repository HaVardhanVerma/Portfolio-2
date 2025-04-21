import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Project.css';
import img1 from '../../assets/P_image1.png';
import img2 from '../../assets/P_image2.png';
import img3 from '../../assets/P_image3.png';
import img4 from '../../assets/P_image4.png';

const Project = () => {
    const [selectedId, setSelectedId] = useState(null);

    const projects = [
        {
            id: 1,
            name: "crypto-tracker",
            image: img1,
            description: "A web application which helps users to track the detail of the crypto currency / coins. and also helps the uses to learn about the crypto currency. user can easly track the coins with the help of the the real-time graph representation and user also compare two coins.",
            link: "https://hv-crypto-tracker.netlify.app/",
            github: "https://github.com/HaVardhanVerma/Crypto-Tracker",
            tech: ["React", "Chart.js", "API Integration", "Responsive Design"]
        },
        {
            id: 2,
            name: "notekeeper",
            image: img2,
            description: "A well designed note keeper website which can keeps the notes of the user. a fully responsive and functional website which has a good UI design and user experience. it also keeps the the track the time of the notes from the creation of the note. it consist of the CURD operations.",
            link: "https://hv-notekeeper.netlify.app/",
            github: "https://github.com/HaVardhanVerma/NoteKeeper",
            tech: ["React", "LocalStorage", "CRUD Operations", "Material-UI"]
        },
        {
            id: 3,
            name: "expense-tracker",
            image: img3,
            description: "A website which keeps the track of the user's expenses. user can add the description of the expense also. you can also add the credit.",
            link: "https://hv-expense-tracker.netlify.app/",
            github: "https://github.com/HaVardhanVerma/Expense-Tracker",
            tech: ["React", "Chart.js", "LocalStorage", "Responsive Design"]
        },
        {
            id: 4,
            name: "chips-website-UI",
            image: img4,
            description: "A UI based project which have the best UI/UX. a website full of the animations and fully responsive for all screen sizes.",
            link: "https://ha-chips.netlify.app/",
            github: "https://github.com/HaVardhanVerma/Chips-Website",
            tech: ["React", "Framer Motion", "CSS3", "Responsive Design"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const ProjectCard = ({ project }) => (
        <motion.div 
            className="project__container"
            variants={cardVariants}
            whileHover={{ y: -10 }}
            onClick={() => setSelectedId(project.id)}
        >
            <motion.p className="proj__text__1">
                <span className="proj__no">project {project.id}</span>
                <span className="proj__slash">//</span>
                <span className="proj__name">_{project.name}</span>
            </motion.p>

            <motion.div className="proj__detail">
                <div className="proj__image-container">
                    <motion.img 
                        src={project.image} 
                        alt={project.name}
                        className="proj__img"
                        whileHover={{ scale: 1.05 }}
                    />
                    <div className="proj__overlay">
                        <motion.div 
                            className="proj__tech-stack"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                        >
                            {project.tech.map((tech, index) => (
                                <span key={index} className="proj__tech-tag">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <div className="proj__content">
                    <p className="proj__desc">
                        <span className="comment-start">/**</span>
                        <span className="comment-text">* {project.description}</span>
                        <span className="comment-end">*/</span>
                    </p>

                    <div className="proj__links">
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="proj__link"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaGithub /> Source Code
                        </motion.a>
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="proj__link proj__link--live"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaExternalLinkAlt /> Live Demo
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );

    return (
        <section className="project">
            <motion.div
                className="project__header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="projects">[projects]</h1>
                <p className="project__subtitle">
                    Here are some of my recent projects that showcase my skills and experience
                </p>
            </motion.div>

            <motion.div 
                className="project__section"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </motion.div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div 
                        className="project__modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div 
                            className="project__modal"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <button 
                                className="modal__close"
                                onClick={() => setSelectedId(null)}
                            >
                                ×
                            </button>
                            <div className="modal__content">
                                <img 
                                    src={projects.find(p => p.id === selectedId)?.image} 
                                    alt="Project Preview" 
                                    className="modal__image"
                                />
                                <div className="modal__info">
                                    <h2>{projects.find(p => p.id === selectedId)?.name}</h2>
                                    <p>{projects.find(p => p.id === selectedId)?.description}</p>
                                    <div className="modal__tech">
                                        {projects.find(p => p.id === selectedId)?.tech.map((tech, index) => (
                                            <span key={index} className="modal__tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Project;
