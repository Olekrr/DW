import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Guild Raids</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/editor-login">Editor Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/molten-core">Molten Core</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blackwing-lair">Blackwing Lair</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ahn-qiraj">Ahn'Qiraj</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/naxxramas">Naxxramas</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
