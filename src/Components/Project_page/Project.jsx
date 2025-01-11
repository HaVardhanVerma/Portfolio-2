import React from 'react';
import './Project.css';
import img1 from '../../assets/P_image1.png';
import img2 from '../../assets/P_image2.png';
import img3 from '../../assets/P_image3.png';
import img4 from '../../assets/P_image4.png';
import {motion} from 'framer-motion';

export default function Project() {
  return (
    <div className='project'>

        <h1 className='projects'>[projects]</h1>

        <div className='project__section'>

            <div className='project__container'>

                <motion.p
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{delay: 0.3, duration: 1}}
                 className='proj__text__1'><span className='proj__no'>project 1</span> <span className='proj__slash'>//</span> <span className='proj__name'>_crypto-tracker</span></motion.p>

                <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{delay: 0.5, duration: 1}}
                 className='proj__detail'>
                    <img src={img1} alt="" className='proj__img'/>

                    <p className='proj__deac'>
                        <span>/**</span>
                        <br />
                        * a web application which helps users to track the detail of the crypto currency / coins. and also helps the uses to learn about the crypto currency. user can easly track the coins with the help of the the real-time graph representation.
                        and user also compare two coins.
                        <br />
                        <span>*/</span>
                    </p>

                    <div className='proj__btn'>
                        <a href="https://hv-crypto-tracker.netlify.app/">view-project</a>
                    </div>

                </motion.div>
            </div>

            <div className='project__container'>

                <motion.p
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{delay: 0.3, duration: 1}}
                 className='proj__text__1'><span className='proj__no'>project 2</span> <span className='proj__slash'>//</span> <span className='proj__name'>_notekeeper</span></motion.p>

                <motion.div
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{delay: 0.5, duration: 1}}
                 className='proj__detail'>
                    <img src={img2} alt="" className='proj__img'/>

                    <p className='proj__deac'>
                        <span>/**</span>
                        <br />
                        * a well designed note keeper website which can keeps the notes of the user. a fully responsive and functional website which has a good UI design and user experience. it also keeps the the track the time of the notes from the creation of the note. it consist of the CURD operations.
                        <br />
                        <span>*/</span>
                    </p>

                    <div className='proj__btn'>
                        <a href="https://hv-notekeeper.netlify.app/">view-project</a>
                    </div>

                </motion.div>
            </div>

            <div className='project__container'>

                <motion.p
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{delay: 0.3, duration: 1}}
                 className='proj__text__1'><span className='proj__no'>project 3</span> <span className='proj__slash'>//</span> <span className='proj__name'>_expense-tracker</span></motion.p>

                <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{delay: 0.5, duration: 1}}
                 className='proj__detail'>
                    <img src={img3} alt="" className='proj__img'/>

                    <p className='proj__deac'>
                        <span>/**</span>
                        <br />
                        * a website which keeps the track of the user's expenses. user can add the description of the expense also. ypu can also add the creadit.
                        <br />
                        <span>*/</span>
                    </p>

                    <div className='proj__btn'>
                        <a href="https://hv-expense-tracker.netlify.app/">view-project</a>
                    </div>

                </motion.div>
            </div>

            <div className='project__container'>

                <motion.p
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{delay: 0.3, duration: 1}}
                 className='proj__text__1'><span className='proj__no'>project 4</span> <span className='proj__slash'>//</span> <span className='proj__name'>_chips-website-UI</span></motion.p>

                <motion.div
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{delay: 0.5, duration: 1}}
                 className='proj__detail'>
                    <img src={img4} alt="" className='proj__img'/>

                    <p className='proj__deac'>
                        <span>/**</span>
                        <br />
                        * a UI based project which have the best UI/UX. a website full of the animations and fully responsive for all screen sizes.
                        <br />
                        <span>*/</span>
                    </p>

                    <div className='proj__btn'>
                        <a href="https://ha-chips.netlify.app/">view-project</a>
                    </div>

                </motion.div>
            </div>
        </div>
    </div>
  )
}
