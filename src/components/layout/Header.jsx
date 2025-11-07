import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">Pilates Fitness</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#videos">Vídeos</a></li>
          <li><a href="#equipment">Equipamentos</a></li>
          <li><a href="#schedule">Horários</a></li>
          <li><a href="#contact">Agende seu Horário</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;