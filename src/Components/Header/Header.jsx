import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router'
import './Header.css';

function Header() {

  const [menu, setMenu] = useState(false);

  const makeMove = () => {

    console.log(menu);

    setMenu(!menu);

    console.log(menu);

    if( menu) {
      document.querySelector('.header__close').style.display = 'none';
    }

    else {
      document.querySelector('.header__close').style.display = 'block';
    }
  }

  return (
    <div className='header'>
      <p className='header__name'>
        harsh-vardhan-verma
      </p>

      <div className={menu ? 'header__Links' : 'active'}>   
          <Link to="/" className='link'>_hello</Link>
          <Link to="/about-me" className="link">_about-me</Link>
          <Link to="/projects" className="link">_projects</Link>
          <Link to="/contact" className="link">_contact
          </Link>

          <div className='header__close'>
            <FontAwesomeIcon 
              onClick={() => makeMove()}
              style={{color: 'white', cursor: 'pointer', fontSize: '1rem'}}
              icon={faX} 
            />
          </div>
      </div>

      <div className='header__menu'>
        <FontAwesomeIcon
          onClick={() => makeMove()}
          style={{color: 'white', cursor: 'pointer'}}
          icon={faBars} 
        />
      </div>

    </div>
  )
}

export default Header;
