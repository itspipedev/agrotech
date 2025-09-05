import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  iconBgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, iconBgColor }) => {
  return (
    <div className="stat-card">
      <div className="stat-card-icon" style={{ backgroundColor: iconBgColor }}>
        {icon}
      </div>
      <div className="stat-card-info">
        <span className="stat-card-value">{value}</span>
        <span className="stat-card-label">{label}</span>
      </div>
    </div>
  );
};

export default StatCard;