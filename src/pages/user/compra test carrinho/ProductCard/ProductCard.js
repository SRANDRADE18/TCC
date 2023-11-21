import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';

import './ProductCard.scss';
import formatCurrency from '../../../../utils/formatCurrency';

import AppContext from '../../../../context/AppContext';


export default function ProductCard({ data }) {
  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => setCartItems([...cartItems, data]);

  function BTcarrinho() {
    window.location.href = "http://localhost:3000/comprapt2";
  }


  return (
    <section className="product-card">

      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card__image"
      />


      <div className="card__infos">

      

        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>

        <h2 className="card__title">{title}</h2>

        <button onClick={BTcarrinho}>Compra <BsFillCartPlusFill /></button>
        

      </div>

      <button
          type="button"
          className="button__add-cart"
          onClick={handleAddCart}
        >
          <BsFillCartPlusFill />
        </button>

    </section>
  );
}



ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;