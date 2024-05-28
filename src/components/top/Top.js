import React from 'react';
import { PieGraph } from '../graph/Pie';
import KakeiboTable from '../kakeibo_Table/KakeiboTable';

const Dashboard = () => {
  return (
    <div>
      <section style={{ display: 'flex', alignItems: 'center' }}>
        <div className="App" style={{ width: '40%' }}>
          <PieGraph />
        </div>
      </section>
      <div className="App">
        <h1>家計簿一覧</h1>
        <KakeiboTable />
      </div>
    </div>
  );
};

export default Dashboard;
