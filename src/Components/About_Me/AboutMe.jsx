import React from 'react';
import { motion } from 'framer-motion';
import img from '../../assets/code__ide.jpg';
import CheckBox from '../../Common/Checked/CheckBox';
import './AboutMe.css';

const AboutMe = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
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

    const combinedImageVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.section 
            className="about__me"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="about__me__section"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="about__cont" variants={itemVariants}>
                    <motion.h1 
                        className="about__heading" 
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.02,
                            color: "#64ffda",
                            transition: { duration: 0.2 }
                        }}
                    >
                        [about_me]
                    </motion.h1>

                    <motion.div 
                        className="about__phara" 
                        variants={itemVariants}
                    >
                        <motion.span 
                            className="about__comnt"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            /**
                        </motion.span>
                        <motion.p 
                            className="about__comnt"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            * As a skilled frontend developer, I specialize in creating visually appealing 
                            and user-friendly web pages that offer seamless UI/UX experiences. With years 
                            of experience in the field, I have had the pleasure of working on diverse projects, 
                            crafting interfaces that not only meet but exceed client expectations.
                        </motion.p>
                        <motion.p 
                            className="about__comnt"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9 }}
                        >
                            * My approach combines modern design principles with robust technical implementation, 
                            ensuring that each project is not just visually stunning but also performs 
                            exceptionally well.
                        </motion.p>
                        <motion.span 
                            className="about__comnt"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.1 }}
                        >
                            */
                        </motion.span>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="about__img"
                    variants={itemVariants}
                >
                    <motion.img
                        src={img}
                        alt="Code IDE"
                        className="img"
                        variants={combinedImageVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className="about__skills"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="skills__text" variants={itemVariants}>
                    <motion.h1 
                        className="about__heading" 
                        variants={itemVariants}
                        whileHover={{ 
                            scale: 1.02,
                            color: "#64ffda",
                            transition: { duration: 0.2 }
                        }}
                    >
                        [my_skills]
                    </motion.h1>

                    <motion.div 
                        className="about__phara" 
                        variants={itemVariants}
                    >
                        <motion.span 
                            className="about__comnt"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.3 }}
                        >
                            /**
                        </motion.span>
                        <motion.p 
                            className="about__comnt"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.5 }}
                        >
                            * Welcome to the story of my developer journey! 🌟 As a passionate problem solver 
                            and lifelong learner, I've had the privilege of diving into a variety of tools, 
                            technologies, and concepts that shaped me into the developer I am today.
                        </motion.p>
                        <motion.p 
                            className="about__comnt"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.7 }}
                        >
                            * Here is a showcase of the skills I've cultivated and the ones I'm actively 
                            sharpening on this exhilarating ride. Each skill represents a milestone in my 
                            journey and a tool in my developer toolkit.
                        </motion.p>
                        <motion.span 
                            className="about__comnt"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.9 }}
                        >
                            */
                        </motion.span>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="skills__show"
                    variants={itemVariants}
                    whileHover={{ 
                        scale: 1.02,
                        transition: {
                            duration: 0.3,
                            ease: "easeInOut"
                        }
                    }}
                >
                    <motion.div 
                        className="skills__box"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.6 }}
                    >
                        <CheckBox />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default AboutMe;
