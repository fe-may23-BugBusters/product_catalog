/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import './sass/Header.scss';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { TypeContext, useTContext } from '../../context/Context';

export const Header = () => {
  const { cart } = useTContext() as TypeContext;

  return (
    <>
      <header className="header">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <div className="header__container">
          <Link to="/" className="header__logo">
            <img src={Logo} alt="logo" />
          </Link>

          <nav className="header__nav">
            <ul className="header__nav__list">
              <li className="header__nav__list__item">
                <Link to="/" className="header__nav__list__item__link">
                  Home
                </Link>
              </li>
              <li className="header__nav__list__item">
                <Link to="/phones" className="header__nav__list__item__link">
                  Phones
                </Link>
              </li>
              <li className="header__nav__list__item">
                <Link to="/tablets" className="header__nav__list__item__link">
                  Tablets
                </Link>
              </li>
              <li className="header__nav__list__item">
                <a
                  href="/accessories"
                  className="header__nav__list__item__link"
                >
                  Accessories
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header__buttons">
          <button type="button" className="header__buttons__like" />
          <button type="button" className="header__buttons__cart">
            <span className="header__buttons__cart--elipse">
              <p>{cart.length}</p>
            </span>
          </button>
        </div>
      </header>
      <div className="burger-menu-container">
        <BurgerMenu />
      </div>
    </>
  );
};
