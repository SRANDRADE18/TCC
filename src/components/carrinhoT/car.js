import React, { useContext } from 'react';

import './Cart.scss';
import CartItem from '../Cartitem/cartitem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';
import { useState } from 'react';
import Carrinho from '../../pages/user/Compra2/carrinho';
import Compra from './../../pages/user/Compra/compra';
import { AiOutlineShoppingCart } from "react-icons/ai";


export default function Cart() {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  

  return (

    <div className='Carrinho-dentro'>
      <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>

      <div className='Voltar'>

        <button
          type="button"
          className="cart-button-voltar"
          onClick={() => setIsCartVisible(!isCartVisible)}
        >
          <AiOutlineShoppingCart />
          {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
        </button>

      </div>

      <div className="cart-items">
        {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}
      </div>

      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}

        <a className='finalizar' href='/Finalizar/compra'>

          Finalizar Compra

        </a>

        <a href="/carrinho/user">

          Vizualizar Carrinho

        </a>
      </div>

    </section>
    </div>

    
  );

}




