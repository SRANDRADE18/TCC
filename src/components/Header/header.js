import { Link } from 'react-router-dom';
import { useState } from 'react';
import './header.scss';
import {Bsearch} from 'react-icons';
import CartButton from "../carrinhoT/car"



export default function Header() {


  function BTcarrinho() {
    window.location.href = 'http://localhost:3000/Carrinho'
  }

  function BTuser() {
    window.location.href = 'http://localhost:3000/Criar_Conta'
  }


  return (
    <div className='page-header'>
      <div className='header'>
        <div className='header-logo'>
          <img className='img-logo' src="/assets/images/logo tcc 2.png" />
        </div>

        <div className='header-input'>
          <input placeholder='O que você está procurando?'></input>
          <button><img src="/assets/images/pesq.png" /></button>
        </div>

        <div className='header-menu'>


          <img src="/assets/images/coracao 1.png" />

          



          <CartButton/>


          <img onClick={BTuser} src="/assets/images/do-utilizador 2.png" />
          <img id='menu' src="/assets/images/menu.png" />


        </div>

      </div>

      <div className='sub-menu'>
        <div className='sub-menu-esq'>
          <img src="/assets/images/whatsapp 1.png" />
          <img src="/assets/images/facebook (1).png" />
        </div>

        <div className='sub-menu-links'>
          <a>ESPORTES</a>
          <a>HOMENS</a>
          <a>MULHERES</a>
        </div>

        <div className='sub-menu-dir'>
          <img src="/assets/images/instagram.png" />
          <img src="/assets/images/twitter.png" />
        </div>

      </div>
    </div>
  )

}