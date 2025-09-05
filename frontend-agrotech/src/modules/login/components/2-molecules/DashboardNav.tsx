import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../1-atoms/Icon';
import Image from '../1-atoms/Image';


interface NavItem {
  name: string;
  icon: string;
  label: string;
}

const navItems: NavItem[] = [
  { name: 'home', icon: 'home', label: 'Inicio' },
  { name: 'cultivos', icon: 'cultivos', label: 'Cultivos' },
  { name: 'fitosanitario', icon: 'fitosanitario', label: 'Fitosanitario' },
  { name: 'iot', icon: 'iot', label: 'IOT' },
  { name: 'inventario', icon: 'inventario', label: 'Inventario' },
  { name: 'finanzas', icon: 'finanzas', label: 'Finanzas' },
  { name: 'reportes', icon: 'reportes', label: 'Reportes' },
  { name: 'usuarios', icon: 'usuarios', label: 'Usuarios' },
];

interface DashboardNavProps {
  isCollapsed: boolean;
}

const DashboardNav: React.FC<DashboardNavProps> = ({ isCollapsed }) => {
  return (
    <nav className={`dashboard-nav ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="nav-logo-container">
        <Image src="/LogoTic.png" alt="TIC Yamboró" className="nav-logo" />
      </div>
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.name} className="nav-item">
            <NavLink
              to={`/app/${item.name}`}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              <Icon name={item.icon} className="nav-icon" width="24" height="24" />
              {!isCollapsed && <span className="nav-label">{item.label}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DashboardNav;