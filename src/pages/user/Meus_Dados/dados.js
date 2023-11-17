import './dados.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

import storage from 'local-storage';

import Rodape from '../../../components/Rodape/rodape';
import Header from '../../../components/Header/header';
import { AiFillEdit } from "react-icons/ai";



export default function Meusdados() {

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

    return (

        <div className='Pagina-MeusDados'>

            <Header />

            <div className='Gigiz'>

                <div className='Meus-Dados'>

                    <h1>MINHA CONTA</h1>

                </div>




                <div className='Conta-Dados'>

                    <img src="/assets/images/Minha_Conta/do-utilizador 3.png" />
                    <h2> OLá, Lidio </h2>

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
                                <label className='Input-dados'>
                                    <input type='text' />
                                    <AiFillEdit />
                                </label>
                            </div>

                            <div className='Name-dados'>
                                <p>Data Nascimento</p>
                                <label className='Input-dados'>
                                    <input type='text' />
                                    <AiFillEdit />
                                </label>
                            </div>

                            <div className='Name-dados'>
                                <p>Senha</p>
                                <label className='Input-dados'>
                                    <input type='text' />
                                    <AiFillEdit />
                                </label>
                            </div>
                        </div>

                        <div className='Linhamento-MeusDados02'>

                            <div className='Name-dados'>
                                <p>CPF</p>
                                <label className='Input-dados'>
                                    <input type='text' />
                                    <AiFillEdit />
                                </label>
                            </div>

                            <div className='Name-dados'>
                                <p>E-mail</p>
                                <label className='Input-dados'>
                                    <input type='text' />
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