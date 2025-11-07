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
              <li>(19) 981293361</li>
              <li></li>
              <li>Rua Joaquim de Castro, 159 - JD Monte Verde</li>
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
            <ul className="social-links">
              <li>
                <a href="https://web.facebook.com/pilatesfitnessbr" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pilatesfitnessbr" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                  <span>Instagram</span>
                </a>
              </li>
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