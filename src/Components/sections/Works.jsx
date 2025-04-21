import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const WorksSection = styled.section`
  padding: ${theme.spacing[20]} 0;
  background: ${theme.colors.background.primary};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${theme.spacing[8]};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing[4]};
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${theme.fontSizes['4xl']};
  font-weight: ${theme.fontWeights.extrabold};
  color: ${theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${theme.spacing[4]};
  text-transform: uppercase;
  letter-spacing: -1px;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.text.secondary};
  text-align: center;
  max-width: 600px;
  margin: 0 auto ${theme.spacing[12]};
  line-height: 1.6;
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing[4]};
  margin-bottom: ${theme.spacing[12]};
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  background: ${props => props.active ? theme.colors.text.accent : 'transparent'};
  color: ${props => props.active ? theme.colors.primary : theme.colors.text.primary};
  border: 2px solid ${props => props.active ? theme.colors.text.accent : theme.colors.text.accent};
  padding: ${theme.spacing[3]} ${theme.spacing[6]};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${theme.transitions.default};
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: ${theme.colors.text.accent};
    color: ${theme.colors.primary};
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${theme.spacing[8]};
  margin-top: ${theme.spacing[8]};

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  border-radius: ${theme.borderRadius['2xl']};
  overflow: hidden;
  background: ${theme.colors.background.secondary};
  height: 400px;
`;

const ProjectImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(\${props => props.image});
  background-size: cover;
  background-position: center;
  transition: transform ${theme.transitions.smooth};
`;

const ProjectOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  padding: ${theme.spacing[8]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ProjectType = styled.span`
  color: ${theme.colors.text.accent};
  font-size: ${theme.fontSizes.sm};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: ${theme.spacing[4]};
`;

const ProjectTitle = styled.h3`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing[4]};
`;

const ProjectDescription = styled.p`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${theme.spacing[6]};
`;

const TechList = styled.div`
  display: flex;
  gap: ${theme.spacing[3]};
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: ${theme.spacing[6]};
`;

const TechItem = styled.span`
  background: ${theme.colors.text.accent};
  color: ${theme.colors.primary};
  padding: ${theme.spacing[1]} ${theme.spacing[3]};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.medium};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${theme.spacing[4]};
`;

const ProjectLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${theme.colors.text.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.xl};
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const projects = [
  {
    title: 'Modern E-commerce',
    type: 'Web Development',
    description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB.',
    image: '/projects/ecommerce.jpg',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com',
    live: 'https://demo.com',
    category: 'fullstack'
  },
  {
    title: 'Travel App UI',
    type: 'UI/UX Design',
    description: 'Modern travel application interface with stunning animations and interactions.',
    image: '/projects/travel.jpg',
    tech: ['Figma', 'Adobe XD', 'Protopie'],
    github: 'https://github.com',
    live: 'https://demo.com',
    category: 'design'
  },
  {
    title: 'Task Management',
    type: 'Mobile App',
    description: 'Cross-platform mobile app for task and project management.',
    image: '/projects/task.jpg',
    tech: ['React Native', 'Firebase', 'Redux'],
    github: 'https://github.com',
    live: 'https://demo.com',
    category: 'mobile'
  },
  {
    title: 'Portfolio Website',
    type: 'Web Development',
    description: 'Personal portfolio website with modern design and animations.',
    image: '/projects/portfolio.jpg',
    tech: ['React', 'Styled Components', 'Framer Motion'],
    github: 'https://github.com',
    live: 'https://demo.com',
    category: 'frontend'
  }
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'design', label: 'Design' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

export const Works = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCategoryChange = (category) => {
    if (isAnimating || category === activeCategory) return;
    setIsAnimating(true);
    setActiveCategory(category);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' ? true : project.category === activeCategory
  );

  return (
    <WorksSection id="works">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Works
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore my recent projects and creative works that showcase my expertise
          in web development, mobile apps, and UI/UX design.
        </SectionSubtitle>

        <FilterContainer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map(category => (
            <FilterButton
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => handleCategoryChange(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isAnimating}
            >
              {category.label}
            </FilterButton>
          ))}
        </FilterContainer>

        <AnimatePresence mode="wait">
          <ProjectsGrid
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -5 }}
                transition={{
                  y: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }}
              >
                <ProjectImage image={project.image} />
                <ProjectOverlay
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProjectType>{project.type}</ProjectType>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechList>
                    {project.tech.map(tech => (
                      <TechItem key={tech}>{tech}</TechItem>
                    ))}
                  </TechList>
                  <ProjectLinks>
                    <ProjectLink
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub />
                    </ProjectLink>
                    <ProjectLink
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink />
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectOverlay>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </AnimatePresence>
      </Container>
    </WorksSection>
  );
}; 