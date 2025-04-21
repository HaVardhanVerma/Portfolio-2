import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaFacebookF, FaInstagram, FaTelegram, FaLinkedinIn } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  background: ${theme.colors.background.primary};
  position: relative;
  display: flex;
  align-items: center;
  padding: ${theme.spacing[20]} ${theme.spacing[8]} ${theme.spacing[8]};
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[16]} ${theme.spacing[4]} ${theme.spacing[4]};
  }
`;

const HeroContainer = styled.div`
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: ${theme.spacing[16]};
  position: relative;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${theme.spacing[8]};
  }
`;

const ContentSection = styled.div`
  position: relative;
  z-index: 2;
`;

const Greeting = styled(motion.h3)`
  color: ${theme.colors.text.accent};
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.medium};
  margin-bottom: ${theme.spacing[4]};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Title = styled(motion.h1)`
  font-size: clamp(40px, 8vw, 80px);
  font-weight: ${theme.fontWeights.extrabold};
  line-height: 1;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing[2]};
  letter-spacing: -2px;
  text-transform: uppercase;
`;

const SubTitle = styled(motion.h2)`
  font-size: clamp(40px, 8vw, 80px);
  font-weight: ${theme.fontWeights.extrabold};
  line-height: 1;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing[8]};
  letter-spacing: -2px;
  text-transform: uppercase;
`;

const Description = styled(motion.p)`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.text.secondary};
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: ${theme.spacing[8]};

  @media (max-width: ${theme.breakpoints.lg}) {
    margin: 0 auto ${theme.spacing[8]};
  }
`;

const SocialSection = styled(motion.div)`
  position: fixed;
  top: 50%;
  right: ${theme.spacing[8]};
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
  z-index: ${theme.zIndices.docked};

  @media (max-width: ${theme.breakpoints.lg}) {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    flex-direction: row;
    justify-content: center;
    margin-top: ${theme.spacing[8]};
  }
`;

const SocialTitle = styled.p`
  color: ${theme.colors.text.primary};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  margin-bottom: ${theme.spacing[4]};
  text-transform: uppercase;
  letter-spacing: 2px;
  writing-mode: vertical-rl;
  transform: rotate(180deg);

  @media (max-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};

  @media (max-width: ${theme.breakpoints.lg}) {
    flex-direction: row;
    gap: ${theme.spacing[6]};
  }
`;

const SocialLink = styled(motion.a)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${theme.colors.text.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.xl};
  transition: all ${theme.transitions.default};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 233, 117, 0.4);
  }
`;

const ImageSection = styled(motion.div)`
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 80%;
    height: 80%;
    background: ${theme.colors.text.accent};
    z-index: -1;
    border-radius: ${theme.borderRadius['2xl']};
  }

  img {
    width: 100%;
    height: auto;
    max-width: 500px;
    display: block;
    margin: 0 auto;
    border-radius: ${theme.borderRadius['2xl']};
    box-shadow: ${theme.shadows.xl};
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-row: 1;
    
    &::before {
      width: 70%;
      height: 70%;
    }
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

export const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContainer>
        <ContentSection>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Greeting variants={itemVariants}>
              Hi, I am Alex
            </Greeting>
            <Title variants={itemVariants}>
              UI UX
              <br />
              Designer
            </Title>
            <SubTitle variants={itemVariants}>
              Full Stack
              <br />
              Developer
            </SubTitle>
            <Description variants={itemVariants}>
              I design intuitive interfaces and develop user-centric solutions,
              blending creativity and technical expertise to craft seamless digital experiences.
            </Description>
          </motion.div>
        </ContentSection>

        <ImageSection
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img src="/profile.jpg" alt="Alex" />
        </ImageSection>

        <SocialSection
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <SocialTitle>Follow Me</SocialTitle>
          <SocialLinks>
            <SocialLink 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebookF />
            </SocialLink>
            <SocialLink 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram />
            </SocialLink>
            <SocialLink 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTelegram />
            </SocialLink>
            <SocialLink 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedinIn />
            </SocialLink>
          </SocialLinks>
        </SocialSection>
      </HeroContainer>
    </HeroSection>
  );
}; 