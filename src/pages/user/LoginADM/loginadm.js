import './loginadm.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import Rodape from '../../../components/Rodape/rodape';
import Header from '../../../components/Header/header';




export default function Login_ADM(){

    return(

        <div className='login-adm'>
            
            <Header/>

            <div className='Conta-Test'>

                <div className='Bem-vindo'>

                    <div className='bem-vindo-login'>
                        <h1>Seja Bem-Vindo</h1>
                        <p>Essa é a parte de login do administrador do site, preencha as informações para se conectar na administração </p>

                        


                    </div>

                </div>

                <div className='cadastro'>

                    <div className='img'>

                    </div>

                    <div className='criar-conta'>
                        <h1> Login Administrativo </h1>
                    </div>

                    <div className='infos-cliente-login'>
            
                        <input  type="search" placeholder='Email' />
                        <input  type="search" placeholder='Senha' />
                    </div>

                   
                    <button> Fazer login </button>
                    
                </div>
                </div>


           
            <Rodape/>


        </div>
    )

}