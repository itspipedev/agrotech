import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNav from '../../modules/login/components/2-molecules/DashboardNav';
import NavBar from '../../modules/login/components/2-molecules/NavBar';

const DashboardLayout: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="dashboard-container">
      <DashboardNav isCollapsed={isSidebarCollapsed} />
      <div className={`main-content ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        <NavBar onMenuToggle={toggleSidebar} />
        <main className="dashboard-main-panel">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;