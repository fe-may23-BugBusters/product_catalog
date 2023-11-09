/* eslint-disable max-len */
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './components/NotFoundPage/NotFound';
import { PhonesPage } from './components/PhonesPage/PhonesPage';
import { HomePage } from './components/HomePage/HomePage';
import { Nav } from './components/Nav/Nav';
import Footer from './components/footer/footer';
import { Cart } from './components/Cart/Cart';
import TabletsPage from './components/TabletsPage/TabletsPage';
import AccessoriesPage from './components/AccessoriesPage/AccessoriesPage';
import { Recommended } from './components/Recommended/Recommended';
import PhoneDetailsPage from './components/PhonesInfo/PhoneInfo';
import { Favourites } from './components/Favourites/Favourites';
import './App.scss';

function App() {
  return (
    <div className="container">
      <Nav />
      <div className="routes-container">
        <Routes>
          <Route path="/">
            <Route path="/phones">
              <Route index element={<PhonesPage />} />
              <Route path=":tabId" element={<PhonesPage />} />
            </Route>
            <Route path="/tablets" element={<TabletsPage />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/accessories" element={<AccessoriesPage />} />
            <Route index element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" />} />
            {/* <Route path="/nav" element={<Navigate to="/" />} /> */}
            <Route path="/cart">
              <Route index element={<Cart />} />
            </Route>
            <Route path="/phoneinfo">
              <Route index element={<PhoneDetailsPage />} />
              <Route
                path="/phoneinfo/:phoneId"
                element={<PhoneDetailsPage />}
              />
            </Route>

            {/* docelowo element tech-specs bedzie czescia strony telefonu
          teraz tylko dodaje podglad komponentu */}
            <Route path="/recommended">
              <Route index element={<Recommended />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
