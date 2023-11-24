import "./compra_pt2.scss";
import axios from 'axios';

import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AppContext from '../../../context/AppContext';
import propTypes from 'prop-types';
import storage from 'local-storage';

import Rodape from "../../../components/Rodape/rodape";
import Header from "../../../components/Header/header";




export default function CompraPt2({ data }) {

  const [produto, setProduto] = useState([]);
  const [produtoImagem, setProdutoImagem] = useState("");
  const [Descricao, setDescricao] = useState("");
  const [userInfo, setUserInfo] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5021/produto');
        setProduto(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  async function BuscarInfos(id) {
    try {
      const response = await axios.get(`http://localhost:5021/produto/${id}`);
      const data = response.data;

      setProdutoImagem(data.ds_imagem1);

    } catch (error) {
      console.error('Erro ao buscar informações do produto:', error);
    }
  }

  useEffect(() => {
    BuscarInfos(id);
    if (!storage('user-info')) {
      setUserInfo('');
    } else {
      setUserInfo(storage('user-info'));
    }
  }, [id]);

  function BTfinalizar() {
    window.location.href = "http://localhost:3000/Finalizar/compra";
  }

  const tamanhos = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44];

  return (
    <div className="pagina-compra-pt2">
      <Header />

      <div className="Compra-pt2">


        <div className="todoMundo">
          <div className="Compra-imgg">
            <div className="tenis-Grande">

              {produto.map((produto) => (
                <div key={produto.id_produto}>

                  <img src={produtoImagem || produto.ds_imagem} alt="" />

                </div>
              ))}


              <div className="Tenis-Menores">

              </div>
            </div>
          </div>

          <div className="Compra-pt_info">
            <h1>Disponibilidade: Imediata</h1>
            <h2>DESTAQUE</h2>

            {produto.map((produto) => (
              <div className='prod' key={produto.id_produto}>



                <h3>{produto.vl_preco}</h3>

              </div>
            ))}

            <h4>R$ 284,91 à vista com desconto</h4>

            <div className="Estrela-info-pt2">
              <img src="../assets/images/Vector.svg"></img>
              <img src="../assets/images/Vector.svg"></img>
              <img src="../assets/images/Vector.svg"></img>
              <img src="../assets/images/Vector.svg"></img>
              <img src="../assets/images/Vector.svg"></img>
            </div>

            <button onClick={BTfinalizar} className="Button-compra">
              Comprar
            </button>

            <div className="Comppra-pt_Tamanhos">
              {tamanhos.map((item) => (
                <label className="tamanhos">
                  <input type="checkbox" />
                  <span className="selected">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="Descrisão">
        <div className="Descrição-compra">

          {produto.map((produto) => (
            <div className='prod' key={produto.id_produto}>


              <h1>{produto.ds_descricao}</h1>


            </div>
          ))}


        </div>


        <div className="Descrisão-Produto">

          {produto.map((produto) => (
            <div className='prod' key={produto.id_produto}>


              <h1>{produto.ds_descricao}</h1>


            </div>
          ))}

  
        </div>
      </div>

      <Rodape />
    </div>
  );
}
