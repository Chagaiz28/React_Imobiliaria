import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <div className="header-content">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo da Imobiliária" />
      </div>
      <h1>Imobiliária Exemplo</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/properties">Propriedades</Link>
      </nav>
    </div>
  </header>
);

export default Header;