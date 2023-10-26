import React, { useContext } from 'react';

import './Cart.scss';
import CartItem from '../Cartitem/cartitem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';
import { useState } from 'react';
import Carrinho from './../../pages/user/Carrinho/carrinho';
import Compra from './../../pages/user/Compra/compra';

export default function Cart() {

  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
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
  );

}




