import React from 'react';
import Button from '../ui/Button.jsx';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Pilates Fitness</h1>
        <p>Transforme seu corpo e mente com aulas de Pilates personalizadas</p>
        <Button 
          onClick={() => document.getElementById('schedule').scrollIntoView({ behavior: 'smooth' })}
        >
          Agendar Aula Experimental
        </Button>
      </div>
    </section>
  );
};

export default Hero;