import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServicesTabs from './components/ServicesTabs';
import Gallery from './components/Gallery';
import Products3D from './components/Products3D';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <ServicesTabs />
        <Products3D />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
