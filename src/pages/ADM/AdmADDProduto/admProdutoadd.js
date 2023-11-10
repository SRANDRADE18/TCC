import "./admProdutoadd.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import Rodape from "../../../components/Rodape/rodape";
import Header from "../../../components/Header/header";

export default function Admaddproduto() {
  const [nome, setnome] = useState([]);
  const [cor, setcor] = useState([]);
  const [tamanho, settamanho] = useState([]);
  const [Email, setEmail] = useState([]);
  const [senha, setsenha] = useState([]);

  const tamanhos = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44]

  function Adicionarproduto() { }

  return (
    <div className="adm-page">


      <div className="ADM-add">
        <div className="adm-add">
          <div className="Filtro-ADM-add">

            <div className="ADM-Pessoa-add">
              <img src="/assets/images/Minha_Conta/do-utilizador 3.png" />
              <h2> oLá, Sr.Andrade </h2>
            </div>

            <p>Admin Panel</p>
            <p>Menu</p>
            <h1>Organizations</h1>
            <h1>Adicionar Produto</h1>
            <h1>Pedidos Finalizados</h1>
            <h1>Pedidos Realizados</h1>
          </div>

          <div className="ADM-Header">
            <div className="ADM-Cabecalho-add">
              <div className="hamburguer-icon">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>


            </div>

            <div className="adicionar-produto">
              <h2>Tela De Adicionar Produto</h2>
            </div>

            <div className="VGN-Shoes-Produto">
              <div className="Flex">
                <div className="Colar-img">

                  <h2> Adicionar Imagem</h2>
                  <div className="arrastar"></div>
                  <div className="Nome">
                    <h3> Imagens :</h3>
                    <input type="text" />
                  </div>

                </div>

                <div className="Info-Produto">
                  <h2>INFORMAÇÕES DO PRODUTO</h2>

                  <div className="Nome">
                    <h3> Nome :</h3>
                    <input type="text" />
                  </div>

                  <div className="Nome">

                    <h3> Preço : </h3>
                    <input type="number" />
                  </div>

                  <div className="Nome">
                    <h3> Genero : </h3>
                    <input type="select" />
                  </div>

                  <div className="Nome">
                    <h3> cor :</h3>
                    <input type="text" />
                  </div>

                </div>

              </div>
              <div className="desc">
                <div className="descricao">
                  <h3> Descrição </h3>
                  <label>
                    <textarea></textarea>
                  </label>
                </div>
                <div className="Tamanhos-add">
                  <h3>tamanhos</h3>


                  <div className='Comppra-pt_Tamanhos'>

                    {tamanhos.map(item =>
                      <label className='tamanhos'>
                        <input type='checkbox' />
                        <span className='selected'>{item}</span>
                      </label>)}

                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
