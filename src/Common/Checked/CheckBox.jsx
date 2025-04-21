import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import react from '../../assets/React.png';
import JS from '../../assets/Javascript.png'; 
import html from '../../assets/HTML5.png';
import github from '../../assets/Git.png';
import css from '../../assets/CSS3.png';
import figma from '../../assets/Figma.png';
import './CheckBox.css';

const StyledCheckbox = styled(Checkbox)({
    color: '#5b7d9c',
    '&.Mui-checked': {
        color: '#13f3ca',
    },
    '& .MuiSvgIcon-root': {
        fontSize: 28,
    },
    '&:hover': {
        backgroundColor: 'rgba(19, 243, 202, 0.1)',
    },
});

const SkillBox = ({ icon, label, defaultChecked = true }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isChecked, setIsChecked] = useState(defaultChecked);

    const skillVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    };

    const iconVariants = {
        hover: {
            rotate: 360,
            scale: 1.1,
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div
            variants={skillVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <FormControlLabel
                control={
                    <StyledCheckbox 
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                    />
                }
                label={
                    <motion.div className="checked__box">
                        <motion.div
                            className="icon-container"
                            variants={iconVariants}
                        >
                            <motion.img
                                src={icon}
                                alt={label}
                                className="skill-icon"
                                style={{ 
                                    filter: isChecked ? 'none' : 'grayscale(100%)',
                                    opacity: isChecked ? 1 : 0.6 
                                }}
                            />
                        </motion.div>
                        <motion.p 
                            className="checkbox__phara"
                            animate={{ 
                                color: isHovered ? '#13f3ca' : '#5b7d9c',
                                scale: isHovered ? 1.05 : 1
                            }}
                        >
                            {label}
                        </motion.p>
                        <AnimatePresence>
                            {isHovered && (
                                <motion.div
                                    className="skill-tooltip"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                >
                                    Click to {isChecked ? 'uncheck' : 'check'} {label}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                }
            />
        </motion.div>
    );
};

const CheckBox = () => {
    const skillsLeft = [
        { icon: html, label: 'HTML', proficiency: 90 },
        { icon: css, label: 'CSS', proficiency: 85 },
        { icon: JS, label: 'JavaScript', proficiency: 80 }
    ];

    const skillsRight = [
        { icon: react, label: 'React', proficiency: 85 },
        { icon: github, label: 'Git', proficiency: 75 },
        { icon: figma, label: 'Figma', proficiency: 70 }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    return (
        <FormGroup>
            <motion.div 
                className="div__checkBox"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div 
                    className="checkbox__cont"
                    variants={containerVariants}
                >
                    {skillsLeft.map((skill, index) => (
                        <SkillBox
                            key={skill.label}
                            icon={skill.icon}
                            label={skill.label}
                            defaultChecked={true}
                        />
                    ))}
                </motion.div>

                <motion.div 
                    className="checkbox__cont"
                    variants={containerVariants}
                >
                    {skillsRight.map((skill, index) => (
                        <SkillBox
                            key={skill.label}
                            icon={skill.icon}
                            label={skill.label}
                            defaultChecked={true}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </FormGroup>
    );
};

export default CheckBox;