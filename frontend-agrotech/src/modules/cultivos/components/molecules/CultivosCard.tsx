import React from 'react';

interface CultivosCardProps {
  title: string;
  children: React.ReactNode;
}

const CultivosCard: React.FC<CultivosCardProps> = ({ title, children }) => {
  return (
    <div className="cultivo-card">
      <h4>{title}</h4>
      {children}
    </div>
  );
};

export default CultivosCard;