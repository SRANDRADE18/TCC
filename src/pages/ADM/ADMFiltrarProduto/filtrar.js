import './filtrar.scss';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { useState } from 'react';

import storage from 'local-storage';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Rodape from '../../../components/Rodape/rodape';
import Header from '../../../components/Header/header';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


export default function Filtroproduto() {

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

            });
        }
    });


    const navigate = useNavigate();

    useEffect(() => {
        if (!storage('login-adm')) {

            navigate('/Loginadm')
        }
    })

    return (

        <div className='adm-page-add'>


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
                            <h2>Tela De Filtrar Produto</h2>
                        </div>

                        <div className='VGN-Shoes-filtar'>

                            <table>
                                <tr>
                                    <th> Nº  </th>
                                    <th> Nome </th>
                                    <th> Data </th>
                                    <th> Cor </th>
                                    <th> Gênero </th>
                                    <th> Tamanhos </th>
                                    <th> Preço </th>
                                    <th> Pr Promoção </th>
                                    <th> Promoção </th>
                                </tr>
                                <tr>
                                    <td> 1 </td>
                                    <td> Botas Vegano Shoes Cross Tanguá Premium </td>
                                    <td> 09/01/2023 </td>
                                    <td> Preto </td>
                                    <td> Unisex </td>
                                    <td> 35, 36, 37, 38, 39, 40 </td>
                                    <td> 299,99 </td>
                                    <td> 149,99 </td>
                                    <td> 50% </td>
                                </tr>
                                <tr>
                                    <td> 1 </td>
                                    <td> Botas Vegano Shoes Cross Tanguá Premium </td>
                                    <td> 09/01/2023 </td>
                                    <td> Preto </td>
                                    <td> Unisex </td>
                                    <td> 35, 36, 37, 38, 39, 40 </td>
                                    <td> 299,99 </td>
                                    <td> 149,99 </td>
                                    <td> 50% </td>
                                </tr>
                                <tr>
                                    <td> 1 </td>
                                    <td> Botas Vegano Shoes Cross Tanguá Premium </td>
                                    <td> 09/01/2023 </td>
                                    <td> Preto </td>
                                    <td> Unisex </td>
                                    <td> 35, 36, 37, 38, 39, 40 </td>
                                    <td> 299,99 </td>
                                    <td> 149,99 </td>
                                    <td> 50% </td>
                                </tr>
                            </table>

                        </div>


                    </div>

                </div>


            </div>

            <Rodape />


        </div>


    )

}