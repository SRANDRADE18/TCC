import './carrinho.scss';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Location from '../../../components/loacaldot/local';

import Rodape from '../../../components/Rodape/rodape';
import Header from '../../../components/Header/header';
import Products from '../compra test carrinho/Products'
import Cart from '../../../components/carrinhoT/car';
import Provider from '../../../context/Provider';
import LandingPage from '../landingpage/App';

export default function Carrinho() {

  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
      <Rodape />
    </Provider>
  )


}