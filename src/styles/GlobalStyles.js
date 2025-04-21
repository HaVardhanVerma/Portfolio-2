import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --primary: ${theme.colors.primary};
    --secondary: ${theme.colors.secondary};
    --text-primary: ${theme.colors.text.primary};
    --text-secondary: ${theme.colors.text.secondary};
    --bg-primary: ${theme.colors.background.primary};
    --bg-secondary: ${theme.colors.background.secondary};
  }

  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: var(--primary) var(--bg-secondary);
  }

  body {
    font-family: ${theme.fonts.secondary};
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.text.accent};
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.primary};
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    color: var(--text-secondary);
  }

  a {
    color: var(--primary);
    text-decoration: none;
    transition: ${theme.transitions.standard};

    &:hover {
      color: ${theme.colors.text.accent};
    }
  }

  /* Utility Classes */
  .container {
    width: 100%;
    max-width: ${theme.layout.maxWidth};
    margin: 0 auto;
    padding: 0 2rem;

    @media (max-width: ${theme.breakpoints.sm}) {
      padding: 0 1rem;
    }
  }

  .section {
    padding: 6rem 0;

    @media (max-width: ${theme.breakpoints.md}) {
      padding: 4rem 0;
    }
  }

  /* Animation Classes */
  .fade-enter {
    opacity: 0;
    transform: translateY(20px);
  }

  .fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s, transform 0.6s;
  }

  .fade-exit {
    opacity: 1;
    transform: translateY(0);
  }

  .fade-exit-active {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.6s, transform 0.6s;
  }

  /* Accessibility */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }

  /* Loading States */
  .loading {
    position: relative;
    pointer-events: none;
    opacity: 0.6;
  }

  /* Error States */
  .error {
    color: #ff6b6b;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }
`; 