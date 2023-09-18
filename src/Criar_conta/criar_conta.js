import './criar_conta.scss';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Header from '../components/Header/header.js';
import Rodape from '../components/Rodape/rodape.js';
import Google from '../assets/images/Redes_Sociais/Google.png';
import facebook from '../assets/images/Redes_Sociais/facebook.png';
import instagram from '../assets/images/Redes_Sociais/instagram.png';


export default function Criar_conta() {


    const [nome, setnome] = useState('');
    const [cpf, setcpf] = useState('');
    const [data, setdata] = useState('');
    const [Email, setEmail] = useState('');
    const [senha, setsenha] = useState('');
    const [erro, setErro] = useState('');
    const Navigate=useNavigate();

    async function Cadastar() {

        const a = await axios.post('http:localhost:6000/criarconta',
            {
                nome: nome,
                cpf: cpf,
                data: data,
                Email: Email,
                senha: senha
            });
        if (a.status === 401) {
            setErro(r.data.erro);
        } else {
            Navigate('/adim');
        }
    }

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
                        <h1> crie sua conta </h1>
                    </div>

                    <div className='rede-sociaveis'>
                        <img src={Google} />
                        <img src={facebook} />
                        <img src={instagram} />
                    </div>

                    <div className='Infos-Cliente'>
                        <input className='Input-criar_conta' type="search" placeholder='Nome Completo' onChange={e => setnome(e.target.value)} />
                        <input className='Input-criar_conta' type="search" placeholder='CPF' onChange={e => setcpf(e.target.value)} />
                        <input className='Input-criar_conta' type="search" placeholder='Data de Nascimento' onChange={e => setdata(e.target.value)} />
                        <input className='Input-criar_conta' type="search" placeholder='Email' onChange={e => setEmail(e.target.value)} />
                        <input className='Input-criar_conta' type="search" placeholder='Senha' onChange={e => setsenha(e.target.value)} />
                    </div>

                    <p> Já tem uma conta? <Link> Entrar. </Link></p>

                    <button className='cadastro-button'> Criar Conta </button>
                </div>


            </div>


            <Rodape />


        </div>
    )

}