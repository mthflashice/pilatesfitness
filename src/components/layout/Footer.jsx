import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sobre Nós</h3>
            <p>O Pilates Fitness é um estúdio especializado em aulas de Pilates, com equipamentos modernos e instrutores qualificados.</p>
          </div>
          
          <div className="footer-section">
            <h3>Contato</h3>
            <ul>
              <li>(19) 9999-9999</li>
              <li>contato@pilatesfitness.com.br</li>
              <li>Rua Exemplo, 123 - Centro</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Links Rápidos</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#videos">Vídeos</a></li>
              <li><a href="#equipment">Equipamentos</a></li>
              <li><a href="#schedule">Horários</a></li>
              <li><a href="#contact">Agende seu Horário</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Pilates Fitness. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;