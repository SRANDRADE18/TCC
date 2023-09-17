import './login.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Header from '../components/Header/header.js';
import Rodape from '../components/Rodape/rodape.js';
import Google from '../assets/images/Redes_Sociais/Google.png';
import facebook from '../assets/images/Redes_Sociais/facebook.png';
import instagram from '../assets/images/Redes_Sociais/instagram.png';
  

export default function Login (){

    return(
<div className='Login-Conta'>
            
            <Header/>

            <div className='Login-Info'>

                <div className='Redes'>

                    <h1>CRIE UMA CONTA</h1>

                    <div>
                     <img src={Google}></img>
                     <img src={facebook}></img>
                     <img src={instagram}></img>
                    </div>

                    <h1>informe os seus dados</h1>

                </div>

                <div className='Login-Cliente'>
                    <input className='Input-Login' type="search" placeholder='Email'/>
                    <input className='Input-Login' type="search" placeholder='Senha'/>
                </div>

                <button className='Login-Button'> CRIAR </button> 





            </div>

            <Rodape/>


        </div>

    )


}