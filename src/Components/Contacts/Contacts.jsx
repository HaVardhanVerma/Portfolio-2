import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Contacts.css';

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = 'Name is required';
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            errors.email = 'Invalid email address';
        }
        if (!formData.message.trim()) errors.message = 'Message is required';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        
        if (Object.keys(errors).length === 0) {
            setStatus({ submitting: true, submitted: false, error: null });
            
            try {
                await emailjs.send(
                    'YOUR_SERVICE_ID',
                    'YOUR_TEMPLATE_ID',
                    {
                        from_name: formData.name,
                        from_email: formData.email,
                        message: formData.message,
                    },
                    'YOUR_PUBLIC_KEY'
                );
                
                setStatus({ submitting: false, submitted: true, error: null });
                setFormData({ name: '', email: '', message: '' });
                
                setTimeout(() => {
                    setStatus(prev => ({ ...prev, submitted: false }));
                }, 5000);
            } catch (error) {
                setStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please try again.' });
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="contact">
            <motion.div
                className="contact__section"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="contact__form" variants={itemVariants}>
                    <h2 className="contact__me">Get in Touch</h2>
                    <form className="user__form" onSubmit={handleSubmit}>
                        <div className="user__data">
                            <motion.input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="contact__input"
                                value={formData.name}
                                onChange={handleChange}
                                variants={itemVariants}
                                whileFocus={{ scale: 1.02 }}
                            />
                            <motion.input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="contact__input"
                                value={formData.email}
                                onChange={handleChange}
                                variants={itemVariants}
                                whileFocus={{ scale: 1.02 }}
                            />
                        </div>
                        <motion.textarea
                            name="message"
                            placeholder="Your Message"
                            className="user__message"
                            value={formData.message}
                            onChange={handleChange}
                            variants={itemVariants}
                            whileFocus={{ scale: 1.01 }}
                        />
                        <motion.button
                            type="submit"
                            className="form__btn"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            disabled={status.submitting}
                        >
                            {status.submitting ? 'Sending...' : 'Send Message'}
                        </motion.button>
                        {status.submitted && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                style={{ color: '#13f3ca', marginTop: '1rem' }}
                            >
                                Message sent successfully!
                            </motion.p>
                        )}
                        {status.error && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                style={{ color: '#ff4444', marginTop: '1rem' }}
                            >
                                {status.error}
                            </motion.p>
                        )}
                    </form>
                </motion.div>

                <motion.div className="contact__links" variants={itemVariants}>
                    <div className="contact__socials">
                        <motion.div
                            className="conatct__social"
                            variants={itemVariants}
                            whileHover={{ x: 10 }}
                        >
                            <a
                                href="mailto:your.email@example.com"
                                className="contact__link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MdEmail className="contact__img" />
                                <span className="social__name">Email</span>
                            </a>
                        </motion.div>
                        <motion.div
                            className="conatct__social"
                            variants={itemVariants}
                            whileHover={{ x: 10 }}
                        >
                            <a
                                href="https://github.com/yourusername"
                                className="contact__link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="contact__img" />
                                <span className="social__name">GitHub</span>
                            </a>
                        </motion.div>
                        <motion.div
                            className="conatct__social"
                            variants={itemVariants}
                            whileHover={{ x: 10 }}
                        >
                            <a
                                href="https://linkedin.com/in/yourusername"
                                className="contact__link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin className="contact__img" />
                                <span className="social__name">LinkedIn</span>
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contacts;
