import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

const StyledButton = styled(motion.button)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-family: ${theme.fonts.primary};
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  border: 1px solid ${theme.colors.primary};
  border-radius: 4px;
  background: transparent;
  color: ${theme.colors.primary};
  cursor: pointer;
  overflow: hidden;
  transition: ${theme.transitions.standard};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${theme.colors.primary};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.6s cubic-bezier(0.7, 0, 0.2, 1);
    z-index: -1;
  }

  &:hover {
    color: ${theme.colors.background.primary};

    &:before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &.primary {
    background: ${theme.colors.primary};
    color: ${theme.colors.background.primary};

    &:hover {
      background: transparent;
      color: ${theme.colors.primary};
    }
  }

  &.large {
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  &.small {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }

  .icon {
    margin-left: 0.5rem;
  }
`;

export const Button = ({ 
  children, 
  variant = 'default', 
  size = 'medium',
  icon,
  disabled = false,
  onClick,
  ...props 
}) => {
  return (
    <StyledButton
      className={`${variant} ${size}`}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      {...props}
    >
      {children}
      {icon && <span className="icon">{icon}</span>}
    </StyledButton>
  );
}; 