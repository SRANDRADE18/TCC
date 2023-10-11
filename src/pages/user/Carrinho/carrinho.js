import './carrinho.scss';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import Rodape from '../../../components/Rodape/rodape';
import Header from '../../../components/Header/header';




export default function Carrinho() {

    return (
        <div className='carrinho-pagina'>
            

            <div className='Carrinho'>
                <h1 className='meu-carrinho'>Meu carrinho</h1>
                <img className='carrinho-icon' src="/assets/images/carrinho-de-compras-de-design-xadrez.png" />
            </div>

            <div className='Carrinho-Produto'>

                <div className='test-carrinho'>
                    <div className='linha'>
                        <div className='Linha-Carrinho'></div>
                    </div>


                    <div className='Test-Carrinho'>

                        <img className='Tenis_galáxia' src="/assets/images/tenis/Tenis_galáxia.png"></img>


                        <div className='Carrinho-Info'>

                            <h1>Bota Vegano Shoes Naturale Galaxía - R$349,90</h1>

                            <h1>Vendido e entregue por <span className='texto-verde'>VGN Shoes</span></h1>

                            <h1>Entrega Normal:<span>Grátis</span></h1>

                            <div className='Carrinho-Salvar'>
                                <img className='salvar-icon' src="/assets/images/salvar-instagram.png" />
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
                    <div className='linha'>
                        <div className='Linha-Carrinho'></div>
                    </div>

                </div>

            </div>

            <div className='Carrinho-Produto'>

                <div className='test-carrinho'>



                    <div className='Test-Carrinho'>


                        <img className='Tenis_galáxia' src="/assets/images/tenis/Tenis_galáxia.png"></img>

                        <div className='Carrinho-Info'>

                            <h1>Bota Vegano Shoes Naturale Galaxía</h1>

                            <h1>Vendido e entregue por <span className='texto-verde'>VGN Shoes</span></h1>

                            <h1>Entrega Normal:<span>Grátis</span></h1>

                            <div className='Carrinho-Salvar'>
                                <img className='salvar-icon' src="/assets/images/salvar-instagram.png" />

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

                    <div className='linha'>
                    <div className='Linha-Carrinho'></div>
                    </div>
                </div>

            </div>

            <div className='resumo-e-localizaçao'>
                <div className='localizaçao-1'>
                 <div className='localizaçao-2'>

                    <h1>Escolha o tipo  de entrega na próxima etapa!</h1>
                    <h2>Entrega calculada para: </h2>
                    <div className='informaçao-loc'>

                        <div className='icon-localizaçao'>
                            <img src="/assets/images/localiza-2.png" />

                        </div>

                        <div>
                            <p>Rua paraíso das garças</p>
                            <p>Chácara do Sol, São paulo - SP</p>
                            <p>CEP: 04857-726</p>
                        </div>
                    </div>
                    <div className='Linha-loc'></div>

                    <p>Digitar um novo CEP</p>


                 </div>
                </div>

                <div className='resumo'>
                    <h2>RESUMO DO PEDIDO </h2>
                    <div className='Linha-pedido'></div>
                    <div className='produto-entrega'>
                        <div className='produto'>
                            <h4>05 Produtos</h4>
                            <h4>entrega</h4>

                        </div>
                        <div className='valor-entrega'>
                            <h4>R$ 600,00</h4>
                            <h5>Grátis</h5>
                        </div>
                    </div>
                    <div className='Linha-pedido'></div>
                    <div>
                        <div className='total'>
                            <h4>Total</h4>
                        </div>
                        <div className='total-cartao'>
                            <h3>R$ 600,00</h3>
                            <p>no cartão ou á  vista no pix</p>
                        </div>

                        <div className='botoes'>
                            <Link to={'/compra'}>COMPRAR MAIS</Link>
                            <button >FINALIZAR</button>
                        </div>
                    </div>




                </div>

            </div>


        </div>
    )


}