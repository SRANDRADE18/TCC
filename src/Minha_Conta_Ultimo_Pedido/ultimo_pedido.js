import './ultimo_pedido.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Header from '../components/Header/header.js';
import Rodape from '../components/Rodape/rodape.js';
import Pedidos from '../assets/images/Minha_Conta/monitorando 1.png'
import troca from '../assets/images/Minha_Conta/troca 1.png'
import Pessoa from '../assets/images/Minha_Conta/do-utilizador 3.png'
import pedidos from '../assets/images/Minha_Conta/monitorando 1.png'
import cartoes from '../assets/images/Minha_Conta/cartoes.png'
import saida from '../assets/images/Minha_Conta/saida.png'
import casa from '../assets/images/Minha_Conta/casa.png'
import Tenis from '../assets/images/tenis/tenis_vegano_shoes_esportivo_preto_ 3.png'
import Status from '../assets/images/Minha_Conta/Status.png'


export default function UltimoPedido(){

return(

    <div className='Pagina-UltimoPedido'>
        <Header/>

        <div className='Minha-conta'>

        <h1>MINHA CONTA</h1>
            
        </div>        
            
            
        

        <div className='Conta-perfil'>

            <img src={Pessoa}/>
            <h2> oLá, Sr.Andrade </h2>

        </div>

        <div className='Ultimo-Pedido'>

             <div className='acao-UltimoPedido'>

                <div className='pedidos'>
                    <img src={pedidos}/>
                    <h3>Pedidos</h3>
                </div>

                <div className='Linha-pedidos'></div>

                <div className='pedidos'>
                    <img src={troca}/>
                    <h3>Troca</h3>
                </div>

                <div className='Linha-pedidos'></div>

                <div className='pedidos'>
                    <img src={Pessoa}/>
                    <h3>Meus Dados</h3>
                </div>

                <div className='Linha-pedidos'></div>

                <div className='pedidos'>
                    <img src={casa}/>
                    <h3>Endereços</h3>
                </div>

                <div className='Linha-pedidos'></div>

                <div className='pedidos'>
                    <img src={cartoes}/>
                    <h3>cartões Salvos</h3>
                </div>

                <div className='Linha-pedidos'></div>

                <div className='pedidos'>
                    <img src={saida}/>
                    <h3>Sair</h3>
                </div>
                

            </div>

            <div className='Pedidos'>

                <div className='Tenis-Pedido'>

                    <img src={Tenis}/>

                    <h4>Tênis Vegano Shoes Easeful</h4>
                    <h4>Cor:  <a>Preto</a> </h4>
                    <h4>Tamanho: <a>40</a>  </h4>
                    <h4>Quantidade: 1 </h4>
                    <h4>Valor Unitario: <a> R$ 276,99 </a> </h4>

                </div>

                <div className='Linha2'></div>

                <div className='Status-Pedido'>

                    <img src={Status}/>

                    <h5>Status: <a>Pedido entregue - 26/05/2023 13:00</a> </h5>

                    <button className='Cancelar'>Cancelar</button>
                    <button className='Acompanhar_Entrega'>Acompanhar Entrega</button>

                </div>

                <div className='Linha2'></div>

                <div className='resumo_do_pedido'>
                <h6>Resumo da Compra</h6>
                <h6>Pedido: 108022102</h6>
                <h6>Data do Pedido:19/05/2023</h6>
                <h6>Valor Total:RS$273,99</h6>
                <h6>Metodo de Pagamento: Cartão</h6>
                <h6>Previsão de Entrega:23/05/2023</h6>
                <h6>Produto Entregue:21/05/2023</h6>
                </div>


            </div>

        </div>

        <Rodape/>

    </div>
)

}