import React, { useState } from "react";
import { confirmarAgendamento } from "../utils/alert";
import { confirmarAgendamentoDark } from "../utils/alert-dark";

const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const confirmar = isDarkMode ? confirmarAgendamentoDark : confirmarAgendamento;


function Schedule() {
  const [selectedService, setSelectedService] = useState("Aula de Pilates");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const services = [
    {
      name: "Aula de Pilates",
      duration: "60 min",
      description: "Aula individual com equipamentos",
      hasPackages: true,
    },
    {
      name: "Aula Experimental",
      duration: "50 min",
      price: "Grátis",
      description: "Primeira aula para conhecer o método",
      hasPackages: false,
    },
    {
      name: "Shiatsu",
      duration: "60 min",
      price: "R$ 120",
      description: "Técnica japonesa de pressão para equilíbrio energético",
      hasPackages: false,
    },
  ];

  const packages = {
    "Aula de Pilates": [
      {
        name: "1x por semana",
        price: "R$ 200/mês",
        details: "4 aulas por mês",
        savings: "",
      },
      {
        name: "2x por semana",
        price: "R$ 250/mês",
        details: "8 aulas por mês",
        savings: "Economia de R$ 150",
      },
      {
        name: "Trimestral (1x por semana)",
        price: "R$ 550/trimestre",
        details: "12 aulas (3 meses)",
        savings: "Economia de R$ 50",
      },
      {
        name: "Trimestral (2x por semana)",
        price: "R$ 700/trimestre",
        details: "24 aulas (3 meses)",
        savings: "Economia de R$ 200",
      },
    ],
  };

  const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
  ];

  // Encontrar o serviço selecionado
  const selectedServiceObj = services.find(
    (service) => service.name === selectedService
  );

  // Obter o preço selecionado
  const getSelectedPrice = () => {
    if (
      selectedServiceObj &&
      selectedServiceObj.hasPackages &&
      selectedPackage
    ) {
      const packageObj = packages[selectedService].find(
        (p) => p.name === selectedPackage
      );
      return packageObj ? packageObj.price : "";
    } else if (selectedServiceObj && !selectedServiceObj.hasPackages) {
      return selectedServiceObj.price;
    }
    return "";
  };

  return (
    <section className="schedule" id="schedule">
      <div className="schedule-container">
        <h2>Agende seu Horário</h2>
        <p>Escolha o serviço, pacote e horário desejado</p>

        <div className="booking-steps">
          {/* Passo 1: Serviço */}
          <div className="step">
            <h3>1. Escolha o Serviço</h3>
            <div className="service-cards">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`service-card ${
                    selectedService === service.name ? "selected" : ""
                  }`}
                  onClick={() => {
                    setSelectedService(service.name);
                    setSelectedPackage(""); // Limpa a seleção do pacote ao mudar de serviço
                  }}
                >
                  <h4>{service.name}</h4>
                  <p className="duration">{service.duration}</p>
                  <p className="description">{service.description}</p>
                  {!service.hasPackages && (
                    <span
                      className={`price ${
                        service.price === "Grátis" ? "free" : ""
                      }`}
                    >
                      {service.price}
                    </span>
                  )}
                  {service.hasPackages && (
                    <span className="price-variable">
                      Valores a partir de R$ 200/mês
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Passo 2: Pacotes (apenas para Aula de Pilates) */}
          {selectedServiceObj && selectedServiceObj.hasPackages && (
            <div className="step">
              <h3>2. Escolha o Plano</h3>
              <div className="package-cards">
                {packages[selectedService].map((pkg, index) => (
                  <div
                    key={index}
                    className={`package-card ${
                      selectedPackage === pkg.name ? "selected" : ""
                    }`}
                    onClick={() => setSelectedPackage(pkg.name)}
                  >
                    <h4>{pkg.name}</h4>
                    {selectedPackage === pkg.name ? (
                      <p className="package-price">{pkg.price}</p>
                    ) : (
                      <p className="package-price hidden-price">Ver valor</p>
                    )}

                    <p className="package-details">{pkg.details}</p>
                    {pkg.savings && (
                      <span className="package-savings">{pkg.savings}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Passo 2/3: Data */}
          <div className="step">
            <h3>
              {selectedServiceObj && selectedServiceObj.hasPackages
                ? "3. Escolha a Data"
                : "2. Escolha a Data"}
            </h3>
            <div className="date-picker">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
              />
              <p className="date-hint">Atendemos de segunda a sexta-feira</p>
            </div>
          </div>

          {/* Passo 3/4: Horário */}
          <div className="step">
            <h3>
              {selectedServiceObj && selectedServiceObj.hasPackages
                ? "4. Escolha o Horário"
                : "3. Escolha o Horário"}
            </h3>
            <div className="time-slots">
              {timeSlots.map((time, index) => (
                <button
                  key={index}
                  className={`time-slot ${
                    selectedTime === time ? "selected" : ""
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
            <div className="schedule-info">
              <p>⏰ Horário de almoço: 12h às 13h</p>
              <p>🚫 Sábados, domingos e feriados não atendemos</p>
              <p>👥 Máximo 3 alunos por turma</p>
              <p>💬 Tire suas dúvidas pelo WhatsApp: (19) 98129-3361</p>
            </div>
          </div>
        </div>

        <div className="booking-summary">
          <h3>Resumo do Agendamento</h3>
          <div className="summary-details">
            <p>
              <strong>Serviço:</strong> {selectedService}
            </p>
            {selectedServiceObj &&
              selectedServiceObj.hasPackages &&
              selectedPackage && (
                <>
                  <p>
                    <strong>Plano:</strong> {selectedPackage}
                  </p>
                  <p>
                    <strong>Valor:</strong> {getSelectedPrice()}
                  </p>
                </>
              )}
            {selectedServiceObj && !selectedServiceObj.hasPackages && (
              <p>
                <strong>Valor:</strong> {selectedServiceObj.price}
              </p>
            )}
            <p>
              <strong>Data:</strong> {selectedDate || "Não selecionada"}
            </p>
            <p>
              <strong>Horário:</strong> {selectedTime || "Não selecionado"}
            </p>
          </div>

          <div className="booking-actions">
            <button
              className="btn-confirm"
              onClick={async () => {
                const confirmado = await confirmar(
                  selectedService,
                  selectedPackage,
                  selectedDate,
                  selectedTime,
                  getSelectedPrice()
                );

                if (confirmado) {
                  const message = `Olá! Gostaria de agendar:\n\n*Serviço:* ${selectedService}\n${
                    selectedPackage ? `*Plano:* ${selectedPackage}\n` : ""
                  }${
                    getSelectedPrice() ? `*Valor:* ${getSelectedPrice()}\n` : ""
                  }*Data:* ${selectedDate}\n*Horário:* ${selectedTime}`;

                  window.open(
                    `https://wa.me/5519981293361?text=${encodeURIComponent(
                      message
                    )}`,
                    "_blank"
                  );
                }
              }}
              disabled={
                !selectedDate ||
                !selectedTime ||
                (selectedServiceObj &&
                  selectedServiceObj.hasPackages &&
                  !selectedPackage)
              }
            >
              Agendar via WhatsApp
            </button>

            <button
              className="btn-calendly"
              onClick={() =>
                window.open("https://calendly.com/mthflashice", "_blank")
              }
            >
              Agendar com Calendly
            </button>
          </div>

          <div className="whatsapp-info">
            <p>
              Para tirar dúvidas sobre valores, horários ou disponibilidade,
              fale diretamente conosco pelo WhatsApp:
            </p>
            <a
              href="https://wa.me/5519981293361?text=Olá! Gostaria de tirar algumas dúvidas sobre as aulas de Pilates e Shiatsu."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-doubts"
            >
              Tirar Dúvidas no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
