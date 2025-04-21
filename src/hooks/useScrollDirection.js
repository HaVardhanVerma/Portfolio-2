import { useState, useEffect } from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScroll, setLastScroll] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const threshold = 50;
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScroll) < threshold) {
        ticking = false;
        return;
      }

      setScrollDirection(scrollY > lastScroll ? 'down' : 'up');
      setIsScrolled(scrollY > threshold);
      setLastScroll(scrollY > 0 ? scrollY : 0);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScroll]);

  return { scrollDirection, isScrolled };
}; 