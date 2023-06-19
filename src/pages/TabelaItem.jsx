import React, { useState } from 'react';

import Tabela from "../components/Tabela";
import Navbar from '../components/Navbar';

const TabelaItem = () => {
  const headers = ["ID", "Nome", "Categoria", "Detalhes", "Quantidade"]
  const linhas = [];

  return(
    <>
      <Navbar></Navbar>
      <h1>Tabela de Itens</h1>
      <div className='card p-3'>
      <Tabela headers={headers} linhas={linhas}></Tabela>
      </div>
    </>
  )
}

export default TabelaItem;