import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Pilates Fitness</div>
      <nav>
        <ul>
          <li><a href="#home">Início</a></li>
          <li><a href="#equipment">Equipamentos</a></li>
          <li><a href="#schedule">Agenda</a></li>
          <li><a href="#gallery">Galeria</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;