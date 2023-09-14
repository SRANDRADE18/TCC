import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPages from './landingpage/App';
import Compra from './Compra/compra.js'
import Criar_conta from './Criar_conta/criar_conta';
import Tela_login from './Login/login';
import UltimoPedido from './Minha_Conta_Ultimo_Pedido/ultimo_pedido';
import Comprapt2 from './Compra_PT2/compra_pt2';
import MeusDados from './Meus_Dados/dados';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='' element={<LandingPages/>}/>
    <Route path='/compra' element={<Compra/>}/>
    <Route path='/Criar_Conta' element={<Criar_conta/>}/>
    <Route path='/Tela_Login' element={<Tela_login/>}/>
    <Route path='/UltimoPedido' element={<UltimoPedido/>}/>
    <Route path='/compra_pt2' element={<Comprapt2/>}/>
    <Route path='/MeusDados' element={<MeusDados/>}/>
  </Routes>
 </BrowserRouter>
</React.StrictMode>
);
