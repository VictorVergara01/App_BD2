import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './img/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Coloca aquí tu logotipo */}
        <Link to="/" className="navbar-brand">
        <img src={logo} alt="Logo de la aplicación" />
        </Link>
      </div>
      <ul className="navbar-nav">
        {/* Agrega aquí las opciones de navegación */}
        <li className="nav-item">
          <Link to="/perfil" className="nav-link">Perfil</Link>
        </li>
        <li className="nav-item">
          <Link to="/configuracion" className="nav-link">Configuración</Link>
        </li>
        <li className="nav-item">
        <Link to="/login" className="nav-link">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
