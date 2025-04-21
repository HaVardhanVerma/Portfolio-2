import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { Button } from '../ui/Button';

const StyledHeader = styled(motion.header)`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${theme.layout.headerHeight};
  background: ${theme.colors.background.overlay};
  backdrop-filter: blur(10px);
  z-index: ${theme.zIndex.header};
  transition: ${theme.transitions.standard};

  @media (max-width: ${theme.breakpoints.md}) {
    height: ${theme.layout.mobileHeaderHeight};
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 0 1rem;
  }
`;

const Logo = styled(motion.span)`
  font-family: ${theme.fonts.primary};
  font-size: 1.2rem;
  color: ${theme.colors.primary};
  cursor: pointer;
`;

const Nav = styled(motion.nav)`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileNav = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  max-width: 400px;
  height: 100vh;
  background: ${theme.colors.background.secondary};
  padding: 2rem;
  display: none;
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

const NavLink = styled(motion(Link))`
  font-family: ${theme.fonts.primary};
  font-size: 0.9rem;
  color: ${theme.colors.text.primary};
  text-decoration: none;
  padding: 0.5rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${theme.colors.primary};
    transition: ${theme.transitions.standard};
  }

  &:hover:before,
  &.active:before {
    width: 100%;
  }

  &.active {
    color: ${theme.colors.primary};
  }
`;

const MenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.text.primary};
  cursor: pointer;
  padding: 0.5rem;
  z-index: ${theme.zIndex.header + 1};

  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
  }
`;

const headerVariants = {
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  },
  hidden: {
    y: -100,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  }
};

const navItems = [
  { path: '/', label: '_hello' },
  { path: '/about-me', label: '_about-me' },
  { path: '/projects', label: '_projects' },
  { path: '/contact', label: '_contact' }
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollDirection, isScrolled } = useScrollDirection();
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  return (
    <StyledHeader
      variants={headerVariants}
      initial="visible"
      animate={scrollDirection === 'down' && isScrolled ? 'hidden' : 'visible'}
      style={{
        boxShadow: isScrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.3)' : 'none'
      }}
    >
      <HeaderContent>
        <Link to="/" onClick={closeMenu}>
          <Logo
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            harsh-vardhan-verma
          </Logo>
        </Link>

        <Nav>
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={location.pathname === path ? 'active' : ''}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {label}
            </NavLink>
          ))}
          <Button 
            as="a" 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            size="small"
          >
            Resume
          </Button>
        </Nav>

        <MenuButton
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M4 6H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            />
            <motion.path
              d="M4 12H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.path
              d="M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            />
          </svg>
        </MenuButton>

        <AnimatePresence>
          {isMenuOpen && (
            <MobileNav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              {navItems.map(({ path, label }, i) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink
                    to={path}
                    className={location.pathname === path ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
              <Button 
                as="a" 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                onClick={closeMenu}
              >
                Resume
              </Button>
            </MobileNav>
          )}
        </AnimatePresence>
      </HeaderContent>
    </StyledHeader>
  );
}; 