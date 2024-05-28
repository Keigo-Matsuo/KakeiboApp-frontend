import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./components/sidebar/Sidebar";
import Top from './components/top/Top';
import KakeiboForm from './components/kakeibo_Form/KakeiboForm';
import NextTargetForm from './components/target_Form/NextTargetForm';

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="Sidebar">
        <Sidebar />
      </div>

      <div style={{ marginLeft: '250px', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/record" element={<KakeiboForm />} />
          <Route path="/nextTarget" element={<NextTargetForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
