import React from 'react';

function Video() {
  return (
    <section className="video-section">
      <h2>Conheça Nosso Estúdio</h2>
      <div className="video-container">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/OE9ezpSpulU"
          title="Vídeo do Estúdio de Pilates"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default Video;