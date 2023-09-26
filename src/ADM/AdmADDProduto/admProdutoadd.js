import './admProdutoadd.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Header from '../components/Header/header.js';
import Rodape from '../components/Rodape/rodape.js';
import Logo from '../assets/images/logo tcc02.png';
import Pessoa from '../assets/images/Minha_Conta/do-utilizador 3.png';
import Baixar from '../assets/image 94.png';

export default function Admaddproduto() {

    const [nome, setnome] = useState([]);
    const [cor, setcor] = useState([]);
    const [tamanho, settamanho] = useState([]);
    const [Email, setEmail] = useState([]);
    const [senha, setsenha] = useState([]);

    function Adicionarproduto() {


        
    }


    return (

        <div className='adm-page'>

            <Header />

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

                                <img src={Pessoa} />
                                <h2> oLá, Sr.Andrade </h2>

                            </div>
                        </div>



                        <div>
                            <h2>Tela De Adicionar Produto</h2>
                        </div>

                        <div className='VGN-Shoes-Produto'>


                            <div className='Flex'>


                                <div className='Colar-img'>


                                    <h2>Colar Imagem</h2>
                                    <img src={Baixar}></img>

                                    <h2>Descrição</h2>
                                    <input className='Descriçao-Input'></input>

                                </div>

                                <div className='Info-Produto'>

                                    <h2>INFORMAÇÕES DO PRODUTO</h2>

                                    <div className='Nome'>
                                        <h3>Nome</h3>
                                        <input></input>

                                    </div>

                                    <div className='Nome'>
                                        <h3>Numero</h3>
                                        <input></input>
                                        <h3>Preço</h3>
                                        <input></input>
                                    </div>

                                    <div className='Nome'>
                                        <h3>Promoção</h3>
                                        <input></input>

                                    </div>
                                    <div className='Nome'>
                                        <h3>Preço promoção</h3>
                                        <input></input>

                                    </div>

                                    <div className='Nome'>
                                        <h3>Genero</h3>
                                        <input></input>
                                        <h3>Cor</h3>
                                        <input></input>

                                    </div>

                                    <div className='Tamanhos-add'>
                                        <h3>tamanhos</h3>

                                        <div className='Tamanhos_02'>


                                            <input className='tamanho'></input>
                                            <input className='tamanho'></input>
                                            <input className='tamanho'></input>
                                            <input className='tamanho'></input>
                                            <input className='tamanho'></input>
                                            <input className='tamanho'></input>
                                            <input className='tamanho'></input>
                                            <input className='tamanho'></input>
                                            <input className='tamanho'></input>
                                            <input className='tamanho'></input>
                                            <input className='tamanho'></input>

                                        </div>



                                    </div>


                                </div>

                            </div>


                        </div>


                    </div>

                </div>


            </div>

         
        </div>
    )

}