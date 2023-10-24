
import './Finalizar.scss'
import Rodape from '../../../components/Rodape/rodape';
import Header from '../../../components/Header/header';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Finalizar() {
    return (
        <div className='Finalizar-Compra'>
            <Header />
            <div className='Finalizar'>

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

                <div className='resumo-pedido'>

                    <h1>RESUMO DO PEDIDO</h1>

                    <div className='resumo-compra'>
                        <div className='produto-resumo'>
                            <h1>01 Produto</h1>
                            <h2>R$ 349,90</h2>

                            <h1>Entrega</h1>

                            <h3>Grátis</h3>

                        </div>

                        <div className='produto-total'>
                            <h1>Total</h1>
                            <h2>R$ 600,00</h2>

                            <h3>no cartão **********18</h3>

                        </div>
                    </div>



                </div>


            </div>
            <Rodape />
        </div>
    )
}