import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FiMonitor, FiSmartphone, FiCode, FiLayout } from 'react-icons/fi';

const ServicesSection = styled.section`
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
  margin: 0 auto ${theme.spacing[16]};
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing[8]};
  margin-top: ${theme.spacing[8]};
`;

const ServiceCard = styled(motion.div)`
  background: ${theme.colors.background.secondary};
  border-radius: ${theme.borderRadius['2xl']};
  padding: ${theme.spacing[8]};
  position: relative;
  overflow: hidden;
  height: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${theme.colors.text.accent};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform ${theme.transitions.smooth};
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: ${theme.colors.text.accent};
  border-radius: ${theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing[6]};
  font-size: ${theme.fontSizes['3xl']};
  color: ${theme.colors.primary};
`;

const ServiceTitle = styled.h3`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing[4]};
`;

const ServiceDescription = styled.p`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
`;

const services = [
  {
    icon: <FiMonitor />,
    title: 'Web Design',
    description: 'Create beautiful, modern, and responsive websites that provide an exceptional user experience across all devices.'
  },
  {
    icon: <FiSmartphone />,
    title: 'Mobile Development',
    description: 'Build native and cross-platform mobile applications that are fast, reliable, and user-friendly.'
  },
  {
    icon: <FiCode />,
    title: 'Web Development',
    description: 'Develop scalable and maintainable web applications using the latest technologies and best practices.'
  },
  {
    icon: <FiLayout />,
    title: 'UI/UX Design',
    description: 'Design intuitive user interfaces and experiences that engage users and achieve business objectives.'
  }
];

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

export const Services = () => {
  return (
    <ServicesSection id="services">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Services
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I offer a wide range of digital services to help businesses and individuals
          achieve their goals in the digital world.
        </SectionSubtitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <IconWrapper>{service.icon}</IconWrapper>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </motion.div>
      </Container>
    </ServicesSection>
  );
}; 