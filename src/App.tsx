import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Footer from './components/footer';
import logo from './logo.svg';
import './App.css';
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
        </header>
        <Route path="/phones" Component={PhonesPage} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
