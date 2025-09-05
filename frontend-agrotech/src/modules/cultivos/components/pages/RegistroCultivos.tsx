import React, { useState, useEffect } from 'react';
import type { Cultivo } from '../../types';
import StatCard from '../atoms/StatCard';
import Tabs from '../molecules/Tabs';
import CultivoForm from '../organisms/CultivoForm';
import CultivosCard from '../molecules/CultivosCard';

const CheckIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em">
    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
  </svg>
);

const AlertIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
  </svg>
);

const RegistroCultivos: React.FC = () => {
  const [cultivos, setCultivos] = useState<Cultivo[]>([]);
  const [activeTab, setActiveTab] = useState('Registro');

  // ÚNICO useEffect para actualizar el título
  useEffect(() => {
    // Buscar el elemento del título en el navbar y actualizarlo
    const navbarTitle = document.querySelector('.navbar-title');
    if (navbarTitle) {
      navbarTitle.textContent = 'CULTIVOS';
    }
    
    // Limpiar el título al desmontar el componente
    return () => {
      const navbarTitle = document.querySelector('.navbar-title');
      if (navbarTitle) {
        navbarTitle.textContent = '';
      }
    };
  }, []);

  const handleRegistrarCultivo = (nuevoCultivo: Omit<Cultivo, 'id'>) => {
    setCultivos([...cultivos, { ...nuevoCultivo, id: Date.now().toString() }]);
  };

  return (
    <div className="page-container">
      {/* ELIMINADO: El header con el título ya que ahora está en el navbar */}
      
      <section className="stats-container">
        <StatCard icon={<div />} value={2} label="Cultivos activos" iconBgColor="#E0F2F1" />
        <StatCard icon={<CheckIcon />} value={1} label="Próximos a cosecha" iconBgColor="#E3F2FD" />
        <StatCard icon={<AlertIcon />} value={2} label="Alertas" iconBgColor="#FFF3E0" />
        <StatCard icon={<div />} value="10.4" label="Rendimiento (t)" iconBgColor="#FCE4EC" />
      </section>
      
      <Tabs
        tabs={["Registro", "Historial", "Fotodocumentacion", "Gestion", "Comparacion"]}
        activeTab={activeTab}
        onTabClick={setActiveTab}
      />
      
      <main className="content-grid">
        <div className="form-container">
          <CultivoForm onSubmit={handleRegistrarCultivo} />
        </div>
        <div className="cultivos-list-container">
          <h3>Cultivos Registrados</h3>
          <div className="cultivos-list">
            {cultivos.length === 0 ? (
              <p>No hay cultivos registrados</p>
            ) : (
              cultivos.map(cultivo => (
                <CultivosCard key={cultivo.id} title={cultivo.nombre}>
                  <p><strong>Tipo:</strong> {cultivo.tipo}</p>
                  <p><strong>Inicio:</strong> {cultivo.fechaInicio}</p>
                  <p><strong>Estado:</strong> {cultivo.estado}</p>
                </CultivosCard>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegistroCultivos;