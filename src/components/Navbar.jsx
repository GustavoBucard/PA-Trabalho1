import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Home</Link>
        <Link className="navbar-brand" to="/tabela-usuario">Usuário</Link>
        <Link className="navbar-brand" to="/tabela-item">Item</Link>
        <Link className="navbar-brand" to="/tabela-emprestimo">Emprestimo</Link>
    </nav>
  );
};

export default Navbar;
