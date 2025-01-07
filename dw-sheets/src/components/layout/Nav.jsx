import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = ({ isLoggedIn, onLogout }) => {
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
            {!isLoggedIn ? (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Editor Login</Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">Admin Control Panel</Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-link nav-link"
                    style={{ textDecoration: 'none' }}
                    onClick={onLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/molten-core">Molten Core</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blackwing-lair">Blackwing Lair</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ahn-qiraj">Ahn'Qiraj</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/naxxramas">Naxxramas</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
