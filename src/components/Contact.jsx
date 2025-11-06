import React from 'react';

function Contact() {
  const whatsappNumber = "5519981293361"; // Substitua pelo seu número
  const message = "Olá! Gostaria de agendar uma aula de Pilates";

  return (
    <section className="contact" id="contact">
      <h2>Agende sua Aula</h2>
      <p>Tire dúvidas ou agende diretamente pelo WhatsApp:</p>
      
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp"
      >
        <i className="whatsapp-icon"></i>
        Agendar via WhatsApp
      </a>
    </section>
  );
}

export default Contact;