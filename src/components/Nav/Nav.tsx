/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Header } from '../Header/Header';

export const Nav = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  let condition = false;

  if (windowWidth > 640) {
    condition = true;
  }

  return (
    <>
      <div className="headerNav">{condition ? <Header /> : <BurgerMenu />}</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="/phones">Strona z telefonami</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
