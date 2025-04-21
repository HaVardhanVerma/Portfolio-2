import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
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

const ProjectsContainer = styled.div`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${theme.space[6]};
  margin-top: ${theme.space[8]};

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectImage = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: ${theme.space[6]};
  background: white;
`;

const ProjectType = styled.span`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: ${theme.space[2]};
  display: block;
`;

const ProjectTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.space[3]};
  transition: color 0.3s ease;

  ${ProjectCard}:hover & {
    color: ${theme.colors.primary};
  }
`;

const ProjectDescription = styled.p`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${theme.space[4]};
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.space[2]};
  list-style: none;
  padding: 0;
  margin: 0 0 ${theme.space[4]} 0;
`;

const TechItem = styled.li`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.primary};
  background: ${theme.colors.primary}15;
  padding: 6px 14px;
  border-radius: 20px;
  font-weight: ${theme.fontWeights.medium};
  transition: all 0.3s ease;

  ${ProjectCard}:hover & {
    background: ${theme.colors.primary}25;
    transform: translateY(-2px);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${theme.space[4]};
`;

const ProjectLink = styled.a`
  color: ${theme.colors.text.primary};
  font-size: ${theme.fontSizes.lg};
  transition: all 0.3s ease;

  &:hover {
    color: ${theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const FeaturedProject = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  margin-bottom: ${theme.space[8]};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }

  &:nth-child(even) {
    direction: rtl;
    
    ${ProjectContent} {
      direction: ltr;
    }
    
    @media (max-width: ${theme.breakpoints.lg}) {
      direction: ltr;
    }
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  }
`;

const FeaturedImage = styled(motion.div)`
  position: relative;
  height: 100%;
  min-height: 400px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.2),
      transparent
    );
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${FeaturedProject}:hover & img {
    transform: scale(1.05);
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

const featuredProjects = [
  {
    title: "Modern E-commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js and Node.js, featuring real-time inventory management, secure payments, and an intuitive admin dashboard.",
    image: "/project1.jpg",
    type: "Full Stack Application",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "An analytics dashboard that leverages machine learning to provide actionable insights from user data, featuring interactive visualizations and automated reporting.",
    image: "/project2.jpg",
    type: "Data Analytics",
    tech: ["React", "Python", "TensorFlow", "D3.js"],
    github: "https://github.com",
    live: "https://example.com"
  }
];

const otherProjects = [
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/project3.jpg",
    type: "Web Application",
    tech: ["React", "Firebase", "Material-UI"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing projects and skills with smooth animations and responsive design.",
    image: "/project4.jpg",
    type: "Frontend Development",
    tech: ["React", "Styled Components", "Framer Motion"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Weather Forecast App",
    description: "A weather forecast application with location-based services and interactive weather maps.",
    image: "/project5.jpg",
    type: "Mobile App",
    tech: ["React Native", "OpenWeather API", "Maps"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Blog Platform",
    description: "A full-featured blog platform with markdown support and dynamic content management.",
    image: "/project6.jpg",
    type: "Content Management",
    tech: ["Gatsby", "GraphQL", "Netlify CMS"],
    github: "https://github.com",
    live: "https://example.com"
  }
];

export const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={index} variants={itemVariants}>
              <FeaturedImage
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img src={project.image} alt={project.title} />
              </FeaturedImage>
              <ProjectContent>
                <ProjectType>{project.type}</ProjectType>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechList>
                  {project.tech.map((tech, index) => (
                    <TechItem key={index}>{tech}</TechItem>
                  ))}
                </TechList>
                <ProjectLinks>
                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </ProjectLink>
                  <ProjectLink
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </FeaturedProject>
          ))}

          <ProjectsGrid>
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                </ProjectImage>
                <ProjectContent>
                  <ProjectType>{project.type}</ProjectType>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechList>
                    {project.tech.map((tech, index) => (
                      <TechItem key={index}>{tech}</TechItem>
                    ))}
                  </TechList>
                  <ProjectLinks>
                    <ProjectLink
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </ProjectLink>
                    <ProjectLink
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </motion.div>
      </ProjectsContainer>
    </ProjectsSection>
  );
}; 