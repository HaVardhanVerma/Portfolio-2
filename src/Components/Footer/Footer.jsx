import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: <FaGithub />,
            url: 'https://github.com/HaVardhanVerma',
            label: 'GitHub'
        },
        {
            icon: <FaLinkedin />,
            url: 'https://linkedin.com/in/harsh-vardhan-verma-976ba024a',
            label: 'LinkedIn'
        },
        {
            icon: <FaTwitter />,
            url: 'https://twitter.com/Harshvardh004',
            label: 'Twitter'
        },
        {
            icon: <MdEmail />,
            url: 'mailto:harshvardhanve246@gmail.com',
            label: 'Email'
        }
    ];

    return (
        <footer className="footer">
            <motion.div 
                className="footer__content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="footer__main">
                    <div className="footer__info">
                        <motion.span 
                            className="footer__name"
                            whileHover={{ scale: 1.05 }}
                        >
                            harsh-vardhan-verma
                        </motion.span>
                        <p className="footer__bio">
                            Frontend Developer crafting seamless digital experiences
                        </p>
                    </div>

                    <div className="footer__social">
                        <h3 className="footer__heading">Connect</h3>
                        <ul className="footer__social-links">
                            {socialLinks.map((link, index) => (
                                <motion.li 
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <a
                                        href={link.url}
                                        className="footer__social-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.label}
                                    >
                                        {link.icon}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

                <motion.div 
                    className="footer__bottom"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <div className="footer__line" />
                    <div className="footer__credits">
                        <p className="footer__copyright">
                            © {currentYear} Harsh Vardhan Verma. All rights reserved.
                        </p>
                        <p className="footer__made-with">
                            Made with React & Framer Motion
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;
