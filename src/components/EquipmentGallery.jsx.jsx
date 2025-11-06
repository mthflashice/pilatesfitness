import React from 'react';

function EquipmentGallery() {
  const equipment = [
    {
      name: 'Cadillac',
      image: '/images/Cadillac.webp',
      description: 'O Cadillac é um aparelho completo do Pilates, ideal para reabilitação e exercícios avançados.',
      features: [
        'Estrutura robusta e estável',
        'Vários acessórios intercambiáveis',
        'Excelente para alongamento',
        'Ideal para reabilitação',
        'Adequado para todos os níveis'
      ]
    },
    {
      name: 'Reformer',
      image: '/images/reformer.jpg',
      description: 'O Reformer é o aparelho mais versátil do Pilates, perfeito para fortalecimento e condicionamento.',
      features: [
        'Molas de resistência ajustáveis',
        'Carro móvel para variação de exercícios',
        'Excelente para trabalho do core',
        'Adequado para reabilitação',
        'Versátil para todos os níveis'
      ]
    },
    {
      name: 'Chair',
      image: '/images/Chair.webp',
      description: 'A Cadeira de Pilates é compacta e eficiente, ótima para trabalho de equilíbrio e força.',
      features: [
        'Design compacto e versátil',
        'Excelente para equilíbrio',
        'Fortalecimento do core',
        'Adequada para espaços pequenos',
        'Ótima para exercícios avançados'
      ]
    },
    {
      name: 'Barrel',
      image: '/images//barrel.jpg',
      description: 'O Barrel é perfeito para exercícios de alongamento, flexibilidade e fortalecimento do core.',
      features: [
        'Excelente para alongamento',
        'Melhora da flexibilidade',
        'Fortalecimento do core',
        'Adequado para todos os níveis',
        'Design ergonômico'
      ]
    }
  ];

  return (
    <section className="equipment-gallery" id="gallery">
      <div className="gallery-container">
        <h2>Nossos Equipamentos</h2>
        <p className="gallery-subtitle">
          Conheça os aparelhos de Pilates que utilizamos em nossas aulas para garantir os melhores resultados
        </p>
        
        <div className="equipment-grid">
          {equipment.map((item, index) => (
            <div key={index} className="equipment-card">
              <div className="equipment-image">
                <img src={item.image} alt={item.name} />
                <div className="equipment-overlay">
                  <h3>{item.name}</h3>
                </div>
              </div>
              <div className="equipment-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <ul>
                  {item.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EquipmentGallery;