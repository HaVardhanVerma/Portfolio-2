import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../styles/theme';
import { HiMenu, HiX } from 'react-icons/hi';

const HeaderWrapper = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${theme.zIndices.banner};
  padding: ${theme.spacing[6]} ${theme.spacing[8]};
  background: ${props => props.isScrolled ? theme.colors.background.primary : 'transparent'};
  transition: background-color ${theme.transitions.default};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[4]} ${theme.spacing[4]};
  }
`;

const HeaderContainer = styled.div`
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text.accent};
  text-decoration: none;
  letter-spacing: -1px;
  z-index: ${theme.zIndices.docked};
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[12]};

  @media (max-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`;

const MobileNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: ${theme.colors.background.primary};
  padding: ${theme.spacing[20]} ${theme.spacing[8]};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing[8]};
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${theme.spacing[10]};

  @media (max-width: ${theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavLink = styled.a`
  color: ${theme.colors.text.accent};
  text-decoration: none;
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: opacity ${theme.transitions.default};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${theme.colors.text.accent};
    transition: width ${theme.transitions.default};
  }

  &:hover::after {
    width: 100%;
  }
`;

const HireButton = styled(motion.a)`
  background: ${theme.colors.text.accent};
  color: ${theme.colors.primary};
  padding: ${theme.spacing[3]} ${theme.spacing[6]};
  border-radius: ${theme.borderRadius.full};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.sm};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  transition: transform ${theme.transitions.spring};

  &::after {
    content: '→';
    font-size: 1.2em;
    transition: transform ${theme.transitions.default};
  }

  &:hover::after {
    transform: translateX(4px);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.text.accent};
  font-size: ${theme.fontSizes['2xl']};
  cursor: pointer;
  z-index: ${theme.zIndices.docked};

  @media (max-width: ${theme.breakpoints.lg}) {
    display: block;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.colors.background.overlay};
  z-index: ${theme.zIndices.overlay};
`;

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderWrapper
      isScrolled={isScrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <HeaderContainer>
        <Logo href="/">ALEX.COM</Logo>
        <Nav>
          <NavLinks>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#works">Works</NavLink>
            <NavLink href="#testimonial">Testimonial</NavLink>
            <NavLink href="#contact">Contact Us</NavLink>
          </NavLinks>
          <HireButton 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </HireButton>
        </Nav>
        <MenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </MenuButton>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <Overlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <MobileNav
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                exit={{ x: 300 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
              >
                <NavLinks>
                  <NavLink href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
                  <NavLink href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink>
                  <NavLink href="#works" onClick={() => setIsMobileMenuOpen(false)}>Works</NavLink>
                  <NavLink href="#testimonial" onClick={() => setIsMobileMenuOpen(false)}>Testimonial</NavLink>
                  <NavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</NavLink>
                </NavLinks>
                <HireButton 
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hire Me
                </HireButton>
              </MobileNav>
            </>
          )}
        </AnimatePresence>
      </HeaderContainer>
    </HeaderWrapper>
  );
}; 