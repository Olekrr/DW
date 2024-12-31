import React from 'react';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container mt-4">
        <h1>Welcome to the Guild Raid Manager</h1>
        <p>Choose a raid from the navigation menu above to get started.</p>
      </div>
    </div>
  );
}

export default App;
