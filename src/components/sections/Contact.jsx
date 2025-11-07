import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    data: '',
    hora: '',
    mensagem: ''
  });

  const whatsappNumber = "5519981293361"; // Substitua pelo seu número
  const calendlyUrl = "https://calendly.com/mthflashice"; // URL do Calendly

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    
    // Formatar a data para o formato brasileiro
    const dataFormatada = new Date(formData.data).toLocaleDateString('pt-BR');
    
    // Montar a mensagem
    const message = `Olá! Gostaria de agendar uma aula de Pilates.%0A%0ANome: ${formData.nome}%0AEmail: ${formData.email}%0ATelefone: ${formData.telefone}%0AData: ${dataFormatada}%0AHorário: ${formData.hora}%0A${formData.mensagem ? `Mensagem: ${formData.mensagem}` : ''}`;
    
    // Redirecionar para o WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleSubmitCalendly = (e) => {
    e.preventDefault();
    
    // Abrir o Calendly em uma nova janela
    window.open(calendlyUrl, '_blank');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Agende seu Horário</h2>
          <p className="section-subtitle">Escolha a opção que preferir para agendar sua aula</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-card">
              <h3>Por que escolher nosso estúdio?</h3>
              
              <div className="benefits">
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <i className="fas fa-calendar-check"></i>
                  </div>
                  <div>
                    <h4>Agendamento fácil</h4>
                    <p>Escolha a data e horário que melhor se encaixam na sua rotina.</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <i className="fas fa-user-clock"></i>
                  </div>
                  <div>
                    <h4>Profissionais qualificados</h4>
                    <p>Aulas com instrutores certificados e experientes.</p>
                  </div>
                </div>
                
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <i className="fas fa-comments"></i>
                  </div>
                  <div>
                    <h4>Confirmação via WhatsApp</h4>
                    <p>Receba a confirmação do seu agendamento instantaneamente.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <div className="form-card">
              <h3>Preencha os dados para agendar</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="nome">Nome completo</label>
                  <input 
                    type="text" 
                    id="nome" 
                    name="nome" 
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Digite seu nome completo"
                    required 
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="telefone">Telefone</label>
                    <input 
                      type="tel" 
                      id="telefone" 
                      name="telefone" 
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(99) 99999-9999"
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="data">Data desejada</label>
                    <input 
                      type="date" 
                      id="data" 
                      name="data" 
                      value={formData.data}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="hora">Horário</label>
                    <select 
                      id="hora" 
                      name="hora" 
                      value={formData.hora}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione um horário</option>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="mensagem">Mensagem (opcional)</label>
                  <textarea 
                    id="mensagem" 
                    name="mensagem" 
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Deixe uma mensagem ou observação"
                    rows="3"
                  ></textarea>
                </div>
                
                <div className="booking-options">
                  <button 
                    type="button" 
                    className="btn-submit btn-whatsapp"
                    onClick={handleSubmitWhatsApp}
                  >
                    <i className="fab fa-whatsapp"></i>
                    Agendar via WhatsApp
                  </button>
                  
                  <button 
                    type="button" 
                    className="btn-submit btn-calendly"
                    onClick={handleSubmitCalendly}
                  >
                    <i className="fas fa-calendar-alt"></i>
                    Agendar via Calendly
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;