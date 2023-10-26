import './compra.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import Header from '../../../components/Header/header.js';
import Rodape from '../../../components/Rodape/rodape.js';

import InputMask from "react-input-mask";
import { motion } from 'framer-motion';

import formatCurrency from '../../../utils/formatCurrency';
import AppContext from '../../../context/AppContext';

import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';


export default function Compra(data) {

  function CheckButton() {
    const [isSelected, setIsSelected] = useState(false);

    const toggleSelection = () => {
      setIsSelected(!isSelected);
    };
  }

  const [minpreco, setMinpreco] = useState(0)

  const [maxpreco, setMaxpreco] = useState(1500)
//////////////////////////
  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => setCartItems([ ...cartItems, data]);
//////////////////////////

  return (
    <div className='Pagina-compra'>
      <Header />


      <div className='Produtos-compra'>

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
                <input type="checkbox"/>
                  <span class="checkmark"></span>
              </label>
            </div>

          </div>

        </div>


        <div className='Shoop-Vgn'>

          <div className='Shoop-compra'>

            <a href='http:./localhost:3000/compra_pt2'>

              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src="./assets/images/tenis/Tenis Rosa.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Tênis Vegano Shoes Sport Vegan Sweet Rose</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$249,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>

            </a>

            <a href='http:./localhost:3000/compra_pt2'>
              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src="./assets/images/tenis_vegano_shoes_esportivo_preto_ 3.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Tênis Vegano Shoes Rocket Sport Preto</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$249,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>
            </a>


            <a href='http:./localhost:3000/compra_pt2'>
              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src=".././assets/images/tenis_vegano_shoes_esportivo_preto_ 3.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Tenis Vegano Shoes Easeful Preto</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$249,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>
            </a>

            <a href='http:./localhost:3000/compra_pt2'>


              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src="./assets/images/tenis/Tenis_preto_laranja.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Tênis Vegano Shoes Strong Boost Vegan Laranja</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$249,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>
            </a>

            <a href='http:./localhost:3000/compra_pt2'>

              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src="./assets/images/tenis/Sapatilha.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Sapatilha Vegano Shoes Aquatic Vegan</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$249,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>

            </a>

            <a href='http:./localhost:3000/compra_pt2'>


              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src="./assets/images/tenis/tenis_vegano_shoes_esportivo_preto_ 3.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Tênis Vegano Shoes Sock coral</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$249,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>

            </a>

            <a href='http:./localhost:3000/compra_pt2'>

              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src="./assets/images/tenis/Tenis_galáxia.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Bota Vegano Shoes Naturale Galáxia</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$249,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>

            </a>

            <a href='http:./localhost:3000/compra_pt2'>
              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src="./assets/images/tenis/tenis_vegano_shoes_esportivo_preto_ 4.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Bota Vegano Shoes Naturale Premium Café Noir</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$249,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>
            </a>

            <a href='http:./localhost:3000/compra_pt2'>

              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src="./assets/images/tenis/tennis_saara.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Bota Vegano Shoes Saara Areia</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$249,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>

            </a>

            <a href='http:./localhost:3000/compra_pt2'>
              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src="./assets/images/tenis/tennis_Camara.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Tênis Vegano Shoes Street Preto/Câmara de ar</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$349,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>
            </a>

            <a href='http:./localhost:3000/compra_pt2'>

              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src="./assets/images/tenis/tenis_vegano_shoes_esportivo_Havana_ 5.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Tênis Vegano Shoes Street Havana</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$99,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>

            </a>

            <a href='http:./localhost:3000/compra_pt2'>

              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src="./assets/images/tenis/tennis_Ultimo.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Tênis casual Vegano Shoes Street Style Verde Musgo</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$249,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>

            </a>


          </div>

        </div>

      </div >


      <Rodape />



    </div >

  )

}