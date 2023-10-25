import './Finalizar.scss';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import { motion } from 'framer-motion';
import Rodape from '../../../components/Rodape/rodape';
import Header from '../../../components/Header/header';
import Location from '../../../components/loacaldot/local';



export default function CarrinhoUser() {

    return (
        <div className='Finalizar'>

            <Header />

            <div className='Carrinho'>
                <h1 className='meu-carrinho'>Meu carrinho</h1>
                <img className='carrinho-icon' src="/assets/images/carrinho/carrinho-de-compras-de-design-xadrez.png" />
            </div>

            <div className='Carrinho-Produto'>

                <div className='test-carrinho'>


                    <div className='Test-Carrinho'>

                        <img className='Tenis_galáxia' src="/assets/images/tenis/Tenis_galáxia.png"></img>


                        <div className='Carrinho-Info'>

                            <h1>Bota Vegano Shoes Naturale Galaxía - R$349,90</h1>


                            <h1>Entrega Normal:<span>Grátis</span></h1>

                            <div className='Carrinho-Salvar'>
                                <img className='salvar-icon' src="/assets/images/carrinho/salvar-instagram.png" />
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


                </div>

            </div>

            <div className='Carrinho-Produto'>

                <div className='test-carrinho'>



                    <div className='Test-Carrinho'>


                        <img className='Tenis_galáxia' src="/assets/images/tenis/Tenis_galáxia.png"></img>

                        <div className='Carrinho-Info'>

                            <h1>Bota Vegano Shoes Naturale Galaxía</h1>


                            <h1>Entrega Normal:<span>Grátis</span></h1>

                            <div className='Carrinho-Salvar'>
                                <img className='salvar-icon' src="/assets/images/carrinho/salvar-instagram.png" />

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

                </div>

            </div>

            <h2 className='res'>RESUMO DO PEDIDO </h2>

            <div className='resumo-e-localizaçao'>

                <div className='resumo-do-pedido'>

                    <div className='localizaçao-1'>
                        <div className='localizaçao-2'>

                            <h1>
                                Escolha o tipo  de entrega na próxima etapa!
                            </h1>
                            <h2>
                                Entrega calculada para:
                            </h2>

                            <div className='informaçao-loc'>
                                <div className='icon-localizaçao'>

                                    <Location />

                                </div>

                                <div className='info-endereco'>
                                    <p>Rua paraíso das garças</p>
                                    <p>Chácara do Sol, São paulo - SP</p>
                                    <p>CEP: 04857-726</p>
                                </div>
                            </div>

                            <p>Digitar um novo CEP</p>

                        </div>


                    </div>
                </div>

                <div className='resumo'>
                    <div className='produto-entrega'>
                        <div className='produto'>
                            <h4>05 Produtos</h4>
                            <h4>Entrega</h4>

                        </div>
                        <div className='valor-entrega'>
                            <h4>R$ 600,00</h4>
                            <h5>Grátis</h5>
                        </div>
                    </div>
                    <div className='finalizar'>
                        <div className='total'>
                            <h4>Total</h4>
                            <h3>R$ 600,00</h3>

                        </div>
                        <div className='total-cartao'>
                            <p>no cartão ou á  vista no pix</p>
                        </div>

                        <div className='botoes'>
                            <Link to={'/compra'}>
                                <motion.button className='botaa'
                                    initial={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}>
                                    COMPRAR MAIS
                                </motion.button>
                            </Link>
                            <motion.button className='botaa'
                                initial={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}>
                                FINALIZAR
                            </motion.button>
                        </div>
                    </div>




                </div>

            </div>



            <Rodape />

        </div>  
   

    )

}