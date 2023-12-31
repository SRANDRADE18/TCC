import { Link } from "react-router-dom";

import axios from "axios";

import { useEffect, useState, useRef } from "react";

import "./App.scss";

import Rodape from "../../../components/Rodape/rodape";

import Header from "../../../components/Header/header";

import formatCurrency from "../../../utils/formatCurrency";

import { BsFillCartPlusFill } from "react-icons/bs";

import React, { useContext } from "react";

import AppContext from "../../../context/AppContext.js";

import propTypes from "prop-types";

import fetchProducts from '../compra test carrinho/api/apitestProducts.js';

import ProductCard from '../compra test carrinho/ProductCard/ProductCard';

import { useNavigate, useParams } from 'react-router-dom';

import "pure-react-carousel/dist/react-carousel.es.css";


import storage from 'local-storage';


import { motion } from "framer-motion";



export default function LandingPage({ data }) {

  //////////////////////////////////



  const { cartItems, setCartItems } = useContext(AppContext);
  const [userInfo, setUserInfo] = useState('');
  const [produtos, setProdutos] = useState([]);
  const [produtoImagem, setProdutoImagem] = useState([]);


  const imagemUrl = `http://129.148.42.252:5021`;

  console.log(imagemUrl);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://129.148.42.252:5021/produto');
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);



  useEffect((id) => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://129.148.42.252:5021/produto/img/${id}');
        setProdutoImagem(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);


  async function BuscarInfos(id) {

    try {
      const response = await axios.get(`http://129.148.42.252:5021/produto/img/${id}`);
      const data = response.data;

      setProdutoImagem(data.ds_imagem1);
      setProdutoImagem(data.ds_imagem2);
      setProdutoImagem(data.ds_imagem3);
      setProdutoImagem(data.ds_imagem4);


    } catch (error) {
      console.error('Erro ao buscar imagem do produto ${id} :', error);
    }

  }

  useEffect(() => {
    BuscarInfos();
    if (!storage('user-info')) {
      setUserInfo('');
    } else {
      setUserInfo(storage('user-info'));
    }
  }, []);

  const handleAddCart = () => setCartItems([...cartItems, data]);

  function BTcarrinho() {
    window.location.href = "http://129.148.42.252:3021/compra";
  }




  //////////////////////////////////////

  const hue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  const corousel = useRef(null);


  const esq = (e) => {
    e.preventDefault();

    corousel.current.scrollLeft -= corousel.current.offsetWidth;
  };

  const dir = (e) => {
    e.preventDefault();

    corousel.current.scrollLeft += corousel.current.offsetWidth;
  };

  return (
    <div className="landing-Page">
      <Header />

      <div className="Promo-tenis">
        <div className="texto">
          <h1>Produtos 100% VEGANOS</h1>
          <p>
            Todos os produtos VGN Shoes são fabricados a partir de
            matérias-primas totalmente isentas de origem animal ou qualquer tipo
            de teste em animais. A VG Shoes tem o cuidado e responsabilidade de
            rastrear todo material que compõe os produtos, esse procedimento
            garante que nenhum tipo de borracha, poliuretano, cola, tecido,
            tintas ou até mesmo fôrmas e matrizes utilizadas na fabricação dos
            componentes tenham qualquer composição de origem animal. Além disso,
            existe a preocupação com o meio ambiente, por isso, prioriza-se o
            uso de materiais reciclados.
          </p>
        </div>

        <div className="plataforma">
          <div className="Quadrados">



            <img
              className="quadradinhos"
              src="/assets/images/landing-page/qudrado.png"
            />
            <img
              className="quadradinhos"
              src="/assets/images/landing-page/qudrado.png"
            />
            <img
              className="quadradinhos"
              src="/assets/images/landing-page/qudrado.png"
            />
            <img
              className="quadradinhos"
              src="/assets/images/landing-page/qudrado.png"
            />
            <img
              className="quadradinhos"
              src="/assets/images/landing-page/qudrado.png"
            />
            <img
              className="quadradinhos"
              src="/assets/images/landing-page/qudrado.png"
            />
          </div>

          <img
            className="Tenis-Parado"
            src="/assets/images/landing-page/tenis na plataforma.png"
          ></img>
        </div>
      </div>


      <div className="produtos">
        <motion.button
          onClick={esq}
          initial={{ scale: 1, boxShadow: "none" }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 5px #000" }}
          whileTap={{ scale: 0.9 }}
        >
          <img src="/assets/icons/chevron.png" alt="próximo" />
        </motion.button>

        <div className="carousel" ref={corousel}>


          {produtos.map((produto) => (

            <section className="products-container">

              <BsFillCartPlusFill className='button__add-cart' onClick={handleAddCart} />


              <div className="info-compra">
                <img id="img-produto" src="/assets/images/tenis/tenis_vegano_shoes_easeful_preto.png" />

                <h2>{produto.nm_produto}</h2>
                <h3>{produto.vl_preco}</h3>

                

                <div className="cart-resume"> 

                  <a className='finalizar' onClick={BTcarrinho}>

                    Comprar

                  </a>

                

                </div>

              </div>


            </section>

          ))}


           {produtos.map((produto) => (

            <section className="products-container">

              <BsFillCartPlusFill className='button__add-cart' onClick={handleAddCart} />


              <div className="info-compra">
                <img id="img-produto" src="/assets/images/tenis/tenis_vegano_shoes_easeful_preto.png" />

                <h2>{produto.nm_produto}</h2>
                <h3>{produto.vl_preco}</h3>

                

                <div className="cart-resume"> 

                  <a className='finalizar' onClick={BTcarrinho}>

                    Comprar

                  </a>

                

                </div>

              </div>


            </section>

          ))}

           {produtos.map((produto) => (

            <section className="products-container">

              <BsFillCartPlusFill className='button__add-cart' onClick={handleAddCart} />


              <div className="info-compra">
                <img id="img-produto" src="/assets/images/tenis/tenis_vegano_shoes_easeful_preto.png" />

                <h2>{produto.nm_produto}</h2>
                <h3>{produto.vl_preco}</h3>

                

                <div className="cart-resume"> 

                  <a className='finalizar' onClick={BTcarrinho}>

                    Comprar

                  </a>

                

                </div>

              </div>


            </section>

          ))}

           {produtos.map((produto) => (

            <section className="products-container">

              <BsFillCartPlusFill className='button__add-cart' onClick={handleAddCart} />


              <div className="info-compra">
                <img id="img-produto" src="/assets/images/tenis/tenis_vegano_shoes_easeful_preto.png" />

                <h2>{produto.nm_produto}</h2>
                <h3>{produto.vl_preco}</h3>

                

                <div className="cart-resume"> 

                  <a className='finalizar' onClick={BTcarrinho}>

                    Comprar

                  </a>

                

                </div>

              </div>


            </section>

          ))}


           {produtos.map((produto) => (

            <section className="products-container">

              <BsFillCartPlusFill className='button__add-cart' onClick={handleAddCart} />


              <div className="info-compra">
                <img id="img-produto" src="/assets/images/tenis/tenis_vegano_shoes_easeful_preto.png" />

                <h2>{produto.nm_produto}</h2>
                <h3>{produto.vl_preco}</h3>

                

                <div className="cart-resume"> 

                  <a className='finalizar' onClick={BTcarrinho}>

                    Comprar

                  </a>

                

                </div>

              </div>


            </section>

          ))}

           {produtos.map((produto) => (

            <section className="products-container">

              <BsFillCartPlusFill className='button__add-cart' onClick={handleAddCart} />


              <div className="info-compra">
                <img id="img-produto" src="/assets/images/tenis/tenis_vegano_shoes_easeful_preto.png" />

                <h2>{produto.nm_produto}</h2>
                <h3>{produto.vl_preco}</h3>

                

                <div className="cart-resume"> 

                  <a className='finalizar' onClick={BTcarrinho}>

                    Comprar

                  </a>

                

                </div>

              </div>


            </section>

          ))}


{produtos.map((produto) => (

<section className="products-container">

  <BsFillCartPlusFill className='button__add-cart' onClick={handleAddCart} />


  <div className="info-compra">
    <img id="img-produto" src="/assets/images/tenis/tenis_vegano_shoes_easeful_preto.png" />

    <h2>{produto.nm_produto}</h2>
    <h3>{produto.vl_preco}</h3>

    

    <div className="cart-resume"> 

      <a className='finalizar' onClick={BTcarrinho}>

        Comprar

      </a>

    

    </div>

  </div>


</section>

))}
 {produtos.map((produto) => (

<section className="products-container">

  <BsFillCartPlusFill className='button__add-cart' onClick={handleAddCart} />


  <div className="info-compra">
    <img id="img-produto" src="/assets/images/tenis/tenis_vegano_shoes_easeful_preto.png" />

    <h2>{produto.nm_produto}</h2>
    <h3>{produto.vl_preco}</h3>

    

    <div className="cart-resume"> 

      <a className='finalizar' onClick={BTcarrinho}>

        Comprar

      </a>

    

    </div>

  </div>


</section>

))}


{produtos.map((produto) => (

<section className="products-container">

  <BsFillCartPlusFill className='button__add-cart' onClick={handleAddCart} />


  <div className="info-compra">
    <img id="img-produto" src="/assets/images/tenis/tenis_vegano_shoes_easeful_preto.png" />

    <h2>{produto.nm_produto}</h2>
    <h3>{produto.vl_preco}</h3>

    

    <div className="cart-resume"> 

      <a className='finalizar' onClick={BTcarrinho}>

        Comprar

      </a>

    

    </div>

  </div>


</section>

))}

{produtos.map((produto) => (

<section className="products-container">

  <BsFillCartPlusFill className='button__add-cart' onClick={handleAddCart} />


  <div className="info-compra">
    <img id="img-produto" src="/assets/images/tenis/tenis_vegano_shoes_easeful_preto.png" />

    <h2>{produto.nm_produto}</h2>
    <h3>{produto.vl_preco}</h3>

    

    <div className="cart-resume"> 

      <a className='finalizar' onClick={BTcarrinho}>

        Comprar

      </a>

    

    </div>

  </div>


</section>

))}
 {produtos.map((produto) => (

<section className="products-container">

  <BsFillCartPlusFill className='button__add-cart' onClick={handleAddCart} />


  <div className="info-compra">
    <img id="img-produto" src="/assets/images/tenis/tenis_vegano_shoes_easeful_preto.png" />

    <h2>{produto.nm_produto}</h2>
    <h3>{produto.vl_preco}</h3>

    

    <div className="cart-resume"> 

      <a className='finalizar' onClick={BTcarrinho}>

        Comprar

      </a>

    

    </div>

  </div>


</section>

))}
 {produtos.map((produto) => (

<section className="products-container">

  <BsFillCartPlusFill className='button__add-cart' onClick={handleAddCart} />


  <div className="info-compra">
    <img id="img-produto" src="/assets/images/tenis/tenis_vegano_shoes_easeful_preto.png" />

    <h2>{produto.nm_produto}</h2>
    <h3>{produto.vl_preco}</h3>

    

    <div className="cart-resume"> 

      <a className='finalizar' onClick={BTcarrinho}>

        Comprar

      </a>

    

    </div>

  </div>


</section>

))}
 {produtos.map((produto) => (

<section className="products-container">

  <BsFillCartPlusFill className='button__add-cart' onClick={handleAddCart} />


  <div className="info-compra">
    <img id="img-produto" src="/assets/images/tenis/tenis_vegano_shoes_easeful_preto.png" />

    <h2>{produto.nm_produto}</h2>
    <h3>{produto.vl_preco}</h3>

    

    <div className="cart-resume"> 

      <a className='finalizar' onClick={BTcarrinho}>

        Comprar

      </a>

    

    </div>

  </div>


</section>

))}
 {produtos.map((produto) => (

            <section className="products-container">

              <BsFillCartPlusFill className='button__add-cart' onClick={handleAddCart} />


              <div className="info-compra">
                <img id="img-produto" src="/assets/images/tenis/tenis_vegano_shoes_easeful_preto.png" />

                <h2>{produto.nm_produto}</h2>
                <h3>{produto.vl_preco}</h3>

                

                <div className="cart-resume"> 

                  <a className='finalizar' onClick={BTcarrinho}>

                    Comprar

                  </a>

                

                </div>

              </div>


            </section>

          ))}
           {produtos.map((produto) => (

<section className="products-container">

  <BsFillCartPlusFill className='button__add-cart' onClick={handleAddCart} />


  <div className="info-compra">
    <img id="img-produto" src="/assets/images/tenis/tenis_vegano_shoes_easeful_preto.png" />

    <h2>{produto.nm_produto}</h2>
    <h3>{produto.vl_preco}</h3>

    

    <div className="cart-resume"> 

      <a className='finalizar' onClick={BTcarrinho}>

        Comprar

      </a>

    

    </div>

  </div>


</section>

))}

{produtos.map((produto) => (

<section className="products-container">

  <BsFillCartPlusFill className='button__add-cart' onClick={handleAddCart} />


  <div className="info-compra">
    <img id="img-produto" src="/assets/images/tenis/tenis_vegano_shoes_easeful_preto.png" />

    <h2>{produto.nm_produto}</h2>
    <h3>{produto.vl_preco}</h3>

    

    <div className="cart-resume"> 

      <a className='finalizar' onClick={BTcarrinho}>

        Comprar

      </a>

    

    </div>

  </div>


</section>

))}


        </div>

        <motion.button
          onClick={dir}
          initial={{ scale: 1, boxShadow: "none", rotate: 180 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 5px #000" }}
          whileTap={{ scale: 0.9 }}
        >
          <img src="/assets/icons/chevron.png" alt="próximo" />
        </motion.button>
      </div>

      <div className="Promo-tenis01">
        <img
          className="tenis-Preto"
          src="/assets/images/tenis/tenis_vegano_shoes_easeful_preto.png"
        ></img>
        <div className="promo-tenis-text">
          <h1>
            {" "}
            <label>
              ESTILO <br></br>
            </label>{" "}
            INOVADOR
          </h1>
          <p>
            {" "}
            Os novos tênis veganos combinam design moderno e contemporâneo, sem
            comprometer os valores éticos. Eles seguem as últimas tendências da
            moda, com uma variedade de estilos, cores e materiais que atendem
            aos gostos e preferências de todas as pessoas
          </p>
        </div>
      </div>

      <div className="Tenis-Branco">
        <div className="Textos-103">
          <div className="Texto1">
            <h1>
              1. Se você se preocupa com os direitos dos animais e deseja evitar
              o uso de produtos derivados de animais, um tênis vegano é uma
              escolha adequada.
            </h1>
          </div>

          <div className="Texto3">
            <h1>
              3. Evitar substâncias tóxicas: Muitos calçados de couro são
              tratados com produtos químicos, como corantes e solventes, que
              podem ser prejudiciais ao meio ambiente e à saúde humana.
            </h1>
          </div>
        </div>

        <img src="/assets/images/landing-Page/Tenis-Branco.png"></img>

        <div className="Texto1">
          <h1>
            2.Sustentabilidade ambiental: Os tênis veganos são geralmente
            fabricados com materiais sintéticos e alternativos, como poliéster
            reciclado, borracha natural, lona e microfibras.
          </h1>
        </div>
      </div>

      <Rodape />
    </div>
  );
}


LandingPage.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
