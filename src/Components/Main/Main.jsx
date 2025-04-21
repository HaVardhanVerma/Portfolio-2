import React from 'react';
import img1 from '../../assets/my_photo.png';
import img2 from '../../assets/Rectangle.jpg';
import { motion } from 'framer-motion';
import './Main.css';

function Main() {
    const des = "> Front-end developer";

    const fadeInUp = {
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

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <motion.div 
            className='main'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className='main__text__container'>
                <motion.div
                    className='main__content'
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p 
                        className='main__content__name'
                        variants={fadeInUp}
                    >
                        Hi all. I am 
                        <motion.span 
                            className='main__content__span'
                            variants={fadeInUp}
                        >
                            Harsh Vardhan
                        </motion.span>
                    </motion.p>

                    <motion.span 
                        className='main__content__description'
                        variants={fadeInUp}
                    >
                        {des}
                    </motion.span>
                </motion.div>

                <motion.div 
                    className='main__contact__social'
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p
                        variants={fadeInUp}
                        className='social__handle'
                    > 
                        <span className='social__heading'>// my number</span>
                        <span>
                            <span className="const">const</span> <span className="variable__name">telephone</span> = <span className='telephone__number'>63758 - 75041</span>
                        </span>
                    </motion.p>

                    <motion.p
                        variants={fadeInUp}
                        className='social__handle'
                    >
                        <span className='social__heading'>// my e-mail</span>
                        <span>
                            <span className="const">const</span> <span className="variable__name">email</span> = <a href="mailto:harshvardhanve246@gmail.com">"harshvardhanve246@gmail.com"</a>
                        </span>
                    </motion.p>

                    <motion.p
                        variants={fadeInUp}
                        className='social__handle'
                    >
                        <span className='social__heading'>// you can also see it on my Github page</span>
                        <span>
                            <span className="const">const</span> <span className="variable__name">githubLink</span> = <a href="https://github.com/HaVardhanVerma" target="_blank" rel="noopener noreferrer">"https://github.com/HaVardhanVerma"</a>
                        </span>
                    </motion.p>

                    <motion.p
                        variants={fadeInUp}
                        className='social__handle'
                    >
                        <span className='social__heading'>// you can check my linkedin page</span>
                        <span>
                            <span className="const">const</span> <span className="variable__name">linkedinPage</span> = <a href="https://www.linkedin.com/in/harsh-vardhan-verma-976ba024a/" target="_blank" rel="noopener noreferrer">"https://shorturl.at/3LSwK"</a>
                        </span>
                    </motion.p>
                </motion.div>
            </div>
            
            <motion.div
                className='main__img__container'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2
                }}
            >
                <motion.img 
                    src={img2} 
                    alt="Background shape" 
                    className='rectangle'
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.img 
                    src={img1} 
                    alt="Harsh Vardhan" 
                    className='avatar'
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>
        </motion.div>
    );
}

export default Main;
