import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../paginas/home/home';
import Login from '../paginas/login/login';
import Sobre from '../paginas/sobre/sobre';
import Lista from '../paginas/lista/Lista';
import { ProvedorDeAutenticacao } from '../providers/autenticar';
import { ChecarLogin } from '../contexts/checarLogin';
import { ExigirLogin } from '../contexts/exigirLogin';

const Rotas = () => {
  return (
<<<<<<< HEAD
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sobre" element={<Sobre />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/lista" element={<Lista />} />
      </Routes>
    </BrowserRouter>
=======
    <ProvedorDeAutenticacao>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/sobre' element={<Sobre />} />
          <Route exact path='/login' element={<ChecarLogin><Login /></ChecarLogin>} />
            <Route exact path='/lista' element={<ExigirLogin><Lista /></ExigirLogin>} />
        </Routes>
      </BrowserRouter>
    </ProvedorDeAutenticacao>
>>>>>>> fe496d964e5956b9744ac1ecf82299bdb09993fe
  );
};
export default Rotas;
