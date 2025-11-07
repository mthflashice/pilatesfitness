import React from 'react';

function EquipmentGallery() {
  const equipment = [
    {
      name: 'Cadillac',
      image: '/images/cadillac.jpg',
      description: 'O Cadillac é um aparelho completo do Pilates, ideal para reabilitação e exercícios avançados.',
      features: ['Estrutura robusta e estável', 'Vários acessórios intercambiáveis', 'Excelente para alongamento']
    },
    {
      name: 'Reformer',
      image: '/images/reformer.jpg',
      description: 'O Reformer é o aparelho mais versátil do Pilates, perfeito para fortalecimento e condicionamento.',
      features: ['Molas de resistência ajustáveis', 'Carro móvel para variação de exercícios', 'Excelente para trabalho do core']
    },
    {
      name: 'Chair',
      image: '/images/chair.jpg',
      description: 'A Cadeira de Pilates é compacta e eficiente, ótima para trabalho de equilíbrio e força.',
      features: ['Design compacto e versátil', 'Excelente para equilíbrio', 'Fortalecimento do core']
    },
    {
      name: 'Barrel',
      image: '/images/barrel.jpg',
      description: 'O Barrel é perfeito para exercícios de alongamento, flexibilidade e fortalecimento do core.',
      features: ['Excelente para alongamento', 'Melhora da flexibilidade', 'Fortalecimento do core']
    },
    {
      name: 'Bola Suíça',
      image: '/images/Bola Suiça.jpg',
      description: 'A Bola Suíça é usada para melhorar equilíbrio, coordenação e força do core, além de auxiliar na postura.',
      features: ['Melhora do equilíbrio e coordenação', 'Fortalece abdômen e lombar', 'Usada em exercícios funcionais e de reabilitação']
    }
  ];

  const EquipmentImage = ({ src, alt, name }) => {
    const [imgError, setImgError] = React.useState(false);
    
    const getFallbackImage = (equipmentName) => {
      const fallbacks = {
        'Cadillac': 'https://images.unsplash.com/photo-1598306948097-6109b9a8a6d0?w=800&h=600&fit=crop&crop=center',
        'Reformer': 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=600&fit=crop&crop=center',
        'Chair': 'https://images.unsplash.com/photo-1601924994987-69e26d50dc86?w=800&h=600&fit=crop&crop=center',
        'Barrel': 'https://images.unsplash.com/photo-1584697964198-3c2b6a7a1f3a?w=800&h=600&fit=crop&crop=center',
        'Bola Suíça': 'https://cdn.pixabay.com/photo-2016/11/18/17/42/gym-1834826_1280.jpg'
      };
      
      return fallbacks[equipmentName] || 'https://via.placeholder.com/800x600?text=Imagem+do+aparelho';
    };

    return (
      <img
        src={imgError ? getFallbackImage(name) : src}
        alt={alt}
        style={{ 
          width: '100%', 
          height: '200px', 
          objectFit: 'cover' 
        }}
        onError={() => setImgError(true)}
      />
    );
  };

  return (
    <section className="equipment-gallery" id="equipment">
      <div className="container">
        <h2>Galeria de Equipamentos</h2>
        <p className="gallery-subtitle">
          Conheça os aparelhos e acessórios de Pilates que utilizamos em nossas aulas
        </p>
        
        <div className="equipment-grid">
          {equipment.map((item, index) => (
            <div 
              key={index} 
              className="equipment-card-link"
              onClick={() => {
                // Aqui você pode adicionar uma função para abrir um modal ou detalhes do equipamento
                console.log(`Clicou no equipamento: ${item.name}`);
              }}
            >
              <div className="equipment-card">
                <div className="equipment-image">
                  <EquipmentImage 
                    src={item.image} 
                    alt={item.name}
                    name={item.name}
                  />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EquipmentGallery;