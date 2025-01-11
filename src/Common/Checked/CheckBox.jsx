import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import react from '../../assets/React.png';
import JS from '../../assets/Javascript.png'; 
import html from '../../assets/HTML5.png';
import github from '../../assets/Git.png';
import css from '../../assets/CSS3.png';
import figma from '../../assets/Figma.png';
import './CheckBox.css';

export default function CheckBox() {
  return (
    <FormGroup>
        <div className='div__checkBox'>
            <div className='checkbox__cont'> 
                <FormControlLabel control={<Checkbox defaultChecked />} label={<div className='checked__box'>
                    <img src={html} alt="" />
                    <p className="checkbox__phara">HTML</p>
                </div>}/>
                <FormControlLabel control={<Checkbox defaultChecked/>} label={<div className='checked__box'>
                    <img src={css} alt="" />
                    <p className="checkbox__phara">CSS</p>
                </div>} />
                <FormControlLabel control={<Checkbox defaultChecked/>} label={<div className='checked__box'>
                    <img src={JS} alt="" />
                    <p className="checkbox__phara">JavaScript</p>
                </div>} /> 
            </div>

            <div className='checkbox__cont'>
                <FormControlLabel control={<Checkbox defaultChecked />} label={<div className='checked__box'>
                    <img src={react} alt="" />
                    <p className="checkbox__phara">react</p>
                </div>}/>
                <FormControlLabel control={<Checkbox defaultChecked/>} label={<div className='checked__box'>
                    <img src={github} alt="" />
                    <p className="checkbox__phara">Git</p>
                </div>} />
                <FormControlLabel control={<Checkbox defaultChecked/>} label={<div className='checked__box'>
                    <img src={figma} alt="" />
                    <p className="checkbox__phara">Figma</p>
                </div>} /> 
            </div>
        </div>
      
    </FormGroup>
  );
}