import './login.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Header from '../components/Header/header.js';
import Rodape from '../components/Rodape/rodape.js';
import Google from '../assets/images/Redes_Sociais/Google.png';
import facebook from '../assets/images/Redes_Sociais/facebook.png';
import instagram from '../assets/images/Redes_Sociais/instagram.png';


export default function Login() {

    return (
        <div className='Criar-Conta'>

            <Header />

            <div className='Conta-Test'>

                <div className='Bem-vindo'>

                    <div className='Bem-vindo02'>
                        <h1>Seja Bem-Vindo</h1>
                        <h2>Para se manter conectado conosco faça seu login com suas informações pessoais</h2>

                        <button className='login-button'> Login </button>


                    </div>

                </div>

                <div className='cadastro'>

                    <div className='img'>

                    </div>

                    <div className='criar-conta'>
                        <h1> Entra na sua Conta </h1>
                    </div>

                    <div className='rede-sociaveis'>
                        <img src={Google} />
                        <img src={facebook} />
                        <img src={instagram} />
                    </div>

                    <div className='Infos-Cliente'>
                        <input className='Input-criar_conta' type="search" placeholder='Nome Completo' />
                        <input className='Input-criar_conta' type="search" placeholder='Email' />
                        <input className='Input-criar_conta' type="search" placeholder='Senha' />
                    </div>

                    <p>Não tem uma conta <Link to='/Criar_Conta'> Crie. </Link></p>

                    <button className='cadastro-button'> Criar Conta </button>
                    
                </div>


            </div>


            <Rodape />


        </div>
    )


}