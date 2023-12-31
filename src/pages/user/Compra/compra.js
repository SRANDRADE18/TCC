import './compra.scss';

import Rodape from '../../../components/Rodape/rodape';
import Header from '../../../components/Header/header';
import Products from '../compra test carrinho/Products'
import Cart from '../../../components/carrinhoT/car';
import Provider from '../../../context/Provider';
import LandingPage from '../landingpage/App';
import ProductCard from '../compra test carrinho/ProductCard/ProductCard';


export default function Carrinho() {

  return (
    <Provider>
      <Header />
      <Products />
      <ProductCard/>
      <Cart />
      <Rodape />
    </Provider>
  )


}