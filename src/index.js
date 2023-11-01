import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landin from './pages/user/landingpage/App.js';
import Compra from './pages/user/Compra/compra';
import Criarconta from './pages/user/Criar_conta/criar_conta';
import Telalogin from './pages/user/Login/login';
import UltimoPedido from './pages/user/Minha_Conta_Ultimo_Pedido/ultimo_pedido';
import Comprapt2 from './pages/user/Compra_PT2/compra_pt2';
import MeusDados from './pages/user/Meus_Dados/dados';
import Loginadm from './pages/user/LoginADM/loginadm';
import Admpage from './pages/ADM/AdmPage/adm';
import Admaddproduto from './pages/ADM/AdmADDProduto/admProdutoadd';
import Filtraprodutos from './pages/ADM/ADMFiltrarProduto/filtrar';
import Carrinho from './pages/user/Compra2/carrinho';

import Provider from './context/Provider';
import Finalizar from './pages/user/Finalizar/Finalizar';
import Carrinhouser from './pages/user/CarinhoUser/carrinhoUser';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <Routes>
          
          <Route path="/Landin" element={<Landin />} />
          <Route path="/compra" element={<Compra />} />
          <Route path="/Criar/Conta" element={<Criarconta />} />
          <Route path="/Login" element={<Telalogin />} />
          <Route path="/UltimoPedido" element={<UltimoPedido />} />
          <Route path="/comprapt2" element={<Comprapt2 />} />
          <Route path="/MeusDados" element={<MeusDados />} />
          <Route path="/LoginADM" element={<Loginadm />} />
          <Route path="/Admpage" element={<Admpage />} />
          <Route path="/Adicionar/Produto" element={<Admaddproduto />} />
          <Route path="/Filtrarproduto" element={<Filtraprodutos />} />
          <Route path="/Carrinho" element={<Carrinho />} />
         
          <Route path="/Finalizar/compra" element={<Finalizar />} />
          <Route path="/carrinho/user" element={<Carrinhouser />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);