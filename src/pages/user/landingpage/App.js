import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import './App.scss';
import Rodape from '../../../components/Rodape/rodape';
import Header from '../../../components/Header/header';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import Loading from '../../../components/loading/loding';
import { motion } from 'framer-motion';



export default function LandingPage() {

  const corousel = useRef(null)

  function Products() {

    const [loading, setloading] = useState(false)

    useEffect(() => {
      loading(false)
      setloading(false)
    })

  }

  const esq = (e) => {
    e.preventDefault();

    corousel.current.scrollLeft -= corousel.current.offsetWidth;
  }

  const dir = (e) => {
    e.preventDefault();

    corousel.current.scrollLeft += corousel.current.offsetWidth;
  }




  return (

    <div className="landing-Page">



      <Header />

      <div className='Promo-tenis'>

        <div className='texto'>
          <h1>Produtos 100% VEGANOS</h1>
          <p>Todos os produtos VGN Shoes são fabricados a partir de matérias-primas totalmente isentas de origem animal ou qualquer tipo de teste em animais. A VG Shoes tem o cuidado e responsabilidade de rastrear todo material que compõe os produtos, esse procedimento garante que nenhum tipo de borracha, poliuretano, cola, tecido, tintas ou até mesmo fôrmas e matrizes utilizadas na fabricação dos componentes tenham qualquer composição de origem animal. Além disso, existe a preocupação com o meio ambiente, por isso, prioriza-se o uso de materiais reciclados.</p>
        </div>

        <div className='plataforma'>

          <div className='Quadrados'>
            <img className='quadradinhos' src="/assets/images/landing-page/qudrado.png" />
            <img className='quadradinhos' src="/assets/images/landing-page/qudrado.png" />
            <img className='quadradinhos' src="/assets/images/landing-page/qudrado.png" />
            <img className='quadradinhos' src="/assets/images/landing-page/qudrado.png" />
            <img className='quadradinhos' src="/assets/images/landing-page/qudrado.png" />
            <img className='quadradinhos' src="/assets/images/landing-page/qudrado.png" />
          </div>


          <img className='Tenis-Parado' src="/assets/images/landing-page/tenis na plataforma.png"></img>


        </div>
      </div>
      <div className='produtos'>

        <motion.button onClick={esq}
        initial={{boxShadow:'none'}}
        transition={{duration:0.5}}
        whileHover={{scale:1.1, boxShadow:'0px 0px 14px #929292'}}
        whileTap={{scale:0.8}}> <img src='/assets/icons/chevron.png' /> </motion.button>

        <div className='carousel' ref={corousel}>
          <motion.div className='ex'
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>  1</motion.div>

          <motion.div className='ex'
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>2</motion.div>

          <motion.div className='ex'
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>3</motion.div>

          <motion.div className='ex'
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>4</motion.div>

          <motion.div className='ex'
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>5</motion.div>

          <motion.div className='ex'
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>6</motion.div>

          <motion.div className='ex'
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>7</motion.div>

          <motion.div className='ex'
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>8</motion.div>

          <motion.div className='ex'
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>9</motion.div>

          <motion.div className='ex'
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>10</motion.div>

          <motion.div className='ex'
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>11</motion.div>

          <motion.div className='ex'
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>12</motion.div>

          <motion.div className='ex'
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>13</motion.div>

          <motion.div className='ex'
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>14</motion.div>

          <motion.div className='ex'
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>15</motion.div>

          <motion.div className='ex'
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>16</motion.div>

          <motion.div className='ex'
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>17</motion.div>

          <motion.div className='ex'
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>18</motion.div>
        </div>

        <motion.button onClick={dir}
        initial={{boxShadow:'none', rotate:180}}
        transition={{duration:0.5}}
        whileHover={{scale:1.1, boxShadow:'0px 0px 14px #929292'}}
        whileTap={{scale:0.8}}> <img src='/assets/icons/chevron.png' /> </motion.button>

      </div>

      <div className='Promo-tenis01'>

        <img className='tenis-Preto' src="/assets/images/tenis/tenis_vegano_shoes_easeful_preto.png"></img>
        <div className='promo-tenis-text'>
          <h1> <label>ESTILO <br></br></label> INOVADOR</h1>
          <p> Os novos tênis veganos combinam design moderno e contemporâneo, sem comprometer os valores éticos. Eles seguem as últimas tendências da moda, com uma variedade de estilos, cores e materiais que atendem aos gostos e preferências de todas as pessoas</p>

        </div>

      </div>

      <div className='Tenis-Branco'>

        <div className='Textos-103'>

          <div className='Texto1'>
            <h1>
              1. Se você se preocupa com os direitos dos animais e deseja evitar o uso de produtos derivados de animais, um tênis vegano é uma escolha adequada.
            </h1>
          </div>

          <div className='Texto3'>
            <h1>
              3. Evitar substâncias tóxicas: Muitos calçados de couro são tratados com produtos químicos, como corantes e solventes, que podem ser prejudiciais ao meio ambiente e à saúde humana.
            </h1>
          </div>

        </div>

        <img src="/assets/images/landing-Page/Tenis-Branco.png"></img>


        <div className='Texto1'>
          <h1>
            2.Sustentabilidade ambiental: Os tênis veganos são geralmente fabricados com materiais sintéticos e alternativos, como poliéster reciclado, borracha natural, lona e microfibras.
          </h1>
        </div>

      </div>

      <Rodape />


    </div>




  );
}

