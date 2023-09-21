import './criar_conta.scss';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Header from '../components/Header/header.js';
import Rodape from '../components/Rodape/rodape.js';
import Google from '../assets/images/Redes_Sociais/Google.png';
import facebook from '../assets/images/Redes_Sociais/facebook.png';
import instagram from '../assets/images/Redes_Sociais/instagram.png';
import Olho from '../assets/icons/visivel.png'


export default function Criar_conta() {

    //////////////////////////////////////////////////////////
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const Olharsenha = (e) => {
        setSenha(e.target.value);
    };

    const handleMostrarSenhaToggle = () => {
        setMostrarSenha(!mostrarSenha);
    };
    ///////////////////////////////////////////////////////////////   

    return (

        <div className='Criar-Conta'>

            <Header />

            <div className='Conta-Test'>

                <div className='Bem-vindo'>

                    <div className='Bem-vindo03'>
                        <h1>Seja Bem-Vindo</h1>
                        <p>Para se manter conectado conosco faça seu login com suas informações pessoais</p>

                        <button className='login-button'> Login </button>


                    </div>

                </div>

                <div className='cadastro'>
                    <div className='img'>

                    </div>

                    <div className='criar-conta'>
                        <h1> crie sua conta </h1>
                    </div>

                    <div className='rede-sociaveis'>
                        <img src={Google} />
                        <img src={facebook} />
                        <img src={instagram} />
                    </div>

                    <div className='Infos-Cliente'>

                        <input className='Input-criar_conta' type="search" placeholder='Nome Completo' />

                        <input className='Input-criar_conta' type="search" placeholder='CPF' />

                        <input className='Input-criar_conta-data' type="date" placeholder='Data de Nascimento' />

                        <input className='Input-criar_conta' type="search" placeholder='Email' />

                        <div className='Button-Senha'>

                            <input

                                className='Input-criar_conta'
                                placeholder='Senha'
                                type={mostrarSenha ? 'text' : 'password'}
                                id="senha"
                                name="senha"
                                value={senha}
                                onChange={Olharsenha}
                            />

                            <img src={Olho} onClick={handleMostrarSenhaToggle} />

                        </div>


                    </div>

                    <p> Já tem uma conta? <Link to='/Tela_Login'> Entrar. </Link></p>


                    <button className='cadastro-button'> Criar Conta </button>
                </div>


            </div>


            <Rodape />


        </div>
    )

}