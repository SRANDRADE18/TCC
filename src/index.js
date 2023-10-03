import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPages from './user/landingpage/App.js';
import Compra from './user/Compra/compra.js'
import Criar_conta from './user/Criar_conta/criar_conta';
import Telalogin from './user/Login/login';
import UltimoPedido from './user/Minha_Conta_Ultimo_Pedido/ultimo_pedido';
import Comprapt2 from './user/Compra_PT2/compra_pt2';
import MeusDados from './user/Meus_Dados/dados';
import Loginadm from './user/LoginADM/loginadm';
import Admpage from './ADM/AdmPage/adm.js';
import Admaddproduto from './ADM/AdmADDProduto/admProdutoadd.js';
import Filtraproduto from './ADM/ADMFiltrarProduto/filtrar.js';
import Carrinho from './user/Carrinho/carrinho';
import Header from './components/Header/header';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='' element={<LandingPages/>}/>
    <Route path='/compra' element={<Compra/>}/>
    <Route path='/Criar_Conta' element={<Criar_conta/>}/>
    <Route path='/Login' element={<Telalogin/>}/>
    <Route path='/UltimoPedido' element={<UltimoPedido/>}/>
    <Route path='/compra_pt2' element={<Comprapt2/>}/>
    <Route path='/MeusDados' element={<MeusDados/>}/>
    <Route path='/LoginADM' element={<Loginadm/>}/>
    <Route path='/Admpage' element={<Admpage/>}/>
    <Route path='/Adicionar/Produto' element={<Admaddproduto/>}/>
    <Route path='/Filtrarproduto' element={<Filtraproduto/>}/>
    <Route path='/Carrinho' element={<Carrinho/>}/>
    <Route path='/header' element={<Header/>}/>
  </Routes>
 </BrowserRouter>
</React.StrictMode>
);
