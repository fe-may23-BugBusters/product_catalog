
import React from 'react';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NotFound from './components/NotFound';
import Footer from './components/footer';
import PhonesPage from './pages/PhonesPage/PhonesPage';
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
    <Router>
      <div className="App">
        <header className="App-header">
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
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            <code>src/App.tsx</code>
            and save to reload.
          </p>
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
          <Footer />
        </header>
        <Route
          path="/phones"
          element={<PhonesPage />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </div>
    </Router>
  );
}

export default App;
