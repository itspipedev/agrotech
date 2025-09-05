import React from 'react';
import Icon from '../1-atoms/Icon';
import Input from '../1-atoms/Input';

interface NavBarProps {
  onMenuToggle: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onMenuToggle }) => {
  return (
    <header className="main-navbar">
      <div className="navbar-left">
        <button onClick={onMenuToggle} className="menu-toggle">
          <Icon name="menu" width="24" height="24" />
        </button>
        
        {/* Añade este elemento para el título dinámico */}
        <h1 className="navbar-title"></h1>
      </div>
      
      <div className="navbar-right">
        <div className="search-bar">
          <Icon name="search" width="20" height="20" className="search-icon" />
          <Input type="text" placeholder="Buscar" className="search-input" />
        </div>
        <div className="user-icons">
          <Icon name="notifications" width="24" height="24" className="icon" />
          <Icon name="usuarios" width="24" height="24" className="icon" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;