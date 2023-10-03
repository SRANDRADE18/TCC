import './filtrosAdm.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Logo from '../../assets/images/logo tcc02.png';
import Pessoa from '../../assets/images/Minha_Conta/do-utilizador 3.png';


export default function Filtroadm() {

    return (

        <div className='ADM-page'>



            <div className='ADM-add'>

                <div className='adm-add'>

                    <div className='Filtro-ADM-add'>

                        <img className='logo' src={Logo}></img>
                        <p>Admin Panel</p>
                        <p>Menu</p>
                        <h1>Organizations</h1>
                        <h1>Adicionar Produto</h1>
                        <h1>Pedidos Finalizados</h1>
                        <h1>Pedidos Realizados</h1>


                    </div>



                </div>


            </div>
        </div>


    )
}