import './dados.scss';



import { useNavigate } from 'react-router-dom';
import storage from "local-storage"
import { useEffect, useState } from 'react';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import InputMask from 'react-input-mask';

import { useLocation } from 'react-router-dom';

import Rodape from '../../../components/Rodape/rodape';
import Header from '../../../components/Header/header';
import { AiFillEdit } from "react-icons/ai";
import { useId } from 'react';




export default function Meusdados() {

    const [userName, setUserName] = useState('');
    const [userNascimento, setUserNascimento] = useState('');
    const [usersenha, setUsersenha] = useState('');
    const [userCpf, setUserCpf] = useState('');
    const [userEmail, setUserEmail] = useState('');


    const navigate = useNavigate();

    useEffect(() => {
        if (!storage('login')) {

            navigate('/Login')
        }
    })

    function remove() {
        storage.remove('login');
        navigate('/');
    }

    const navigat = useNavigate();
    const location = useLocation();
    const { state } = location;
    const novoUsuario = state?.novoUsuario || {};

    useEffect(() => {
        if (!storage('login')) {
            navigate('/Login');
        }
    }, [navigate]);

    useEffect(() => {
        if (!storage('user-info')) {
            navigate('/');
        } else {
            const userData = storage('user-info');
            setUserName(userData.nome);
            setUserNascimento(userData.nascimento);
            setUsersenha(userData.senha);
            setUserCpf(userData.cpf);
            setUserEmail(userData.email);
        }
    }, []);

    return (

        <div className='Pagina-MeusDados'>

            <Header />

            <div className='Gigiz'>

                <div className='Meus-Dados'>

                    <h1>MINHA CONTA</h1>

                </div>




                <div className='Conta-Dados'>

                    <img src="/assets/images/Minha_Conta/do-utilizador 3.png" />
                    <h2> OLá,
                        <input type='text' value={userName} onChange={e => setUserName(e.target.value)} />
                       
                    </h2>

                </div>

                <div className='Dados-Usuario'>


                    <div className='acao-MeusDados'>

                        <div className='MeusDados'>
                            <img src="/assets/images/Minha_Conta/monitorando 1.png" />
                            <h3>Pedidos</h3>
                        </div>
                        <div className='MeusDados'>
                            <img src="/assets/images/Minha_Conta/troca 1.png" />
                            <h3>Troca</h3>
                        </div>
                        <div className='MeusDados'>
                            <img src="/assets/images/Minha_Conta/do-utilizador 3.png" />
                            <h3>Meus Dados</h3>
                        </div>
                        <div className='MeusDados'>
                            <img src="/assets/images/Minha_Conta/casa.png" />
                            <h3>Endereços</h3>
                        </div>
                        <div className='MeusDados'>
                            <img src="/assets/images/Minha_Conta/cartoes.png" />
                            <h3>cartões Salvos</h3>
                        </div>
                        <div onClick={remove} className='MeusDados'>
                            <img src="/assets/images/Minha_Conta/saida.png" />

                            <h3>Sair</h3>
                        </div>

                    </div>

                    <div className='Dados'>

                        <div className='Linhamento-MeusDados'>

                            <div className='Name-dados'>
                                <p>Nome</p>
                                <label className='Input-dados' >
                                    <input type='text' value={userName} onChange={e => setUserName(e.target.value)} />
                                    <AiFillEdit />
                                </label>
                            </div>
                            <div className='Name-dados'>
                                <p>Data Nascimento</p>
                                <label className='Input-dados'>
                                    <input mask='9999' value={userNascimento} onChange={e => setUserNascimento(e.target.value)} />
                                    <AiFillEdit />
                                </label>
                            </div>
                            <div className='Name-dados'>
                                <p>Senha</p>
                                <label className='Input-dados'>
                                    <InputMask mask='9999' placeholder='Número de Telefone' value={usersenha} onChange={e => setUsersenha(e.target.value)} />
                                    <AiFillEdit />
                                </label>
                            </div>
                        </div>

                        <div className='Linhamento-MeusDados02'>

                            <div className='Name-dados'>
                                <p>CPF</p>
                                <label className='Input-dados'>
                                    <InputMask mask='999.999.999-99' placeholder='CPF' value={userCpf} onChange={e => setUserCpf(e.target.value)} />
                                    <AiFillEdit />
                                </label>
                            </div>
                            <div className='Name-dados'>
                                <p>E-mail</p>
                                <label className='Input-dados'>
                                    <input type='text' value={userEmail} onChange={e => setUserEmail(e.target.value)} />
                                    <AiFillEdit />
                                </label>
                            </div>

                        </div>


                    </div>

                </div>

            </div>

            <Rodape />

        </div>
    )

}