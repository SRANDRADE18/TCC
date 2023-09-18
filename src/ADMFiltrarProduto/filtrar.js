import './filtrar.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Header from '../components/Header/header.js';
import Rodape from '../components/Rodape/rodape.js';

import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 






export default function Filtraproduto() {

    document.addEventListener('DOMContentLoaded', function () {

        const showMenuButton = document.querySelector('.show-menu');
        const hideMenuButton = document.querySelector('.hide-menu');
        const menu = document.querySelector('.menu');

        showMenuButton.addEventListener('click', () => {
            menu.style.display = 'block';
        });

        hideMenuButton.addEventListener('click', () => {
            menu.style.display = 'none';
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        const filterButton = document.querySelector('.filter-button');

        if (filterButton) {
            filterButton.addEventListener('click', function () {
                // Lógica para filtrar produtos aqui
            });
        }
    });

    return (
        <div className='ADM-page'>

            <Header />

            <div className='ADM-add'>

                <div className='adm-add'>

                    <div className='Filtro-ADM-add'>
                        <p>Admin Panel</p>
                        <p>Menu</p>
                        <h1>Organizations</h1>
                        <h1>Adicionar Produto</h1>
                        <h1>Pedidos Finalizados</h1>
                        <h1>Pedidos Realizados</h1>


                    </div>

                    <div className='ADM-Header'>


                        <div className='ADM-Cabecalho-add'>

                            <div className="hamburguer-icon">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>

                            </div>

                            <div className='ADM-Pessoa-add'>

                                <h2> oLá, Sr.Andrade </h2>

                            </div>
                        </div>



                        <div>
                            <h2>Tela De Adicionar Produto</h2>
                        </div>

                        <div className='VGN-Shoes-filtar'>

                            <div className='Header-Filtar'>

                                <h1>nome</h1>
                                <h1>NUMERO DO PRODUTO</h1>
                                <h1>DATA DO CADASTRO</h1>
                                <h1>PREÇO</h1>
                                <h1>COR</h1>
                                <h1>PROMOÇÃO</h1>
                                <h1>PREÇO PROMOÇÃO</h1>
                                <h1>GENERO</h1>
                                <h1>TAMANHOS</h1>


                            </div>

                            <div className='Info-Tenis-Compra'>

                                <h2>Bota Vegano Shoes Cross Tanguá Premium</h2>
                                <h1>4587</h1>
                                <h1>09/01/2023</h1>
                                <h1>298,90</h1>
                                <h1>PRETO</h1>
                                <h2>MES*** promoçao de inverno 50% de desconto</h2>
                                <h1>298,90</h1>
                                <h1>UNISSEX</h1>
                                <h1>35,36,37,38,39</h1>

                            </div>


                        </div>


                    </div>

                </div>


            </div>


        </div>


    )

}