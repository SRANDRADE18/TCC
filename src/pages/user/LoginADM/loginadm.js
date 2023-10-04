import './loginadm.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import Rodape from '../../../components/Rodape/rodape';
import Header from '../../../components/Header/header';




export default function Login_ADM(){

    return(

        <div className='Criar-Conta'>
            
            <Header/>

            <div className='Conta-ADM'>


           <div className='cadastro-ADM'>
     
            <div className='criar-conta'>
                <h1>ADM LOGIN</h1>
            </div>


                <div className='Infos-Cliente'>
                    <input className='Input-ADM' type="search" placeholder='Nome Completo'/>
                    <input className='Input-ADM' type="search" placeholder='Email'/>
                    <input className='Input-ADM' type="search" placeholder='Senha'/>
                </div>
                
                <br/>

                <button className='cadastro-button'> Entrar </button>
           </div>


            </div>

           
            <Rodape/>


        </div>
    )

}