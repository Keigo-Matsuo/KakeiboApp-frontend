import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/login/LoginForm';
import Sidebar from "./components/sidebar/Sidebar";
import Top from './components/top/Top';
import KakeiboForm from './components/kakeibo_Form/KakeiboForm';
import NextTargetForm from './components/target_Form/NextTargetForm';

import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
      </Routes>

      {isLoggedIn && <Sidebar toggleAccordion={toggleAccordion} isAccordionOpen={isAccordionOpen} />}

      
      <div style={{ marginLeft: '250px', padding: '20px' }}>
        <Routes>
          <Route path="/home" element= {<Top />} />
          <Route path="/record" element={<KakeiboForm />} />
          <Route path="/nextTarget" element={<NextTargetForm />} />
          {/* <Route path="/settings/category" element={<CategorySettings />} /> */}
          {/* <Route path="/settings/user" element={<UserSettings />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;