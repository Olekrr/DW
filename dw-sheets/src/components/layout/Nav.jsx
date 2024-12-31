import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Guild Raids</Link>
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
              <Link className="nav-link" to="/login">Editor Login</Link>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" disabled>Molten Core</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" disabled>Blackwing Lair</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" disabled>Ahn'Qiraj</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" disabled>Naxxramas</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
