import React, { useState } from 'react';
import './sass/BurgerMenu.scss';
import { Link } from 'react-router-dom';
import { useTContext, TypeContext } from '../../context/Context';

export const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { cart } = useTContext() as TypeContext;
  const { favourites } = useTContext() as TypeContext;

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
            <p className="header_link" aria-label="Wykonaj akcję">
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
            </p>
          </div>
        </div>
      </header>

      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="links menu_links">
          <Link to="/" className="menu_link" onClick={toggleMenu}>
            home
          </Link>
          <Link to="/phones" className="menu_link" onClick={toggleMenu}>
            PHONES
          </Link>
          <Link to="/tablets" className="menu_link" onClick={toggleMenu}>
            TABLETS
          </Link>
          <Link to="/accessories" className="menu_link" onClick={toggleMenu}>
            ACCESSORIES
          </Link>
        </div>
        <div className="menu_footer">
          <Link
            to="/favourites"
            className="menu_heart-2"
            aria-label="Wykonaj akcję"
            onClick={toggleMenu}
          >
            <div className="menu_bag--container">
              {/* eslint-disable */}
              {favourites.length > 0 && (
                <span className="menu_bag--elipse">
                  <p className="menu_bag--paragraph">{favourites.length}</p>
                </span>
              )}
            </div>
          </Link>
          <Link
            to="/cart"
            className="menu_bag"
            aria-label="Wykonaj akcję"
            onClick={toggleMenu}
          >
            <div className="menu_bag--container">
              {/* eslint-disable */}
              {cart.length > 0 && (
                <span className="menu_bag--elipse">
                  <p className="menu_bag--paragraph">{cart.length}</p>
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
