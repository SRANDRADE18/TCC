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
        const response = await axios.get('http://129.148.42.252:5021/produto');
        setProduto(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  async function BuscarInfos(id) {
    try {
      const response = await axios.get(`http://129.148.42.252:5021/produto/${id}`);
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
    window.location.href = "http://129.148.42.252:3021/Finalizar/compra";
  }

  const tamanhos = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44];

  return (
    <div className="pagina-compra-pt2">
      <Header />

      <div className="Compra-pt2">


        <div className="todoMundo">
          <div className="Compra-imgg">
            <div className="tenis-Grande">

            <img src="/assets/images/tenis/tenis_vegano_shoes_easeful_preto.png"/>

              <div className="Tenis-Menores">

              </div>
            </div>
          </div>

          <div className="Compra-pt_info">
            <h1>Disponibilidade: Imediata</h1>
            <h2>DESTAQUE</h2>

          

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


        <h1>O tênis Easeful da Vegano Shoes é um calçado esportivo vegano que está em alta na moda. Destaca-se pelo seu conforto, leveza e respirabilidade.</h1>
    

        </div>


        <div className="Descrisão-Produto">

          
        <h1>
            Gênero: Unissex <br></br>
            Cor:Preto <br></br>
            Forro: Cacharréu espuma de 4mm densidade 28 <br></br>
            Solado: Micro expandido 3D com sulcos de escoamento de água <br></br>
            Palmilha: E.V.A 7mm forro em tecido</h1>
  
        </div>
      </div>

      <Rodape />
    </div>
  );
}
