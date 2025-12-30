import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  const location = useLocation();

  // Define Spline URLs for specific routes
  const getSplineUrl = (pathname) => {
    switch (pathname) {
      case '/':
        return "https://prod.spline.design/MWarYzbSwG7nviph/scene.splinecode";
      // Case for the second page (URL pending from user)
      // case '/other-page':
      //   return "UNDEFINED_URL_PENDING_USER_INPUT";
      default:
        return "https://prod.spline.design/MWarYzbSwG7nviph/scene.splinecode"; // Default to home or null if no background desired
    }
  };

  const splineUrl = getSplineUrl(location.pathname);

  return (
    <div className="App">
      <spline-viewer url={splineUrl}></spline-viewer>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
