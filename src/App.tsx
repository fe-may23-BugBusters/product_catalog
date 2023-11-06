/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './components/NotFoundPage/NotFound';
import { PhonesPage } from './components/PhonesPage/PhonesPage';
import { HomePage } from './components/HomePage/HomePage';
import { Nav } from './components/Nav/Nav';
import Footer from './components/footer';
import { Cart } from './components/Cart/Cart';
import { About } from './components/About/About';
import { TechSpecs } from './components/TechSpecs/TechSpecs';

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
          <Route index element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          {/* <Route path="/nav" element={<Navigate to="/" />} /> */}
          <Route path="/cart">
            <Route index element={<Cart />} />
          </Route>
          {/* docelowo element about bedzie czescia strony telefonu
          teraz tylko dodaje podglad komponentu */}
          <Route path="/about">
            <Route index element={<About />} />
          </Route>
          {/* docelowo element tech-specs bedzie czescia strony telefonu
          teraz tylko dodaje podglad komponentu */}
          <Route path="/techspecs">
            <Route index element={<TechSpecs />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
