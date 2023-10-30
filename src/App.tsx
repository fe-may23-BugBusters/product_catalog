import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NotFound from './components/NotFound';
import Footer from './components/footer';
import PhonesPage from './pages/PhonesPage/PhonesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
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
