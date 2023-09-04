import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import './App.scss';
import Logo from '../assets/images/logo tcc 2.png';
import Coração from '../assets/images/coracao 1.png';
import Carrinho from '../assets/images/carrinho-de-compras (1) 1.png';
import Pessoa from '../assets/images/do-utilizador 2.png';
import Whatsapp from '../assets/images/whatsapp 1.png';
import Facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import linkedin from '../assets/images/linkedin.png';
import PromoTenis from '../assets/images/img1 teniss.png';
import Tenis01 from '../assets/images/tenis_vegano_shoes_esportivo_preto_ 3.png';
import Estrela from '../assets/images/Vector.svg';





export default function landingPage () {
  return (
    <div className="landing-Page">
      <header className="landing-header">

        <div className='Landing-PT'>

        <div className='Icons-page1'>
 
          <img src={Logo}></img>

          <input></input>

        </div>

         <div className='Icons-page2'>
            <img src={Coração}></img>
            <img src={Carrinho}></img>
           <img src={Pessoa}></img>

          </div>

        </div>

      
         <section className='Infos-Page1'>

          <div className='Infos-Page2'>
          <div className='What-face'>
           <img src={Whatsapp}></img>
           <img src={Facebook}></img>

          </div>

          <div className='Buscas-infos'>

            <a>ESPORTES</a>
            <a>HOMENS</a>
            <a>MULHERES</a>
            <a>CRIANÇAS</a>
            <a>ACESSÓRIOS</a>

          </div>

          <div className='Insta-din'>

           <img src={linkedin}></img>
           <img src={instagram}></img>

          </div>

          </div>

          

         </section>
      </header>

      <div className='Promo-tenis'>
      <img src={PromoTenis}></img>
      </div>

      <div className='Compra-tenis'>

        <div className='Tenis-01'>

         <img className='tenis'  src={Tenis01}></img>
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

         <div className='Tenis-02'>

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

        
        <div className='Tenis-03'>

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

         <div className='Tenis-03'>

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


      </div>
      

    </div>
  );
}

