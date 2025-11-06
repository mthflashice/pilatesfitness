import React from 'react';

function Schedule() {
  const horários = [
    { dia: 'Segunda', aulas: ['8h-9h', '9h-10h', '10h-11h', '14h-15h', '15h-16h', '16h-17h', '17h-18h', '18h-19h', '19h-20h'] },
    { dia: 'Terça', aulas: ['8h-9h', '9h-10h', '10h-11h', '14h-15h', '15h-16h', '16h-17h', '17h-18h', '18h-19h', '19h-20h'] },
    { dia: 'Quarta', aulas: ['8h-9h', '9h-10h', '10h-11h', '14h-15h', '15h-16h', '16h-17h', '17h-18h', '18h-19h', '19h-20h'] },
    { dia: 'Quinta', aulas: ['8h-9h', '9h-10h', '10h-11h', '14h-15h', '15h-16h', '16h-17h', '17h-18h', '18h-19h', '19h-20h'] },
    { dia: 'Sexta', aulas: ['8h-9h', '9h-10h', '10h-11h', '14h-15h', '15h-16h', '16h-17h', '17h-18h', '18h-19h', '19h-20h'] }
  ];

  return (
    <section className="schedule" id="schedule">
      <h2>Horários das Aulas</h2>
      <p>Segunda a Sexta | Máximo 3 alunos por turma</p>
      
      <div className="horarios-grid">
        {horarios.map((item) => (
          <div key={item.dia} className="dia-card">
            <h3>{item.dia}</h3>
            <ul>
              {item.aulas.map((horario) => (
                <li key={horario}>
                  {horario}
                  <button 
                    onClick={() => window.open('https://calendly.com/seu-usuario/pilates', '_blank')}
                    className="btn-agendar"
                  >
                    Agendar
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="aviso">
        <p>⚠️ Sábados, domingos e feriados não funcionamos</p>
        <p>Almoço: 12h-13h (intervalo obrigatório)</p>
      </div>
    </section>
  );
}

export default Schedule;