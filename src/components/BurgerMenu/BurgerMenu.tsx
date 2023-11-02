import React, { useState } from 'react';
import './sass/BurgerMenu.scss';
import { useTContext, TypeContext } from '../../context/Context';

export const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { cart } = useTContext() as TypeContext;

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="burger-menu">
      <header className="headerMobile" id="headerMobile">
        <div className="headerMobile_nav">
          <a
            aria-label="Wykonaj akcję"
            href="index.html"
            className="headerMobile_link headerMobile_link--logo"
          >
            <p />
          </a>
          <div className="headerMobile_buttons">
            <a href="#nav" className="header_link" aria-label="Wykonaj akcję">
              <button
                aria-label="Wykonaj akcję"
                className={`burger-icon ${isMenuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    toggleMenu();
                  }
                }}
                tabIndex={0}
                type="button"
              >
                <p />
              </button>
              <div className="header_burger" />
            </a>
          </div>
        </div>
      </header>

      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="links menu_links">
          <a href="http#" className="menu_link">
            home
          </a>
          <a href="http#" className="menu_link">
            PHONES
          </a>
          <a href="http#" className="menu_link">
            TABLETS
          </a>
          <a href="http#" className="menu_link">
            ACCESSORIES
          </a>
        </div>
        <div className="menu_footer">
          <a href="http#" className="menu_heart" aria-label="Wykonaj akcję">
            <p />
          </a>
          <a href="http#" className="menu_bag" aria-label="Wykonaj akcję">
            <div className="menu_bag--container">
              <span className="menu_bag--elipse">
                <p className="menu_bag--paragraph">{cart.length}</p>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
