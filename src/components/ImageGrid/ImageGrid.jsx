import React from 'react';
import './ImageGrid.scss';

const ImageGrid = ({ images, title, description }) => {
  return (
    <section className="image-grid">
      {images.map((image) => (
        <div key={image.id} className="image-grid__item">
          <div className="image-grid__card">
            <div className="image-grid__image-container">
              <img src={image.src} alt={image.alt} />
            </div>
            <div className="image-grid__content">
              <p className="image-grid__description">{description || image.description}</p>
              <h3 className="image-grid__title">{title || image.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ImageGrid;
