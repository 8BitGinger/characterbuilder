import React from 'react';

const StatAllocator = ({ stats, pointsRemaining, onStatChange }) => {
  const statNames = ['might', 'celerity', 'resilience', 'cognition', 'aura'];

  // Handle incrementing a stat
  const handleIncrement = (statName) => {
    if (pointsRemaining > 0) {
      onStatChange(statName, stats[statName] + 1);
    }
  };

  // Handle decrementing a stat
  const handleDecrement = (statName) => {
    if (stats[statName] > 0) {
      onStatChange(statName, stats[statName] - 1);
    }
  };

  return (
    <div className="stat-allocator-section">
      <h3>Stat Points (Remaining: <span className="points-remaining">{pointsRemaining}</span>)</h3>
      {statNames.map(stat => (
        <div key={stat} className="stat-row">
          <span className="stat-name">{stat.charAt(0).toUpperCase() + stat.slice(1)}:</span>
          <span className="stat-value">{stats[stat]}</span>
          <div className="stat-buttons">
            <button onClick={() => handleDecrement(stat)} disabled={stats[stat] <= 0}>-</button>
            <button onClick={() => handleIncrement(stat)} disabled={pointsRemaining <= 0}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatAllocator;
