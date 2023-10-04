import './adm.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import Rodape from '../../../components/Rodape/rodape';
import Header from '../../../components/Header/header';



export default function Admpage() {

    return (

        <div className='ADM-page'>

            <Header />

            <div className='ADM'>

                <div className='adm'>

                    <div className='Filtro-ADM'>

                        <img className='logo' src="../../../../public/assets/images/logo tcc02.png"></img>
                        <p>Admin Panel</p>
                        <p>Menu</p>
                        <h1>Organizations</h1>
                        <h1>Adicionar Produto</h1>
                        <h1>Pedidos Finalizados</h1>
                        <h1>Pedidos Realizados</h1>


                    </div>

                    <div className='ADM-Header'>


                        <div className='ADM-Cabecalho'>

                            <div className="hamburguer-icon">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>

                            </div>

                            <div className='ADM-Pessoa'>

                                <img src="../../../../public/assets/images/do-utilizador 2.png" />
                                <h2> oLá, Sr.Andrade </h2>

                            </div>
                        </div>




                        <div className='VGN-Shoes'>

                            <div className='Shoes'>
                                <h1>Orgainzations</h1>
                                <form method="post" action="#">
                                    <input type="text" class="search-box-input" name="busca" placeholder="Faça sua Pesquisa" />
                                    <button class="search-box-button"><i class="search-box-icone icon icon-search"></i></button>

                                </form>
                            </div>

                            <div>
                                <div className='Sr-no'>


                                    <h1>Sr no</h1>
                                    <h1>Organization</h1>
                                    <h1>Action</h1>

                                </div>

                                <div className='Fulano'>
                                   
                                    <h1>Sr no</h1>
                                    <h1>Organization</h1>
                                    <h1>Action</h1>
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