import './header.scss';
import Logo from '../../assets/images/logo tcc02.png';
import Coração from '../../assets/images/coracao 1.png';
import Carrinho from '../../assets/images/carrinho-de-compras (1) 1.png';
import Pessoa from '../../assets/images/do-utilizador 2.png';
import Whatsapp from '../../assets/images/whatsapp 1.png';
import Facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import linkedin from '../../assets/images/linkedin.png';

export default function Header(){

    return(      
        <div>

          <header className="landing-header">

         

         <div className='Icons-page1'>
 
          <img src={Logo}></img>

          </div>

          <input className='input_Header' type="search" placeholder='Pesquisar'/>

        

         <div className='Icons-page2'>
            <img src={Coração}></img>
            <img src={Carrinho}></img>
           <img src={Pessoa}></img>

          </div>

        

          </header>
    
         <div className='Infos-Page1'>


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
      </div>
    )

}