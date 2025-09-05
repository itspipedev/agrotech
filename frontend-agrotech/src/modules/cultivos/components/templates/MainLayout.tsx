import React from 'react';
import './MainLayout.css';

interface MainLayoutProps {
  children: React.ReactNode;
  sidebarContent?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, sidebarContent }) => {
  return (
    <div className="main-layout">
      {/* Navbar */}
      <div className="main-navbar">
        <div className="navbar-left">
          {/* Botón de menú y logo */}
          <button className="menu-toggle">☰</button>
          <img src="/logo.png" alt="Logo" className="navbar-logo" />

          {/* Título dinámico (se actualiza desde las vistas con useEffect) */}
          <h1 className="navbar-title"></h1>
        </div>

        <div className="search-bar">
          {/* Aquí puedes poner tu input de búsqueda */}
        </div>

        <div className="user-icons">
          {/* Aquí puedes poner íconos de usuario, notificaciones, etc. */}
        </div>
      </div>

      {/* Contenido con sidebar + main */}
      <div className="main-body">
        <aside className="sidebar">{sidebarContent}</aside>
        <main className="content">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
