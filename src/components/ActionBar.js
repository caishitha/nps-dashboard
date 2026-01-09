import React from 'react';
import './ActionBar.css';

const ActionBar = ({ selectedCount = 0, onRefresh, onExport, onDownloadCSV, onBulkAssign }) => {
  const handleRefresh = () => {
    console.log('Refresh clicked');
    if (onRefresh) onRefresh();
  };

  const handleExport = () => {
    console.log('Export clicked');
    if (onExport) onExport();
  };
  
  const handleBulkAssign = () => {
    console.log('Bulk Assign clicked');
    if (onBulkAssign) onBulkAssign();
  };

  const handleDownloadCSV = () => {
    console.log('Download CSV clicked');
    if (onDownloadCSV) onDownloadCSV();
  };

  return (
    <div className="action-bar">
      <div className="left-actions">
        <div className="customer-count">
          <h2 className="count-title">NPS</h2>
          <p className="count-subtitle">Showing 718 customers in eligible</p>
        </div>
      </div>
      
      <div className="right-actions">
        <div className="select-info">
          <span className="select-label">Select:</span>
          <span className="select-count">{selectedCount}</span>
        </div>
        <button className="refresh-button" onClick={handleRefresh}>
          <span>Refresh</span>
        </button>
        <button className="blue-button" onClick={handleBulkAssign}>
          <span>Bulk Assignment</span>
        </button>
        <button className="blue-button" onClick={handleExport}>
          <span>Export</span>
        </button>
        <button className="blue-button" onClick={handleDownloadCSV}>
          <span className="button-icon">📥</span>
          <span>Download CSV</span>
        </button>
      </div>
    </div>
  );
};

export default ActionBar;