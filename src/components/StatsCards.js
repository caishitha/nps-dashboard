import React from 'react';
import './StatsCards.css';

const StatsCards = ({ activeTab = 'nps' }) => {
  const getStats = () => {
    switch (activeTab) {
      case 'nps':
        return [
          { label: 'Unassigned', count: '713', color: '#667085' },
          { label: 'Assigned', count: '73', color: '#667085' },
          { label: 'Completed', count: '0', color: '#667085' },
          { label: 'Re Feedback', count: '0', color: '#667085' },
          { label: 'Issue Highlighted', count: '1', color: '#667085' },
          { label: 'Commented Ongoing', count: '1', color: '#667085' },
          { label: 'Resolved Completed', count: '0', color: '#667085' },
        ];
      case 'dn':
        return [
          { label: 'DN Score', count: '85', color: '#039855' },
          { label: 'Active DNs', count: '120', color: '#667085' },
          { label: 'At Risk', count: '15', color: '#d92d20' },
          { label: 'Healthy', count: '95', color: '#039855' },
        ];
      case 'csm':
        return [
          { label: 'CSM Score', count: '92', color: '#039855' },
          { label: 'Active CSMs', count: '25', color: '#667085' },
          { label: 'Performance', count: 'A', color: '#039855' },
          { label: 'Engagement', count: '94%', color: '#039855' },
        ];
      default:
        return [];
    }
  };

  const stats = getStats();

  return (
    <div className="stats-section">
      <div className="stats-cards">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <span className="stat-count" style={{ color: stat.color }}>
              {stat.count}
            </span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCards;