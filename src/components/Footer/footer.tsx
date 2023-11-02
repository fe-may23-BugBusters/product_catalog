import './footer.scss';
import React from 'react';
import Logo from '../../images/Logo.svg';
import Vector from '../../images/Vector.jpg';

const Footer = () => {
  // Przykładowa funkcja
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = (buttonName: string) => {};

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={Logo} alt="Logo" />
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
            <img src={Vector} alt="Vector" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
