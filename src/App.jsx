import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Video from './components/sections/Video';
import EquipmentGallery from './components/sections/EquipmentGallery';
import Schedule from './components/sections/Schedule';
import Contact from './components/sections/Contact';
import './styles/global.css';
import './styles/components.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Video />
        <EquipmentGallery />
        <Schedule />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;