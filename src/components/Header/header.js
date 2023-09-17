import './header.scss';
import Logo from '../../assets/images/logo tcc02.png';
import Coração from '../../assets/images/coracao 1.png';
import Carrinho from '../../assets/images/carrinho-de-compras (1) 1.png';
import Pessoa from '../../assets/images/do-utilizador 2.png';
import Whatsapp from '../../assets/images/whatsapp 1.png';
import instagram from '../../assets/images/instagram.png';


import React, { useState, useEffect } from 'react';


export default function Header() {

  return (
    <div>

      <header className="landing-header">
      <div className='conjunto'>
        <img className='logo' src={Logo}></img>

        <div className='icon-1'>
          <img src={instagram}></img>
          <img src={Whatsapp}></img>


        </div>
       </div>
        <div className='Buscas-infos'>

          <a>ESPORTES</a>
          <a>HOMENS</a>
          <a>MULHERES</a>
          <a>CRIANÇAS</a>

        </div>
        
        <div class="search-box">
            
            <form method="post" action="#">
                <input type="text" class="search-box-input" name="busca" placeholder="Faça sua Pesquisa"/>
                <button class="search-box-button"><i class="search-box-icone icon icon-search"></i></button>
            
            </form>
            
        </div>
          
            
        <div className='Icon-2'>
          <img src={Coração}></img>
          <img src={Carrinho}></img>
          <img src={Pessoa}></img>

        </div>

       
      </header>

    </div>
  )

}