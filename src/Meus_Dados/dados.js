import './dados.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Header from '../components/Header/header.js';
import Rodape from '../components/Rodape/rodape.js';
import troca from '../assets/images/Minha_Conta/troca 1.png'
import Pessoa from '../assets/images/Minha_Conta/do-utilizador 3.png'
import pedidos from '../assets/images/Minha_Conta/monitorando 1.png'
import cartoes from '../assets/images/Minha_Conta/cartoes.png'
import saida from '../assets/images/Minha_Conta/saida.png'
import casa from '../assets/images/Minha_Conta/casa.png'



export default function MeusDados(){

return(

    <div className='Pagina-MeusDados'>
        <Header/>

        <div className='Meus-Dados'>

        <h1>MINHA CONTA</h1>
            
        </div>        
            
            
        

        <div className='Conta-Dados'>

            <img src={Pessoa}/>
            <h2> oLá, Sr.Andrade </h2>

        </div>

        <div className='Dados-Usuario'>

             <div className='acao-MeusDados'>

                <div className='pedidos'>
                    <img src={pedidos}/>
                    <h3>Pedidos</h3>
                </div>

                <div className='Linha-Dados'></div>

                <div className='pedidos'>
                    <img src={troca}/>
                    <h3>Troca</h3>
                </div>

                <div className='Linha-Dados'></div>

                <div className='pedidos'>
                    <img src={Pessoa}/>
                    <h3>Meus Dados</h3>
                </div>

                <div className='Linha-Dados'></div>

                <div className='pedidos'>
                    <img src={casa}/>
                    <h3>Endereços</h3>
                </div>

                <div className='Linha-Dados'></div>

                <div className='pedidos'>
                    <img src={cartoes}/>
                    <h3>cartões Salvos</h3>
                </div>

                <div className='Linha-Dados'></div>

                <div className='pedidos'>
                    <img src={saida}/>
                    <h3>Sair</h3>
                </div>
                

            </div>

            <div className='Dados'>

      


            </div>

        </div>

        <Rodape/>

    </div>
)

}