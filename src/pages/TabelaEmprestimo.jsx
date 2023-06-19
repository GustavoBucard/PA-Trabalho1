import React, { useState } from 'react';

import Tabela from "../components/Tabela";
import Navbar from '../components/Navbar';

const TabelaEmprestimo = () => {
  const headers = ["ID", "Data", "Status", "Quantidade", "Usuario", "Item"]
  const linhas = []
  return(
    <>
      <Navbar></Navbar>
      <h1>Tabela de Emprestimos</h1>
      <div className='card p-3'>
      <Tabela headers={headers} linhas={linhas}></Tabela>
      </div>
   </>
  )
}

export default TabelaEmprestimo;