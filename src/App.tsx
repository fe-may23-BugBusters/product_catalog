import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './components/NotFoundPage/NotFound';
import { PhonesPage } from './components/PhonesPage/PhonesPage';
import { HomePage } from './components/HomePage/HomePage';
import { Nav } from './components/Nav/Nav';
import Footer from './components/footer';
import { Cart } from './components/Cart/Cart';
import { About } from './components/About/About';
import TabletsPage from './components/TabletsPage/TabletsPage';
import AccessoriesPage from './components/AccessoriesPage/AccessoriesPage';

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/">
          <Route path="/phones">
            <Route index element={<PhonesPage />} />
            <Route path=":tabId" element={<PhonesPage />} />
          </Route>
          <Route path="/tablets" element={<TabletsPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route index element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          {/* <Route path="/nav" element={<Navigate to="/" />} /> */}
          <Route path="/cart">
            <Route index element={<Cart />} />
          </Route>
          {/* docelowo element about bedzie czescia ProductCarda
          teraz tylko dodaje podglad komponentu */}
          <Route path="/about">
            <Route index element={<About />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
