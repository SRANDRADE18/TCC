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
import Loginadm from './LoginADM/loginadm';
import Admpage from './AdmPage/adm';
import Admaddproduto from './AdmADDProduto/admProdutoadd';
import Filtraproduto from './ADMFiltrarProduto/filtrar';
import Carrinho from './Carrinho/carrinho';





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
    <Route path='/LoginADM' element={<Loginadm/>}/>
    <Route path='/Admpage' element={<Admpage/>}/>
    <Route path='/Adicionar/Produto' element={<Admaddproduto/>}/>
    <Route path='/Filtrarproduto' element={<Filtraproduto/>}/>
    <Route path='/Carrinho' element={<Carrinho/>}/>
  </Routes>
 </BrowserRouter>
</React.StrictMode>
);
