// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Technology from './components/Technology/Technology';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import './index.css'; // Importa los estilos globales

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Technology />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;