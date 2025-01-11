import React from 'react';
import img1 from '../../assets/my_photo.png';
import img2 from '../../assets/Rectangle.jpg';
import {motion} from 'framer-motion';
import './Main.css';

function Main() {

    const des = "> Front-end developer";

  return (
    <div className='main'>

        <div className='main__text__container'>

            <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.4, duration: 1 }}
             className='main__content'>
                
                <p className='main__content__name'>
                    Hi all. I am 
                    <span className='main__content__span'>
                        Harsh Vardhan
                    </span>
                </p>

                <span className='main__content__description'>
                    {des}
                </span>
            </motion.div>

            
            <div className='main__contact__social'>
                    
                    <motion.p
                     initial={{ opacity: 0, x: -50 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.5, duration: 1 }}
                     className='social__handle'> 
                        <span className='social__heading'>// my number</span>
                        <span>
                            <span className="const">const</span> <span className="variable__name">telephone</span> = <span className='telephone__number'>63758 - 75041</span>
                        </span>
                    </motion.p>

                    <motion.p
                     initial={{ opacity: 0, x: -50 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.6, duration: 1 }}
                     className='social__handle'>
                        <span className='social__heading'>// my e-mail</span>
                        <span>
                            <span className="const">const</span> <span className="variable__name">email</span> = <a href="harshvardhanve246@gmail.com">"harshvardhanve246@gmail.com";</a>
                        </span>
                    </motion.p>

                    <motion.p
                     initial={{ opacity: 0, x: -50 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.7, duration: 1 }}
                     className='social__handle'>
                        <span className='social__heading'>// you can also see it on my Github page</span>
                        <span>
                            <span className="const">const</span> <span className="variable__name">githubLink</span> = <a href="https://github.com/HaVardhanVerma">"https://github.com/HaVardhanVerma";</a>
                        </span>
                    </motion.p>

                    <motion.p
                     initial={{ opacity: 0, x: -50 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.8, duration: 1 }}
                     className='social__handle'>
                        <span className='social__heading'>// you can check my linkedin page</span>
                        <span>
                            <span className="const">const</span> <span className="variable__name">linkedinPage</span> = <a href="https://www.linkedin.com/in/harsh-vardhan-verma-976ba024a/">"https://shorturl.at/3LSwK";</a>
                        </span>
                    </motion.p>

            </div>
            
        </div>
        
        <motion.div
         initial={{ opacity: 0, x: 50 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ delay: 0.4, duration: 1 }}
         className='main__img__container'>
            <img src={img2} alt="#" srcset="" className='rectangle'/>
            <img src={img1} alt="#" srcset="" className='avatar'/>
        </motion.div>

    </div>
  )
}

export default Main
