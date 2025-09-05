// src/pages/HomePage.tsx

import React from 'react';
import Carousel from '../components/3-organisms/Carousel';
import Icon from '../components/1-atoms/Icon';
import Button from '../components/1-atoms/Button';

// Un ejemplo de datos para las actividades
const latestActivities = [
  {
    id: 1,
    description: 'Se fertilizó el cultivo H333 por el aprendiz juanita',
    date: '15/7/25',
    time: '8:00 AM',
  },
  {
    id: 2,
    description: 'Se registró una venta del cultivo H212',
    date: '12/7/25',
    time: '7:00 AM',
  },
  {
    id: 3,
    description: 'Se registró limpieza del suelo en el cultivo H432',
    date: '27/7/25',
    time: '5:00 PM',
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="home-page-container">
      <Carousel />

      <section className="dashboard-summary">
        <div className="summary-card">
          <div className="summary-icon-container">
            <Icon name="flowerpot" className="summary-icon" />
          </div>
          <div className="summary-text">
            <strong>14</strong>
            <span>cultivos activos</span>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon-container">
            <Icon name="alert" className="summary-icon" />
          </div>
          <div className="summary-text">
            <strong>3</strong>
            <span>Alertas activas</span>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon-container">
            <Icon name="file" className="summary-icon" />
          </div>
          <div className="summary-text">
            <strong>5</strong>
            <span>Reportes generados</span>
          </div>
        </div>
      </section>

      <section className="latest-activities">
        <h3 className="section-title">Últimas actividades</h3>
        <ul className="activity-list">
          {latestActivities.map((activity) => (
            <li key={activity.id} className="activity-item">
              <div className="activity-dot"></div>
              <p className="activity-description">{activity.description}</p>
              <span className="activity-date">{activity.date}</span>
              <span className="activity-time">{activity.time}</span>
            </li>
          ))}
        </ul>
        <Button className="btn primary small">Ver mas</Button>
      </section>

      <div className="chart-placeholder">
        <h3>Rentabilidad de los ultimos 3 meses</h3>
        {/* Aquí iría el componente de gráfico */}
      </div>
    </div>
  );
};

export default HomePage;