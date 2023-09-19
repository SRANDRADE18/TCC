import { Link } from 'react-router-dom';

import './header.scss';
import Logo from '../../assets/images/logo tcc02.png';
import Coração from '../../assets/images/coracao 1.png';
import Carrinho from '../../assets/images/carrinho-de-compras (1) 1.png';
import Pessoa from '../../assets/images/do-utilizador 2.png';
import Whatsapp from '../../assets/images/whatsapp 1.png';
import instagram from '../../assets/images/instagram.png';
import Menu from '../../assets/images/menu.png';
import Pesquisa from '../../assets/images/pesq.png';
import facebook from '../../assets/images/facebook (1).png'
import Instagram from '../../assets/images/instagram (1).png'
import Twitter from '../../assets/images/twitter.png'





export default function Header() {

  function BTcarrinho(){
    window.location.href = 'http://localhost:3000/Carrinho'
  }

  function BTuser(){
    window.location.href = 'http://localhost:3000/login'
  }



  return (
    <div className='page-header'>
      <div className='header'>
        <div className='header-logo'>
          <img className='img-logo' src={Logo}/>
        </div>

        <div className='header-input'>
          <input placeholder='O que você está procurando?'></input>
          <button><img src={Pesquisa}/></button>
        </div>

        <div className='header-menu'>
            <img src={Coração}/>
            <img onClick={BTcarrinho} src={Carrinho}/>
            <img onClick={BTuser} src={Pessoa}/>
            <img id='menu' src={Menu} />
        </div>

      </div>

      <div className='sub-menu'>
        <div className='sub-menu-esq'>
            <img src={Whatsapp}/>
            <img src={facebook}/>
        </div>

        <div className='sub-menu-links'>
          <a>ESPORTES</a>
          <a>HOMENS</a>
          <a>MULHERES</a>
        </div>

        <div className='sub-menu-dir'>
          <img src={Instagram}/>
          <img src={Twitter}/>
        </div>

      </div>
    </div>
  )

}