import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

function Header() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    // Close menu when route changes
    closeMenu();
  }, [location]);

  const toggleMenu = () => {
    setMenu(!menu);
    document.body.style.overflow = !menu ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setMenu(false);
    document.body.style.overflow = 'unset';
  };

  const headerStyle = {
    backgroundColor: scrolled ? 'rgba(1, 22, 39, 0.95)' : 'rgba(1, 22, 39, 0.85)',
    paddingBlock: scrolled ? '1rem' : '1.5rem',
  };

  const navLinks = [
    { path: '/', label: '_hello' },
    { path: '/about-me', label: '_about-me' },
    { path: '/projects', label: '_projects' },
    { path: '/contact', label: '_contact' }
  ];

  return (
    <motion.header 
      className='header'
      style={headerStyle}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/">
        <motion.p 
          className='header__name'
          whileHover={{ scale: 1.05, color: '#13f3ca' }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          harsh-vardhan-verma
        </motion.p>
      </Link>

      <AnimatePresence>
        <motion.nav 
          className={`header__Links ${menu ? 'open' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >   
          {navLinks.map((link) => (
            <motion.div
              key={link.path}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                to={link.path} 
                className={`link ${location.pathname === link.path ? 'active-link' : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          <motion.button
            className='header__close'
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <FontAwesomeIcon 
              style={{color: 'white', cursor: 'pointer', fontSize: '1.2rem'}}
              icon={faX} 
            />
          </motion.button>
        </motion.nav>
      </AnimatePresence>

      <motion.button 
        className='header__menu'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMenu}
        aria-label="Open menu"
      >
        <FontAwesomeIcon
          style={{color: 'white', cursor: 'pointer', fontSize: '1.2rem'}}
          icon={faBars} 
        />
      </motion.button>
    </motion.header>
  );
}

export default Header;
