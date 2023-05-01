import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar" style={{ backgroundColor: '#F5F5F5', color: '#333333' }}>
      <div className="sidebar-item" style={{ backgroundColor: '#FFFFFF', padding: '16px', marginBottom: '16px' }}>
        <h3 style={{ textAlign: 'center' }}>Dashboard</h3>
      </div>
      <div className="sidebar-item" style={{ backgroundColor: '#FFFFFF', padding: '16px', marginBottom: '16px' }}>
        <h3 style={{ textAlign: 'center' }}>Achievements</h3>
      </div>
      <div className="sidebar-item" style={{ backgroundColor: '#333333', padding: '16px', marginBottom: '16px' }}>
        <h3 style={{ textAlign: 'center', color: '#FFFFFF' }}>Chats</h3>
      </div>
    </div>
  );
};

export default Sidebar;