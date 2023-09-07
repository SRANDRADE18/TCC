import './compra.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Header from '../components/Header/header.js';
import Rodape from '../components/Rodape/rodape.js';
import Tenis01 from '../assets/images/tenis_vegano_shoes_esportivo_preto_ 3.png';
import Estrela from '../assets/images/Vector.svg';

export default function Compra(){

    return(
        <div className='Pagina-compra'>
             <Header/>

           

             <div className='Produtos-compra'>
                 <div className='Compra-Filtros'>

                  <div className='Filtro-Preco'>

                    <h1>PREÇOS</h1>

                    <h2>200 R$ -- 1500R$</h2>
                    
                    <div className='Filter-Preco'>
                    <input class="filter_range" type="range" ></input>
                    <input class="filter_range" type="range" ></input>
                    </div>

                  </div>

                  <div className='Filtro-Genero'>
                    <h1>Gêneros</h1>

                  </div>

                </div>

                <div className='Compra-Linha01'>
                    
                 <img className='tenis-Preto'  src={Tenis01}></img>

                 <div className='Compra-Info'>

                    <div className='Compra-Texto'>
                    <h1>Tênis Vegano Shoes  
                       Rocket Sport Preto</h1>
                    </div>


                    <div className='Compra-Estrelas'>
                     <img src={Estrela}></img>
                     <img src={Estrela}></img>
                     <img src={Estrela}></img>
                     <img src={Estrela}></img>
                     <img src={Estrela}></img>
                    </div>

                  <div className='Compra-Preco'>
                     <h2>Frete grátis</h2>
                      <h3>R$249,90  ou 4x de 62</h3>
                    </div>


                 </div>

                </div>

                <div className='Compra-Linha01'>
                    
                    <img className='tenis-Preto'  src={Tenis01}></img>
   
                    <div className='Compra-Info'>
   
                       <div className='Compra-Texto'>
                       <h1>Tênis Vegano Shoes  
                          Rocket Sport Preto</h1>
                       </div>
   
   
                       <div className='Compra-Estrelas'>
                        <img src={Estrela}></img>
                        <img src={Estrela}></img>
                        <img src={Estrela}></img>
                        <img src={Estrela}></img>
                        <img src={Estrela}></img>
                       </div>
   
                     <div className='Compra-Preco'>
                        <h2>Frete grátis</h2>
                         <h3>R$249,90  ou 4x de 62</h3>
                       </div>
   
   
                    </div>
   
                   </div>

                   <div className='Compra-Linha01'>
                    
                    <img className='tenis-Preto'  src={Tenis01}></img>
   
                    <div className='Compra-Info'>
   
                       <div className='Compra-Texto'>
                       <h1>Tênis Vegano Shoes  
                          Rocket Sport Preto</h1>
                       </div>
   
   
                       <div className='Compra-Estrelas'>
                        <img src={Estrela}></img>
                        <img src={Estrela}></img>
                        <img src={Estrela}></img>
                        <img src={Estrela}></img>
                        <img src={Estrela}></img>
                       </div>
   
                     <div className='Compra-Preco'>
                        <h2>Frete grátis</h2>
                         <h3>R$249,90  ou 4x de 62</h3>
                       </div>
   
   
                    </div>
   
                   </div>

             </div>

             <Rodape/>



        </div>
    
    )

}