import React from 'react';

function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>Pilates Fitness</h1>
        <p>Transforme seu corpo e mente com aulas de Pilates personalizadas</p>
        <button onClick={scrollToContact} className="btn-primary">
          Agendar Aula Experimental
        </button>
      </div>
    </section>
  );
}

export default Hero;