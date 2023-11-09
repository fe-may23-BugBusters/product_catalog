/* eslint-disable */
/* eslint-disable jsx-a11y/control-has-associated-label */
import classNames from 'classnames';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import './sass/Header.scss';
import { TypeContext, useTContext } from '../../context/Context';

export const Header = () => {
  const { cart } = useTContext() as TypeContext;
  const { favourites } = useTContext() as TypeContext;

  return (
    <>
      <header className="header">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <div className="header__container">
          <NavLink to="/" className="header__logo">
            <img src={Logo} alt="logo" />
          </NavLink>

          <nav className="header__nav">
            <ul className="header__nav__list">
              <li className="header__nav__list__item">
                <NavLink
                  to="/"
                  className={({ isActive }) => classNames('header__nav__list__item__link', {
                    'is-active': isActive,
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li className="header__nav__list__item">
                <NavLink
                  to="/phones"
                  className={({ isActive }) => classNames('header__nav__list__item__link', {
                    'is-active': isActive,
                  })}
                >
                  Phones
                </NavLink>
              </li>
              <li className="header__nav__list__item">
                <NavLink
                  to="/tablets"
                  className={({ isActive }) => classNames('header__nav__list__item__link', {
                    'is-active': isActive,
                  })}
                >
                  Tablets
                </NavLink>
              </li>
              <li className="header__nav__list__item">
                <NavLink
                  to="/accessories"
                  className={({ isActive }) => classNames('header__nav__list__item__link', {
                    'is-active': isActive,
                  })}
                >
                  Accessories
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header__buttons">
          <Link
            to="/favourites"
            type="button"
            className="header__buttons__cart-heart"
          >
            {/* eslint-disable */}
            {favourites.length > 0 && (
              <span className="header__buttons__cart--elipse">
                <p className="header__buttons__cart--paragraph">
                  {favourites.length}
                </p>
              </span>
            )}
          </Link>
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
