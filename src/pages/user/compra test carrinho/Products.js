import './Products.scss';

import React, { useEffect, useContext } from 'react';

import './Products.scss';
import fetchProducts from '../compra test carrinho/api/fetchProducts';
import ProductCard from './ProductCard/ProductCard';

import AppContext from '../../../context/AppContext';

export default function Products() {

  const { products, setProducts, } = useContext(AppContext);
  

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
    });
  }, []);

  return (
     (
      <section className="products container">
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
      </section>
    )
    
  );
}

