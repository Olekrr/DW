import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './components/authentication/Login';
import Admin from './components/admin/Admin';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<div>Welcome to the Raid Management Tool!</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          {/* Add additional routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
