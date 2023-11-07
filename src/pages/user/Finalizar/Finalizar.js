import './Finalizar.scss';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useState } from 'react';

import { motion } from 'framer-motion';
import Rodape from '../../../components/Rodape/rodape';
import Header from '../../../components/Header/header';
import Location from '../../../components/loacaldot/local';



export default function CarrinhoUser() {

    const [cep, setCep] = useState('');
    const [resultado, setResultado] = useState(null);
    

        const consultarCep = async () => {
            try {
                const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                const data = await response.json();
                setResultado(data);
            } catch (error) {
                console.error(error);
            }
        };
    



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

                            <div>
                                <h1>Consulta de CEP</h1>
                                <input
                                    type="text"
                                    placeholder="Digite o CEP"
                                    value={cep}
                                    onChange={(e) => setCep(e.target.value)}
                                />
                                <button onClick={consultarCep}>Consultar</button>

                                {resultado && (
                                    <div>
                                        <p>CEP: {resultado.cep}</p>
                                        <p>Logradouro: {resultado.logradouro}</p>
                                        <p>Bairro: {resultado.bairro}</p>
                                        <p>Cidade: {resultado.localidade}</p>
                                        <p>Estado: {resultado.uf}</p>
                                    </div>
                                )}
                            </div>

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