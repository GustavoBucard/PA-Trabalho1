import React, { useState } from 'react';

import Tabela from "../components/Tabela";
import Navbar from '../components/Navbar';

const TabelaUsuario = () => {
  const headers = ["ID", "Nome", "Email"]
  const linhas = []

  return(
    <>
      <Navbar></Navbar>
      <h1>Tabela de Usuários</h1>
      <div className='card p-3'>
      <Tabela headers={headers} linhas={linhas}></Tabela>
      </div>
    </>
  )
}

export default TabelaUsuario;