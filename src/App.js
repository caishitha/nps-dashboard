import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import StatsCards from './components/StatsCards';
import ActionBar from './components/ActionBar';
import CustomerTable from './components/CustomerTable';

function App() {
  const [selectedCount, setSelectedCount] = useState(0);
  const [activeTab, setActiveTab] = useState('nps');

    const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (tabId !== 'nps') {
      setSelectedCount(0);
    }
  };

  const handleSelectionChange = (count) => {
    setSelectedCount(count);
  };

  const handleRefresh = () => {
    alert('Refresh functionality would be implemented here');
  };

  const handleExport = () => {
    alert('Export functionality would be implemented here');
  };

  const handleDownloadCSV = () => {
    alert('Download CSV functionality would be implemented here');
  };

  const handleBulkAssign = () => {
    if (selectedCount === 0) {
      alert('Please select at least one customer');
      return;
    }
    alert(`Bulk assignment for ${selectedCount} selected customers`);
  };
   const renderTabContent = () => {
    switch (activeTab) {
      case 'nps':
           return (
          <>
           <ActionBar 
              selectedCount={selectedCount}
              onRefresh={handleRefresh}
              onExport={handleExport}
              onDownloadCSV={handleDownloadCSV}
              onBulkAssign={handleBulkAssign}
            />
            <StatsCards />
           
            <CustomerTable onSelectionChange={handleSelectionChange} />
          </>
        );
      case 'dn':
        return (
          <div className="tab-content">
            <h2>DN Health Dashboard</h2>
            <p>DN Health metrics and analytics will appear here.</p>
            <div className="placeholder">
              {/* Add DN Health specific components here */}
            </div>
          </div>
        );
      case 'csm':
        return (
          <div className="tab-content">
            <h2>CSM Health Dashboard</h2>
            <p>CSM Health metrics and analytics will appear here.</p>
            <div className="placeholder">
              {/* Add CSM Health specific components here */}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header onTabChange={handleTabChange} />
      {renderTabContent()}
    </div>
  );
}
export default App;
