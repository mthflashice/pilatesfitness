import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Pilates Fitness</h3>
          <p>Transforme seu corpo e mente com aulas de Pilates personalizadas</p>
        </div>
        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#equipment">Equipamentos</a></li>
            <li><a href="#schedule">Agendar</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contato</h4>
          <p>WhatsApp: (19) 98129-3361</p>
          <p>Email: contato@pilatesfitness.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Pilates Fitness. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;