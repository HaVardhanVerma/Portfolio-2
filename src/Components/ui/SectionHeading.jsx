import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

const HeadingContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.space[8]};
  width: 100%;
  max-width: ${theme.layout.maxWidth};
  margin-left: auto;
  margin-right: auto;
`;

const Number = styled.span`
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.primary};
  font-size: ${theme.fontSizes.lg};
  margin-right: ${theme.space[2]};
`;

const Title = styled.h2`
  color: ${theme.colors.text.primary};
  font-size: clamp(26px, 5vw, 32px);
  font-weight: ${theme.fontWeights.semibold};
  margin: 0;
  white-space: nowrap;
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    display: block;
    position: relative;
    width: 100%;
    height: 1px;
    margin-left: ${theme.space[4]};
    background: linear-gradient(
      90deg,
      ${theme.colors.primary}40 0%,
      transparent 100%
    );
  }
`;

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6
    }
  }
};

export const SectionHeading = ({ number, title }) => {
  return (
    <HeadingContainer
      variants={headingVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Title>
        <Number>{number}</Number>
        {title}
      </Title>
    </HeadingContainer>
  );
}; 