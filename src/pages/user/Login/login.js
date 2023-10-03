import './login.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Header from '//components/Header/header.js';
import Rodape from '//components/Rodape/rodape.js';
import Google from '//assets/images/Redes_Sociais/Google.png';
import facebook from '//assets/images/Redes_Sociais/facebook.png';
import instagram from '//assets/images/Redes_Sociais/instagram.png';


export default function Login() {

    return (
        <div className='tela-login'>

            <Header />

            <div className='Conta-Test'>

                <div className='Bem-vindo'>

                    <div className='bem-vindo-login'>
                        <h1>Seja Bem-Vindo</h1>
                        <p>Para se manter conectado conosco faça seu login com suas informações pessoais</p>

                        <button> Login </button>


                    </div>

                </div>

                <div className='cadastro'>

                    <div className='img'>

                    </div>

                    <div className='criar-conta'>
                        <h1> Entra na sua Conta </h1>
                    </div>

                    <div className='rede-sociaveis'>
                        <img className='google' src={Google} />
                        <img className='rede-social'src={facebook} />
                        <img className='rede-social' src={instagram} />
                    </div>

                    <div className='infos-cliente-login'>
            
                        <input  type="search" placeholder='Email' />
                        <input  type="search" placeholder='Senha' />
                    </div>

                    <p>Não tem uma conta? <Link to='/Criar_Conta'> Crie. </Link></p>

                    <button> Criar Conta </button>
                    
                </div>


            </div>


            <Rodape />


        </div>
    )


}