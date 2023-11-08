/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import './sass/Header.scss';
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
                <Link
                  to="/accessories"
                  className="header__nav__list__item__link"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header__buttons">
          <button type="button" className="header__buttons__like" />
          <Link to="/cart" type="button" className="header__buttons__cart">
            {/* eslint-disable */}
            {cart.length > 0 && (
              <span className="header__buttons__cart--elipse">
                <p className="header__buttons__cart--paragraph">
                  {cart.length}
                </p>
              </span>
            )}
          </Link>
          {/* <Link
            to="/cart"
            className="header__buttons__cart"
          /> */}
        </div>
      </header>
    </>
  );
};
