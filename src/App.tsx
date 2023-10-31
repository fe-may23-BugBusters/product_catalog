/* eslint-disable react/react-in-jsx-scope */
import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import NotFound from './components/NotFound';
import { PhonesPage } from './components/PhonesPage/PhonesPage';
import { HomePage } from './components/HomePage/HomePage';
import { Nav } from './components/Nav/Nav';
import Footer from './components/footer';

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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
