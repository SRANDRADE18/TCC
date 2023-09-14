import './criar_conta.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Header from '../components/Header/header.js';
import Rodape from '../components/Rodape/rodape.js';
import Google from '../assets/images/Redes_Sociais/Google.png';
import facebook from '../assets/images/Redes_Sociais/facebook.png';
import instagram from '../assets/images/Redes_Sociais/instagram.png';

export default function Criar_conta(){

    return(

        <div className='Criar-Conta'>
            
            <Header/>

            <div className='wrap'>

            <div className='Seja-bemVindo'>

                <h1>Seja Bem-Vindo</h1>
                <h2>Para se manter conectado conosco faça seu login com suas informações pessoais</h2>

                <button>Login</button>


            </div>

            <div className='Test2'>

                            <div className='Conta-Info'>

                <div className='Redes-informe'>

                    <h1>CRIE UMA CONTA</h1>

                    <div>
                     <img src={Google}></img>
                     <img src={facebook}></img>
                     <img src={instagram}></img>
                    </div>

                    <h2>informe os seus dados</h2>

                </div>

                <div className='Infos-Cliente'>
                    <input className='Input-criar_conta' type="search" placeholder='Nome Completo'/>
                    <input className='Input-criar_conta' type="search" placeholder='CPF'/>
                    <input className='Input-criar_conta' type="search" placeholder='Data de Nascimento'/>
                    <input className='Input-criar_conta' type="search" placeholder='Email'/>
                    <input className='Input-criar_conta' type="search" placeholder='Senha'/>
                </div>

                <button className='Button-Criar'> CRIAR </button> 


            </div>


            </div>


            </div>


            <Rodape/>


        </div>
    )

}