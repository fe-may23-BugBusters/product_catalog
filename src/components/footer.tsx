/* eslint-disable max-len */
/* eslint-disable global-require */
import { useLocation } from 'react-router-dom';
import './footer.css';
import React from 'react';

const Footer = () => {
  const location = useLocation();
  // Przykładowa funkcja
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = (string: string) => {};

  const currentUrl = location.pathname;
  const urlParts = currentUrl.split('/');
  const lastPart = urlParts[urlParts.length - 1];

  console.log(currentUrl);
  console.log(lastPart);

  console.log(location);

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo-cont">
          <img
            className="footer-logo"
            src={require('../img/FooterLogo.jpg')}
            alt="Logo"
          />
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
          <a href={`#${lastPart}`} className="footer-arrow">
            <img
              className="footer-arrow-img"
              src={require('../img/Vector.jpg')}
              alt="Vector"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
