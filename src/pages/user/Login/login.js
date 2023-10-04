import './login.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import Rodape from '../../../components/Rodape/rodape';
import Header from '../../../components/Header/header';




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
                        <img className='google' src="../../../../public/assets/images/Redes_Sociais/Google.png" />
                        <img className='rede-social'src="../../../../public/assets/images/Redes_Sociais/Google.png" />
                        <img className='rede-social' src="../../../../public/assets/images/Redes_Sociais/Google.png" />
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