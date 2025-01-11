import React from 'react';
import img from '../../assets/code__ide.jpg';
import CheckBox from '../../Common/Checked/CheckBox';
import {motion} from 'framer-motion'
import './AboutMe.css';

function AboutMe() {
  return (
    <div className='about__me'>

        <div className='about__me__section'>

            <div className='about__cont'>
                <motion.h1
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{delay: 0.5, duration: 1}}
                 className='about__heading'>
                    [about_me]
                </motion.h1>

                <motion.p
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{delay: 0.3, duration: 1}}
                 className='about__phara'>
                    <span className="about__comnt">/**</span>
                    <p className='about__comnt'>* As a skilled frontend developer, I specialize in creating visually appealing and user-friendly web pages that offer seamless UI/UX experiences. With years of experience in the field, I have had the pleasure of working on diverse projects, crafting interfaces that not only meet but exceed client expectations.</p>
                    <span className="about__comnt">*/</span>
                </motion.p>
            </div>
                
            <motion.div
             initial={{ y: -10 }}
             animate={{ y: 10 }}
             transition={{
               type: "smooth",
               repeatType: "mirror",
               duration: 2,
               repeat: Infinity,
             }}
             className='about__img'>
                <img src={img} alt="" className='img'/>
            </motion.div>

        </div>

        <div className='about__skills'>
            
            <div className='skills__text'>

                <motion.h1
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{delay: 0.5, duration: 1}}
                 className='about__heading'>
                    [my_skills]
                </motion.h1>

                <motion.p
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{delay: 0.3, duration: 1}}
                 className='about__phara'>
                    <span className="about__comnt">/**</span>
                    <p className='about__comnt'>* Welcome to the story of my developer journey! 🌟 As a passionate problem solver and lifelong learner, I’ve had the privilege of diving into a variety of tools, technologies, and concepts that shaped me into the developer I am today. Here is a showcase of the skills I’ve cultivated and the ones I’m actively sharpening on this exhilarating ride.</p>
                    <span className="about__comnt">*/</span>
                </motion.p>
            </div>

            <motion.div
             initial={{ y: -10 }}
             animate={{ y: 10 }}
             transition={{
                type: "smooth",
                repeatType: "mirror",
                duration: 2,
                repeat: Infinity,
             }}
             className='skills__show'>
                <div className='skills__box'>
                    <CheckBox></CheckBox>
                </div>
            </motion.div>
        </div>

    </div>
  )
}

export default AboutMe
