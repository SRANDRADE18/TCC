import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import './App.scss';
import Tenis012 from '../assets/images/tenis_vegano_shoes_esportivo_preto_ 3.png';
import Estrela from '../assets/images/Vector.svg';
import TenisEsportivopreto from '../assets/images/tenis/tenis_vegano_shoes_easeful_preto.png'
import TenisBranco from '../assets/images/Tenis-Branco.png';
import Header from '../components/Header/header.js';
import Rodape from '../components/Rodape/rodape';
import quadradinhos from '../assets/images/qudrado.png';
import tenisPlataforma from '../assets/images/tenis na plataforma.png';





export default function landingPage() {
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
            <img className='quadradinhos' src={quadradinhos} />
            <img className='quadradinhos' src={quadradinhos} />
            <img className='quadradinhos' src={quadradinhos} />
            <img className='quadradinhos' src={quadradinhos} />
            <img className='quadradinhos' src={quadradinhos} />
            <img className='quadradinhos' src={quadradinhos} />
          </div>


          <img className='Tenis-Parado' src={tenisPlataforma}></img>


        </div>
      </div>


      <div className='Compra-tenis'>

        <a href='http://localhost:3000/compra'>

          <div className='Tenis-01'>

            <img className='tenis' src={Tenis012}></img>
            <div className='infos-tenis01'>

              <div className='Infos-text'>
                <h1>Tênis Vegano Shoes
                  Rocket Sport Preto</h1>
              </div>


              <div className='estrelas'>
                <img src={Estrela}></img>
                <img src={Estrela}></img>
                <img src={Estrela}></img>
                <img src={Estrela}></img>
                <img src={Estrela}></img>
              </div>

              <div className='info-compra'>
                <h2>Frete grátis</h2>
                <h3>R$249,90  ou 4x de 60</h3>
              </div>

            </div>

          </div>

        </a>


        <a href='http://localhost:3000/compra'>
          <div className='Tenis-01'>


            <img className='tenis' src={Tenis012}></img>
            <div className='infos-tenis01'>

              <div className='Infos-text'>
                <h1>Tênis Vegano Shoes
                  Rocket Sport Preto</h1>
              </div>


              <div className='estrelas'>
                <img src={Estrela}></img>
                <img src={Estrela}></img>
                <img src={Estrela}></img>
                <img src={Estrela}></img>
                <img src={Estrela}></img>
              </div>

              <div className='info-compra'>
                <h2>Frete grátis</h2>
                <h3>R$249,90  ou 4x de 60</h3>
              </div>

            </div>
          </div>

        </a>

        <a href='http://localhost:3000/compra'>

          <div className='Tenis-01'>

            <img className='tenis' src={Tenis012}></img>
            <div className='infos-tenis01'>

              <div className='Infos-text'>
                <h1>Tênis Vegano Shoes
                  Rocket Sport Preto</h1>
              </div>


              <div className='estrelas'>
                <img src={Estrela}></img>
                <img src={Estrela}></img>
                <img src={Estrela}></img>
                <img src={Estrela}></img>
                <img src={Estrela}></img>
              </div>

              <div className='info-compra'>
                <h2>Frete grátis</h2>
                <h3>R$249,90  ou 4x de 60</h3>
              </div>

            </div>
          </div>

        </a>

        <a href='http://localhost:3000/compra'>

          <div className='Tenis-01'>

            <img className='tenis' src={Tenis012}></img>
            <div className='infos-tenis01'>

              <div className='Infos-text'>
                <h1>Tênis Vegano Shoes
                  Rocket Sport Preto</h1>
              </div>


              <div className='estrelas'>
                <img src={Estrela}></img>
                <img src={Estrela}></img>
                <img src={Estrela}></img>
                <img src={Estrela}></img>
                <img src={Estrela}></img>
              </div>

              <div className='info-compra'>
                <h2>Frete grátis</h2>
                <h3>R$249,90  ou 4x de 60</h3>
              </div>

            </div>
          </div>

        </a>

      </div>


      <div className='Promo-tenis01'>

        <img className='tenis-Preto' src={TenisEsportivopreto}></img>
        <div className='promo-tenis-text'>
          <h1> <label>ESTILO </label> INOVADOR</h1>
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

        <img src={TenisBranco}></img>


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

