import React, { useEffect, useState } from 'react';

import logo from './logo.svg';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import { PhonesPage } from './components/PhonesPage/PhonesPage';

function App() {
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
    <div className="App">
      <header className="App-header">
        <div className="header">
          {windowWidth < 640 ? (
            <BurgerMenu />
          ) : (
            <div className="desktop-header">
              <p>Szeroki ekran</p>
              {/* Tutaj dodaj elementy twojego nagłówka na szerokich ekranach */}
            </div>
          )}
        </div>
        <PhonesPage />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editttttttt
          <code>src/App.tsx</code>
          and save to reload.
          <p>Some paragraph</p>
          <p>Some paragraph</p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
