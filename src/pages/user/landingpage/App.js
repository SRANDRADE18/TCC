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

import fetchProducts from '../compra test carrinho/api/fetchProducts';

import ProductCard from '../compra test carrinho/ProductCard/ProductCard';



import "pure-react-carousel/dist/react-carousel.es.css";



import { motion } from "framer-motion";



export default function LandingPage() {

  //////////////////////////////////



  const { products, setProducts } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('Tenis Veganos');
  const [quantity, setQuantity] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts(searchTerm, quantity).then((response) => {
      setFilteredProducts(response);
    });
  }, [searchTerm, quantity]);



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

          
          {hue.map((item) => (


            <section className="products-container">
              <a href="/compra">

                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
                
              </a>

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
