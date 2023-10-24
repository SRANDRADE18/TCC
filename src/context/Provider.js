import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';


export default function Provider({ children }) {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
 

  const value = {
    products,
    setProducts,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
  };

  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;