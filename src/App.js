import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./components/sidebar/Sidebar";
import { LineGraph } from "./components/graph/Line";
import { PieGraph } from './components/graph/Pie';
import KakeiboTable from './components/kakeibo_Table/KakeiboTable';
import KakeiboForm from './components/kakeibo_Form/KakeiboForm';

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="Sidebar">
        <Sidebar />
      </div>

      <div style={{ marginLeft: '250px', padding: '20px' }}>
        <Routes>
          <Route path="/" element={
            <div>
              <section style={{ display: 'flex', alignItems: 'center' }}>
                <div className="App" style={{ width: '50%' }}>
                  <LineGraph />
                </div>
                <div className="App" style={{ width: '50%' }}>
                  <PieGraph />
                </div>
              </section>
              <div className="App">
                <h1>家計簿一覧</h1>
                <KakeiboTable />
              </div>
            </div>
          } />
          <Route path="/record" element={<KakeiboForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
