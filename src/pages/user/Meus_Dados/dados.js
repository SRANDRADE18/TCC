import './dados.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import Rodape from '../../../components/Rodape/rodape';
import Header from '../../../components/Header/header';





export default function Meusdados() {

    return (

        <div className='Pagina-MeusDados0'>

            <Header />

            <div className='Gigiz'>

                <div className='Meus-Dados'>

                    <h1>MINHA CONTA</h1>

                </div>




                <div className='Conta-Dados'>

                    <img src="../../../../public/assets/images/Minha_Conta/do-utilizador 3.png" />
                    <h2> OLá, Lidio </h2>
                    
                </div>

                <div className='Dados-Usuario'>
                    

                    <div className='acao-MeusDados'>

                        <div className='MeusDados'>
                            <img src="../../../../public/assets/images/Minha_Conta/monitorando 1.png" />
                            <h3>Pedidos</h3>
                        </div>

                        <div className='Linha-Dados'></div>

                        <div className='MeusDados'>
                            <img src="../../../../public/assets/images/Minha_Conta/troca 1.png" />
                            <h3>Troca</h3>
                        </div>

                        <div className='Linha-Dados'></div>

                        <div className='MeusDados'>
                            <img src="../../../../public/assets/images/Minha_Conta/do-utilizador 3.png" />
                            <h3>Meus Dados</h3>
                        </div>

                        <div className='Linha-Dados'></div>

                        <div className='MeusDados'>
                            <img src="../../../../public/assets/images/Minha_Conta/casa.png" />
                            <h3>Endereços</h3>
                        </div>

                        <div className='Linha-Dados'></div>

                        <div className='MeusDados'>
                            <img src="../../../../public/assets/images/Minha_Conta/cartoes.png" />
                            <h3>cartões Salvos</h3>
                        </div>

                        <div className='Linha-Dados'></div>

                        <div className='MeusDados'>
                            <img src="../../../../public/assets/images/Minha_Conta/saida.png" />
                            <h3>Sair</h3>
                        </div>


                    </div>

                    <div className='Dados'>

                        <div className='llDados'>


                            <div className='Linhamento-MeusDados'>

                                <div className='Name-dados'>
                                    <p>Nome</p>
                                    <input className='Input-dados'/>
                                </div>

                                <div className='Name-dados'>
                                    <p>Data de Nascimento</p>
                                    <input className='Input-dados' />
                                </div>

                                <div className='Name-dados'>
                                    <p>Senha</p>
                                    <input className='Input-dados' />
                                </div>
                            </div>

                            <div className='Linhamento-MeusDados'>

                                <div className='Name-dados'>
                                    <p>CPF</p>
                                    <input className='Input-dados' />
                                </div>

                                <div className='Name-dados'>
                                    <p>E-mail</p>
                                    <input className='Input-dados' />
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Rodape />

        </div>
    )

}