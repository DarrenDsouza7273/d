import React from 'react';
import DeforestationChart from './components/Chart';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="chart-container">
        <DeforestationChart />
      </div>
      <div className="chart-container">
        <DeforestationChart />
      </div>
      <div className="chart-container">
        <DeforestationChart />
      </div>
      <div className="chart-container">
        <DeforestationChart />
      </div>
    </div>
  );
};

export default Dashboard;
