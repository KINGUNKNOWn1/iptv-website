import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SmoothScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to hash on page load
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }

    // Handle anchor link clicks
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href');
        const element = document.querySelector(id);
        if (element) {
          const offset = 80; // Navigation height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Update URL without jumping
          history.pushState(null, null, id);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [pathname]);

  return null;
};

export default SmoothScroll;
