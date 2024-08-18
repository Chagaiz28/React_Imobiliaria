import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const images = [
  '/images/casa1.jpg',
  '/images/casa2.jpg',
];

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  const handleViewProperties = () => {
    navigate('/properties');
  };

  return (
    <div className="home-page">
      <h1>Bem-vindo à Imobiliária</h1>
      <p>Encontre a casa dos seus sonhos.</p>
      <div className="image-slider">
        <button className="slider-button" onClick={handlePrevImage}>&lt;</button>
        <img src={images[currentImageIndex]} alt="Casa" className="home-image" />
        <button className="slider-button" onClick={handleNextImage}>&gt;</button>
      </div>
      <div className="cta">
        <button className="cta-button" onClick={handleViewProperties}>Ver Propriedades</button>
      </div>
    </div>
  );
};

export default HomePage;