import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPages from './landingpage/App';
import Compra from './Compra/compra.js'
import Criar_conta from './Criar_conta/criar_conta';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='' element={<LandingPages/>}/>
    <Route path='/compra' element={<Compra/>}/>
    <Route path='/Criar_Conta' element={<Criar_conta/>}/>
  </Routes>
 </BrowserRouter>
</React.StrictMode>
);
