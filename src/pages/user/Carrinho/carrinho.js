import './carrinho.scss';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Header from '../../../components/Header/header.js';
import Rodape from '../../../components/Rodape/rodape.js';
import Tenis_galáxia from '../../assets/images/tenis/Tenis_galáxia.png'
import localiza from '../../assets/images/localiza-2.png'


export default function Carrinho() {

    return (
        <div className='carrinho-pagina'>
            <Header />

            <div className='Carrinho'>
                <h1>Meu carrinho</h1>
            </div>

            <div className='Carrinho-Produto'>

                <div className='test-carrinho'>
                    <div className='Linha-Carrinho'></div>

                    <div className='Test-Carrinho'>


                        <img className='Tenis_galáxia' src={Tenis_galáxia}></img>

                        <div className='Carrinho-Info'>

                            <h1>Bota Vegano Shoes Naturale Galaxía  </h1>

                            <h1>Vendido e entregue por <span className='texto-verde'>VGN Shoes</span></h1>

                            <h1>Entrega Normal:<span>Grátis</span></h1>

                            <div className='Carrinho-Salvar'>

                                <h2>Salvar para depois</h2>
                                <span></span>
                                <h2>Remover</h2>

                            </div>

                        </div>

                        <div className='Carrinho-Preco'>
                            <span />

                            <h3>R$349,90</h3>

                        </div>
                    </div>

                    <div className='Linha-Carrinho'></div>
                </div>

            </div>

            <div className='Carrinho-Produto'>

                <div className='test-carrinho'>



                    <div className='Test-Carrinho'>


                        <img className='Tenis_galáxia' src={Tenis_galáxia}></img>

                        <div className='Carrinho-Info'>

                            <h1>Bota Vegano Shoes Naturale Galaxía</h1>

                            <h1>Vendido e entregue por <span className='texto-verde'>VGN Shoes</span></h1>

                            <h1>Entrega Normal:<span>Grátis</span></h1>

                            <div className='Carrinho-Salvar'>

                                <h2>Salvar para depois</h2>
                                <span></span>
                                <h2>Remover</h2>

                            </div>

                        </div>

                        <div className='Carrinho-Preco'>
                            <span />

                            <h3>R$349,90</h3>

                        </div>
                    </div>

                    <div className='Linha-Carrinho'></div>
                </div>

            </div>

            <div className='resumo-do-pedido'>

                <div className='entrega'>

                    <h1>Escolha o tipo  de entrega na próxima etapa!</h1>
                    <h2>Entrega calculada para: </h2>

                    <div className='localiza'>
                        <img src={localiza} />
                    </div>


                </div>

            </div>

            <Rodape />



        </div>
    )


}