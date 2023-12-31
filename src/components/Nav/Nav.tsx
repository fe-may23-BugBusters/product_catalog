/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Header } from '../Header/Header';

export const Nav = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  let mobileSize = false;

  if (windowWidth > 640) {
    mobileSize = true;
  }

  useEffect(() => {
    // Dodaj obsługę zdarzenia zmiany rozmiaru okna
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    // Oczyść nasłuchiwanie zdarzenia po odmontowaniu komponentu.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="headerNav">
        {mobileSize ? <Header /> : <BurgerMenu />}
      </div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="/phones">Strona z telefonami</Link>
          </li>
          <li>
            <Link to="/cart">Koszyk</Link>
          </li>
          <li>
            <Link to="/phoneinfo">Telefon</Link>
          </li>
        </ul>
      </nav> */}
    </>
  );
};
