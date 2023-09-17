import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import './App.scss';
import PromoTenis from '../assets/images/img1 teniss.png';
import Tenis01 from '../assets/images/tenis_vegano_shoes_esportivo_preto_ 3.png';
import Estrela from '../assets/images/Vector.svg';
import PromoTenis01 from '../assets/images/Tenis-info01.png';
import TenisBranco from '../assets/images/Tenis-Branco.png';
import Header from '../components/Header/header.js';
import Rodape from '../components/Rodape/rodape';




export default function landingPage() {
  return (

    <div className="landing-Page">


      <Header />

      <div className='Promo-tenis'>
          <img src={PromoTenis}></img>
      </div>

      <Link to='/Criar_Conta'> teu pai na minha cama</Link>
      <div className='Compra-tenis'>

        <a href='http://localhost:3000/compra'>

          <div className='Tenis-01'>

            <img className='tenis' src={Tenis01}></img>
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


            <img className='tenis' src={Tenis01}></img>
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

            <img className='tenis' src={Tenis01}></img>
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

            <img className='tenis' src={Tenis01}></img>
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
        <img src={PromoTenis01}></img>
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

