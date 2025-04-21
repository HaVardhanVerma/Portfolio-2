import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaCode, FaPalette, FaMobile, FaRocket } from 'react-icons/fa';

const AboutSection = styled.section`
  min-height: 100vh;
  background: ${theme.colors.primary};
  position: relative;
  display: flex;
  padding: 6rem 2rem;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 4rem 1rem;
  }
`;

const AboutContainer = styled.div`
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(40px, 5vw, 60px);
  font-weight: ${theme.fontWeights.bold};
  color: white;
  margin-bottom: ${theme.space[8]};
  text-align: center;
  letter-spacing: -1px;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.space[8]};
  align-items: center;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${theme.space[6]};
  }
`;

const AboutContent = styled(motion.div)`
  background: white;
  padding: ${theme.space[8]};
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`;

const AboutText = styled(motion.p)`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.space[6]};
  line-height: 1.8;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.space[4]};
  margin-top: ${theme.space[8]};
`;

const SkillCard = styled(motion.div)`
  background: ${theme.colors.background.primary};
  padding: ${theme.space[6]};
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const SkillIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${theme.colors.primary};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.space[4]};
  color: white;
  font-size: 24px;
`;

const SkillTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.space[2]};
`;

const SkillDescription = styled.p`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.05)
    );
    backdrop-filter: blur(5px);
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
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

const skills = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Building responsive and performant web applications using modern technologies."
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces and experiences."
  },
  {
    icon: <FaMobile />,
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications with native performance."
  },
  {
    icon: <FaRocket />,
    title: "Performance",
    description: "Optimizing applications for maximum speed and scalability."
  }
];

export const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </SectionTitle>

        <ContentGrid>
          <AboutContent>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <AboutText variants={itemVariants}>
                I'm a passionate Full Stack Developer and UI/UX Designer with a keen eye for creating beautiful, functional, and user-centered digital experiences. With a strong foundation in both design and development, I bridge the gap between aesthetics and functionality.
              </AboutText>
              <AboutText variants={itemVariants}>
                My approach combines creative design thinking with technical expertise to deliver solutions that not only look great but also perform exceptionally well.
              </AboutText>
              
              <SkillsGrid>
                {skills.map((skill, index) => (
                  <SkillCard
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <SkillIcon>{skill.icon}</SkillIcon>
                    <SkillTitle>{skill.title}</SkillTitle>
                    <SkillDescription>{skill.description}</SkillDescription>
                  </SkillCard>
                ))}
              </SkillsGrid>
            </motion.div>
          </AboutContent>

          <ImageContainer
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img src="/about-image.jpg" alt="About Me" />
          </ImageContainer>
        </ContentGrid>
      </AboutContainer>
    </AboutSection>
  );
}; 