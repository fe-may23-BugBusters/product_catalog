/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable global-require */
import { animateScroll as scroll } from 'react-scroll';
import './footer.scss';
import React from 'react';
import Logo from '../../images/Logo.svg';

const Footer = () => {
  // Przykładowa funkcja
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = (string: string) => {};

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-cont">
          <img className="footer-logo" src={Logo} alt="Logo" />
        </div>
        <div className="footer-container">
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
        </div>
        <div className="footer-back-to-top-container">
          <div>
            <div
              onClick={scrollToTop}
              className="footer-back-to-top-container-topress"
            >
              Back to top
              <button type="button" className="footer-arrow">
                <img
                  className="footer-arrow-img"
                  src={require('../../img/Vector.jpg')}
                  alt="Vector"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
