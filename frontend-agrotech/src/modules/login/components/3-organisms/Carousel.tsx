import React, { useState } from 'react';
import Button from '../1-atoms/Button';
import Image from '../1-atoms/Image';
import SensorIcon from '../1-atoms/SensorIcon';

interface CarouselItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  temperature: string;
  humidity: string;
  sunlight: string;
  ph: string;
}

const items: CarouselItem[] = [
  {
    id: 'H201',
   image: '/cacao.jpg',
    title: 'Cultivo: H201',
    subtitle: 'Cacao de brasil',
    temperature: '32°',
    humidity: '79°',
    sunlight: 'Soleado',
    ph: 'Sensor pH 3.5',
  },
  {
    id: 'H202',
    image: '/cafe.jpg',
    title: 'Cultivo: H202',
    subtitle: 'Café de Colombia',
    temperature: '25°',
    humidity: '85°',
    sunlight: 'Nublado',
    ph: 'Sensor pH 6.0',
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const currentItem = items[currentIndex];

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <div className="carousel-item">
          <div className="carousel-card">
            <div className="card-image-container">
              <Image src={currentItem.image} alt={currentItem.title} className="card-image" />
              <div className="card-overlay">
                <h2 className="card-title">{currentItem.title}</h2>
                <p className="card-subtitle">{currentItem.subtitle}</p>
                <Button className="btn primary small">Ver más detalles</Button>
              </div>
            </div>
            <div className="card-info">
              <div className="info-item">
                <SensorIcon name="thermometer" />
                <span>Temperatura</span>
                <strong>{currentItem.temperature}</strong>
              </div>
              <div className="info-item">
                <SensorIcon name="humidity" />
                <span>Humedad</span>
                <strong>{currentItem.humidity}</strong>
              </div>
              <div className="info-item">
                <SensorIcon name="sun" />
                <span>{currentItem.sunlight}</span>
              </div>
              <div className="info-item">
                <SensorIcon name="ph-sensor" />
                <span>{currentItem.ph}</span>
              </div>
              <Button className="btn primary small right-aligned">Ver actividades</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-dots">
        {items.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;