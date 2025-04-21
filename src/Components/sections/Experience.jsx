import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceSection = styled.section`
  min-height: 100vh;
  background: white;
  position: relative;
  display: flex;
  padding: 6rem 2rem;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 4rem 1rem;
  }
`;

const ExperienceContainer = styled.div`
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(40px, 5vw, 60px);
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.space[8]};
  text-align: center;
  letter-spacing: -1px;
`;

const ExperienceContent = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: ${theme.space[8]};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const TabList = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: ${theme.colors.primary};
  padding: ${theme.space[4]};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

  @media (max-width: ${theme.breakpoints.lg}) {
    flex-direction: row;
    overflow-x: auto;
    padding: ${theme.space[3]};
    
    &::-webkit-scrollbar {
      height: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }
`;

const TabButton = styled(motion.button)`
  padding: ${theme.space[4]};
  text-align: left;
  background: none;
  border: none;
  color: ${props => props.isActive ? 'white' : 'rgba(255, 255, 255, 0.7)'};
  font-weight: ${props => props.isActive ? theme.fontWeights.bold : theme.fontWeights.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 10px;
  position: relative;
  width: 100%;
  white-space: nowrap;

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
  }

  ${props => props.isActive && `
    background: rgba(255, 255, 255, 0.1);
  `}

  @media (max-width: ${theme.breakpoints.lg}) {
    padding: ${theme.space[3]};
  }
`;

const ContentContainer = styled(motion.div)`
  background: white;
  padding: ${theme.space[6]};
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const JobTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.space[2]};
`;

const Company = styled.a`
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeights.semibold};
  text-decoration: none;
  font-size: ${theme.fontSizes.lg};
  display: inline-flex;
  align-items: center;
  gap: ${theme.space[2]};
  margin-bottom: ${theme.space[4]};
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.space[2]};
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSizes.md};
  margin-bottom: ${theme.space[4]};
  
  svg {
    color: ${theme.colors.primary};
  }
`;

const Description = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BulletPoint = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: ${theme.space[3]};
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSizes.md};
  line-height: 1.6;
  margin-bottom: ${theme.space[3]};
  position: relative;
  padding-left: ${theme.space[4]};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 12px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${theme.colors.primary};
  }

  &:hover::before {
    transform: scale(1.5);
    transition: transform 0.3s ease;
  }
`;

const experiences = [
  {
    company: "Tech Innovators",
    title: "Senior Full Stack Developer",
    url: "https://example.com",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    description: [
      "Led the development of a high-performance web application serving 100k+ daily active users",
      "Implemented modern CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted technical interviews",
      "Architected and developed scalable microservices using Node.js and Docker"
    ]
  },
  {
    company: "Creative Solutions",
    title: "UI/UX Designer & Developer",
    url: "https://example.com",
    duration: "2020 - 2022",
    location: "New York, NY",
    description: [
      "Designed and developed responsive web applications for various clients",
      "Created and maintained design systems used across multiple projects",
      "Improved user engagement by 45% through data-driven UX improvements",
      "Collaborated with cross-functional teams to deliver projects on time"
    ]
  },
  {
    company: "Digital Ventures",
    title: "Frontend Developer",
    url: "https://example.com",
    duration: "2018 - 2020",
    location: "Boston, MA",
    description: [
      "Built responsive and accessible web interfaces using React and TypeScript",
      "Reduced load times by 40% through performance optimizations",
      "Implemented automated testing reducing bug reports by 30%",
      "Collaborated with designers to ensure pixel-perfect implementation"
    ]
  }
];

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

export const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ExperienceSection id="experience">
      <ExperienceContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </SectionTitle>

        <ExperienceContent>
          <TabList>
            {experiences.map((experience, index) => (
              <TabButton
                key={index}
                isActive={activeTab === index}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {experience.company}
              </TabButton>
            ))}
          </TabList>

          <ContentContainer
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={activeTab}
          >
            <JobTitle>{experiences[activeTab].title}</JobTitle>
            <Company 
              href={experiences[activeTab].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBriefcase />
              {experiences[activeTab].company}
            </Company>
            <Duration>
              <FaCalendar />
              {experiences[activeTab].duration}
              <FaMapMarkerAlt />
              {experiences[activeTab].location}
            </Duration>
            <Description>
              {experiences[activeTab].description.map((point, index) => (
                <BulletPoint
                  key={index}
                  variants={itemVariants}
                >
                  {point}
                </BulletPoint>
              ))}
            </Description>
          </ContentContainer>
        </ExperienceContent>
      </ExperienceContainer>
    </ExperienceSection>
  );
}; 