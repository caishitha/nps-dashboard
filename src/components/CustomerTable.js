import React, { useState } from 'react';
import './CustomerTable.css';

const CustomerTable = ({ onSelectionChange }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const customers = [
    { id: '100683', name: 'MFS Wholesale Private Limited', status: 'Live', lastFeedback: 'No feedback', nextDue: '1/8/2026', daysLeft: 'Today' },
    { id: '100687', name: 'SH International', status: 'Live', lastFeedback: 'No feedback', nextDue: '1/8/2026', daysLeft: 'Today' },
    { id: '100688', name: 'Suraj Marketing', status: 'Live', lastFeedback: 'No feedback', nextDue: '1/8/2026', daysLeft: 'Today' },
    { id: '100727', name: 'JK TRADING CORPORATION', status: 'Live', lastFeedback: 'No feedback', nextDue: '1/8/2026', daysLeft: 'Today' },
    { id: '100728', name: 'SN EMAST BIZCONP', status: 'Live', lastFeedback: 'No feedback', nextDue: '1/8/2026', daysLeft: 'Today' },
    { id: '100736', name: 'E-Shopping Sales Corporation', status: 'Live', lastFeedback: 'No feedback', nextDue: '1/8/2026', daysLeft: 'Today' },
    { id: '100757', name: 'Zawaa Foods', status: 'Live', lastFeedback: 'No feedback', nextDue: '1/8/2026', daysLeft: 'Today' },
    { id: '100761', name: 'ASR Designing House', status: 'Live', lastFeedback: 'No feedback', nextDue: '1/8/2026', daysLeft: 'Today' },
  ];

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allIds = customers.map(customer => customer.id);
      setSelectedRows(allIds);
      if (onSelectionChange) onSelectionChange(allIds.length);
    } else {
      setSelectedRows([]);
      if (onSelectionChange) onSelectionChange(0);
    }
  };

  const handleSelectRow = (customerId, e) => {
    let newSelectedRows;
    if (e.target.checked) {
      newSelectedRows = [...selectedRows, customerId];
    } else {
      newSelectedRows = selectedRows.filter(id => id !== customerId);
    }
    setSelectedRows(newSelectedRows);
    if (onSelectionChange) onSelectionChange(newSelectedRows.length);
  };

  const handleAddFeedback = (customerId, customerName) => {
    console.log(`Add feedback for ${customerName} (ID: ${customerId})`);
    // Implement feedback modal or page navigation here
  };

  return (
    <div className="customer-table-container">
      <div className="table-header">
        <div className="select-all-cell">
          <input 
            type="checkbox" 
            onChange={handleSelectAll}
            checked={selectedRows.length === customers.length && customers.length > 0}
          />
        </div>
        <span className="column-header">Customer</span>
        <span className="column-header">Customer Name</span>
        <span className="column-header">Customer Status</span>
        <span className="column-header">CSM</span>
        <span className="column-header">Manager</span>
        <span className="column-header">Last Feedback</span>
        <span className="column-header">Next Due</span>
        <span className="column-header">Days Left</span>
        <span className="column-header">Actions</span>
      </div>

      <div className="table-body">
        {customers.map((customer) => (
          <div key={customer.id} className="table-row">
            <div className="table-cell">
              <input 
                type="checkbox" 
                checked={selectedRows.includes(customer.id)}
                onChange={(e) => handleSelectRow(customer.id, e)}
              />
            </div>
            <div className="table-cell customer-id">{customer.id}</div>
            <div className="table-cell customer-name">{customer.name}</div>
            <div className="table-cell">
              <span className="status-badge live">{customer.status}</span>
            </div>
            <div className="table-cell">-</div>
            <div className="table-cell">-</div>
            <div className="table-cell">{customer.lastFeedback}</div>
            <div className="table-cell">{customer.nextDue}</div>
            <div className="table-cell">
              <span className="days-left today">{customer.daysLeft}</span>
            </div>
            <div className="table-cell">
              <button 
                className="add-feedback-btn"
                onClick={() => handleAddFeedback(customer.id, customer.name)}
              >
                Add Feedback
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTable;