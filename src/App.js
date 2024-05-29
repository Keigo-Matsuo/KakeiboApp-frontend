import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/login/LoginForm';
import { AuthProvider } from './context/AuthContext';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Sidebar from "./components/sidebar/Sidebar";
import Top from './components/top/Top';
import KakeiboForm from './components/kakeibo_Form/KakeiboForm';
import NextTargetForm from './components/target_Form/NextTargetForm';

import "./App.css";

const App = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <Router>
      <AuthProvider>

        {localStorage.getItem('isLoggedIn') && <Sidebar toggleAccordion={toggleAccordion} isAccordionOpen={isAccordionOpen} />}

        {/* <Routes>
          <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
        </Routes> */}

        <div style={{ marginLeft: '250px', padding: '20px' }}>
          <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />

            <Route path="/home" element={ localStorage.getItem('isLoggedIn') ? <Top /> : <Navigate to="/" /> } />
            <Route path="/record" element={ localStorage.getItem('isLoggedIn') ? <KakeiboForm /> : <Navigate to="/" /> } />
            <Route path="/nextTarget" element={ localStorage.getItem('isLoggedIn') ? <NextTargetForm /> : <Navigate to="/" /> } />
            {/* <Route path="/settings/category" element={ localStorage.getItem('isLoggedIn') ? <CategorySettings /> : <Navigate to="/" /> } />
            <Route path="/settings/user" element={ localStorage.getItem('isLoggedIn') ? <UserSettings /> : <Navigate to="/" /> } /> */}
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;