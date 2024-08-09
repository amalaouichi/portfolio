import React, { useState } from 'react';
import './Footer.css';
import github from '../../assets/icons/github.png'; 
import arrowUp from '../../assets/icons/up-arrow.png'; // Importer l'icône de flèche vers le haut

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <footer>
      <p>© 2024 Amal Aouichi</p>
      <a href="https://github.com/amalaouichi" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" className="github-icon" />
        </a>
      {showScroll && (
        <div className="scroll-top" onClick={scrollTop}>
          <img src={arrowUp} alt="Scroll to top" className="arrow-up-icon" />
        </div>
      )}
    </footer>
  );
};

export default Footer;
