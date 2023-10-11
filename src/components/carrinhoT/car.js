import React from 'react';
import './Cart.scss';

import {AiOutlineShoppingCart} from 'react-icons/ai';

export default function CartButton() {

  
    return (
      <button type='button' className='cart-button'>
        <AiOutlineShoppingCart/>
        <span className='cart-status'>1</span>
      </button>
    )
  

}



