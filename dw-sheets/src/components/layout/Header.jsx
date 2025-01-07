import React from 'react';
import NavBar from './Nav';

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header>
      <NavBar isLoggedIn={isLoggedIn} onLogout={onLogout} />
    </header>
  );
};

export default Header;
