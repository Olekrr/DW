import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Layout from './components/layout/Layout';
import Login from './components/authentication/Login';
import Admin from './components/admin/Admin';
import LandingPage from './components/landing/LandingPage';
import RaidAssignments from './components/admin/RaidAssignments';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <DndProvider backend={HTML5Backend}>
    <Router>
      <Layout isLoggedIn={isLoggedIn} onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/raid-assignments" element={<RaidAssignments />} />
        </Routes>
      </Layout>
    </Router>
    </DndProvider>
  );
};

export default App;
