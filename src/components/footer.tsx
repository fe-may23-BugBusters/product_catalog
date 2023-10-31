import './footer.css';
import React from 'react';

const Footer = () => {
  // Przykładowa funkcja
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = (buttonName: string) => {};

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src="../img/FooterLogo.jpg" alt="Logo" />
        </div>
        <div className="footer-buttons">
          <button type="button" onClick={() => handleClick('GITHUB')}>
            GITHUB
          </button>
        </div>
        <div className="footer-buttons">
          <button type="button" onClick={() => handleClick('CONTACTS')}>
            CONTACTS
          </button>
        </div>
        <div className="footer-buttons">
          <button type="button" onClick={() => handleClick('RIGHTS')}>
            RIGHTS
          </button>
        </div>
        <div className="footer-back-to-top">
          <button type="button" onClick={() => handleClick('BackToTop')}>
            back to top
            <img src="../img/Vector.jpg" alt="Vector" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
