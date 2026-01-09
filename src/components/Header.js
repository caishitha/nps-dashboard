import React, { useState } from 'react';
import './Header.css';

const Header = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('nps'); // Default to NPS tab

  const tabs = [
    { id: 'nps', label: 'NPS' },
    { id: 'dn', label: 'DN Health' },
    { id: 'csm', label: 'CSM Health' }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <div className="header">
      <div className="header-left">
        <h1 className="main-title">NPS</h1>
        <div className="tabs-container">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Header;