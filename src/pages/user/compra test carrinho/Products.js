import './Products.scss';

import { useEffect, useContext } from 'react';



import './Products.scss';
import fetchProducts from '../compra test carrinho/api/apitestProducts';
import ProductCard from './ProductCard/ProductCard';

import AppContext from '../../../context/AppContext';


import InputMask from "react-input-mask";

import { motion } from 'framer-motion';
import { useState } from 'react';


export default function Products() {

  const [minpreco, setMinpreco] = useState(0)

  const [maxpreco, setMaxpreco] = useState(1500)

  const { products, setProducts, } = useContext(AppContext);

  useEffect(() => {
    const quantity = 24;
    fetchProducts('Tenis Vegano', quantity).then((response) => {
      setProducts(response);

    });
  }, []);

  return (

    <div className='Compra-produtos'>

      <div className='produtos'>


        <div className='Compra-Filtros'>

          <div className='Filtro-Preco' >

            <h1>PREÇOS</h1>

            <div className='center'>
              <div className='preco' >

                <motion.input
                  initial={{ boxShadow: 'none' }}
                  transition={{ duration: 0.5 }}
                  whileFocus={{ boxShadow: '0px 0px 10px rgba(100, 100, 100, 0.60)' }}
                  type='text' min={0} max={1500} value={minpreco} onChange={(e) => setMinpreco(e.target.value)} />
                <motion.input
                  initial={{ boxShadow: 'none' }}
                  transition={{ duration: 0.5 }}
                  whileFocus={{ boxShadow: '0px 0px 16px rgba(100, 100, 100, 0.60)' }}
                  type='text' min={0} max={1500} value={maxpreco} onChange={(e) => setMaxpreco(e.target.value)} />

              </div>

              <div className='Filter-Preco'>
                <input class="filter_range" type="range" min={0} max={1500} value={minpreco} onChange={(e) => setMinpreco(e.target.value)} />
                <input class="filter_range" type="range" min={0} max={1500} value={maxpreco} onChange={(e) => setMaxpreco(e.target.value)} />
              </div>
            </div>

          </div>

          <div className='Filtro-Tamanho'>

            <h1>Tamanhos</h1>


            <div class="size-selector">

              <select >
                <option> Tamanho </option>
                <option> 35 </option>
                <option> 36 </option>
                <option> 37 </option>
                <option> 38 </option>
                <option> 39 </option>
                <option> 40 </option>
                <option> 41 </option>
                <option> 42 </option>
                <option> 43 </option>
                <option> 44 </option>
                <option> 45 </option>

              </select>

            </div>


          </div>

          <div className='Filtro-Genero'>

            <h1>Generos</h1>

            <div className='Filt-Genero01'>

              <select>

                <option className='opitin'>Generos</option >

                <option className='opitin'>Masculino</option >

                <option className='opitin'>Feminino</option >

                <option className='opitin'>Unisex</option>



              </select>

            </div>

          </div>


          <div className='Filtro-Genero'>

            <h1>Modelos</h1>

            <div className='Filt-Genero01'>

              <select>

                <option> Modelos </option>
                <option> Sportivos </option>
                <option> Botas </option>
                <option> Casual </option>

              </select>

            </div>

          </div>

          <div className='Filtro-Genero'>

            <h1>Cores</h1>
            <div className='Filtro-Cor'>

              <motion.div
                initial={{ border: 'none', scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.2, boxShadow: '0px 0px 5px #000' }}
                whileTap={{ scale: 0.8 }}
                className='Preto'></motion.div>

              <motion.div
                initial={{ border: 'none', scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.2, boxShadow: '0px 0px 5px #000' }}
                whileTap={{ scale: 0.8 }}
                className='Roxo' ></motion.div>

              <label class="Rosa">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>

          </div>

        </div>



        <section className="products-container">
          {products.map((product) => (
            <ProductCard key={product.id_produto} data={product} />
          ))}
        </section>

      </div>


    </div>


  );
}

