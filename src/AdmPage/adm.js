import './adm.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Header from '../components/Header/header.js';
import Rodape from '../components/Rodape/rodape.js';
import Logo from '../assets/images/logo tcc02.png';
import Pessoa from '../assets/images/Minha_Conta/do-utilizador 3.png'

export default function Admpage() {

    return (

        <div className='ADM-page'>

            <Header />

            <div className='ADM'>

                <div className='adm'>

                    <div className='Filtro-ADM'>

                        <img className='logo' src={Logo}></img>
                        <p>Admin Panel</p>
                        <p>Menu</p>
                        <h1>Organizations</h1>
                        <h1>Adicionar Produto</h1>
                        <h1>Pedidos Finalizados</h1>
                        <h1>Pedidos Realizados</h1>


                    </div>

                    <div className='ADM-Header'>


                        <div className="hamburguer-icon">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>

                        <div className='ADM-Pessoa'>

                            <img src={Pessoa} />
                            <h2> oLá, Sr.Andrade </h2>

                        </div>

                        <div className='VGN-Shoes'>

                            <div className='Shoes'>
                                <h1>Orgainzations</h1>
                                <form method="post" action="#">
                                    <input type="text" class="search-box-input" name="busca" placeholder="Faça sua Pesquisa" />
                                    <button class="search-box-button"><i class="search-box-icone icon icon-search"></i></button>

                                </form>
                            </div>

                            <div className='Sr-no'>

                                <div>
                                    <h1>Sr no</h1>
                                    <h1>Organization</h1>
                                </div>
                                <h1>Action</h1>
                            </div>

                            <div className='Fulano'>
                                <h1>1</h1>
                                <h1>Sr no</h1>
                                <h1>Organization</h1>
                                <h1>Action</h1>
                            </div>


                        </div>


                    </div>

                </div>


            </div>

            <Rodape />


        </div>
    )

}