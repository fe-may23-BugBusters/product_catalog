/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

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

  return (
    <>
      <div className="header">
        {(windowWidth < 640) ? (
          <BurgerMenu />
        ) : (
          <div className="desktop-header">
            <p>Szeroki ekran</p>
            {/* Tutaj dodaj elementy twojego nagłówka na szerokich ekranach */}
          </div>
        )}
      </div>
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
