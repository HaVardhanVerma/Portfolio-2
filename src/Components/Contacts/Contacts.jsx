import React, { useRef, useState } from 'react';
import './Contacts.css';
import img1 from '../../assets/instagram.png';
import img2 from '../../assets/linkedin.png';
import img3 from '../../assets/twitter.png';
import img4 from '../../assets/gmail.png';
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'

function Contacts() {

    const form = useRef();

    const sendData = (e) => {

        console.log(form.current);
        
        e.preventDefault();

        console.log("Wellcome !");

        emailjs
            .sendForm('service_w18gekb', 'template_2846eot', form.current, {
                publicKey: 'zcbFbAmj4uhmLBvD9',
              })
                .then(() => {
                    console.log("Data is tranmitted sucessfully")
                    alert("message is sucessfully transmitted ✅");
                    },
                    (error) => {
                        console.log("Here is the error:- ", error);
                    }
                );
    }

    return (
        <div className='contact'>
            
            <h1 className='contact__me'>[contact-me]</h1>

            <div className='contact__section'>

                <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{delay: 0.5, duration: 1}}
                 className='contact__links'>

                    <div className='contact__socials'>

                        <motion.li
                         initial={{ opacity: 0, x: -50 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{delay: 0.7, duration: 1}}
                         className='conatct__social'>
                            <a href="https://www.instagram.com/harsh_vardhan_274/" className='contact__link'>
                                <img src={img1} alt="" className='contact__img'/>
                                <p className='social__name'>// instagram</p>
                            </a>
                        </motion.li>

                        <motion.li
                         initial={{ opacity: 0, x: -50 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{delay: 0.8, duration: 1}}
                         className='conatct__social'>
                            <a href="https://x.com/Harshvardh004?t=EyAmz3WAALSXamOEWTVr9g&s=09" className='contact__link'>
                                <img src={img3} alt="" className='contact__img'/>
                                <p className='social__name'>// twitter / X</p>
                            </a>
                        </motion.li>

                        <motion.li
                         initial={{ opacity: 0, x: -50 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{delay: 0.9, duration: 1}}
                         className='conatct__social'>
                            <a href="harshvardhanve246@gmail.com" className='contact__link'>
                                <img src={img4} alt="" className='contact__img'/>
                                <p className='social__name'>// g-mail</p>
                            </a>
                        </motion.li>

                        <motion.li
                         initial={{ opacity: 0, x: -50 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{delay: 1, duration: 1}}
                         className='conatct__social'>
                            <a href="https://www.linkedin.com/in/harsh-vardhan-verma-976ba024a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='contact__link'>
                                <img src={img2} alt="" className='contact__img'/>
                                <p className='social__name'>// linkedine</p>
                            </a>
                        </motion.li>
                    </div>

                </motion.div>

                <motion.div
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{delay: 0.5, duration: 1}}
                 className='contact__form'>

                    <form ref={form} className='user__form' onSubmit={sendData}>
                        <div className='user__data'>
                            <input type="text" required placeholder='// enter your name' name='user_name' className='contact__input'/>
                            <input type="e-mail" required placeholder='// enter your e-mail' name='user_email' className='contact__input'/>
                        </div>

                        
                        <textarea name="user_project" required placeholder='// enter your message' className='user__message'>

                        </textarea>
                        
                        <button type='submit' className='form__btn'>send-message</button>
                    </form>
                </motion.div>

            </div>
        </div>
    )
}

export default Contacts;
