import React from 'react';

function Gallery() {
  const images = [
    '/images/studio1.jpg',
    '/images/studio2.jpg',
    '/images/studio3.jpg',
    '/images/studio4.jpg',
    '/images/studio5.jpg',
    '/images/studio6.jpg'
  ];

  return (
    <section className="gallery" id="gallery">
      <h2>Nosso Espaço</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Imagem do estúdio ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;