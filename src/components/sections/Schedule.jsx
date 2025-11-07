import React from 'react';

function Schedule() {
  return (
    <section className="schedule-section" id="schedule">
      <div className="container">
        <h2>Horários das Aulas</h2>
        <div className="schedule-table-container">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Dia</th>
                <th>Horário</th>
                <th>Aula</th>
                <th>Equipamento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Segunda</td>
                <td>08:00 - 09:00</td>
                <td>Pilates Solo</td>
                <td>Mat</td>
              </tr>
              <tr>
                <td>Terça</td>
                <td>10:00 - 11:00</td>
                <td>Pilates</td>
                <td>Reformer</td>
              </tr>
              <tr>
                <td>Quarta</td>
                <td>08:00 - 09:00</td>
                <td>Pilates Solo</td>
                <td>Mat</td>
              </tr>
              <tr>
                <td>Quinta</td>
                <td>10:00 - 11:00</td>
                <td>Pilates</td>
                <td>Cadillac</td>
              </tr>
              <tr>
                <td>Sexta</td>
                <td>08:00 - 09:00</td>
                <td>Pilates Solo</td>
                <td>Mat</td>
              </tr>
              <tr>
                <td>Sábado</td>
                <td>09:00 - 10:00</td>
                <td>Pilates</td>
                <td>Reformer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Schedule;