import React, { useEffect, useContext } from 'react';

import './Produtos.scss';
import fetchProducts from '../api/fetchProducts';
import ProductCard from './ProductCard/ProductCard';

import AppContext from '../../../../context/AppContext';

export default function Products() {

  const { products, setProducts, } = useContext (AppContext);
  

  useEffect(() => {
    fetchProducts('Tenis vegano').then((response) => {
      setProducts(response);
      
    });
  }, );

  return (
     (
      <section className="products container">
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
      </section>
    )
    
  );
}