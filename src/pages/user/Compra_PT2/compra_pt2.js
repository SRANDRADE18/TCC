import "./compra_pt2.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import Rodape from "../../../components/Rodape/rodape";
import Header from "../../../components/Header/header";
import { useNavigate, useParams } from "react-router-dom";

import Cart from "../../../components/carrinhoT/car";

import AppContext from "../../../../context/AppContext";

export default function compraPt2() {
  const { cartItems, setCartItems } = useContext(AppContext);
  const [userInfo, setUserInfo] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [produtoImagem, setProdutoImagem] = useState("");
  const [DescricaoProduto, setDescricaoProduto] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/produto");
        setProdutos(response.data);
        setDescricaoProduto(data.ds_descricao);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  async function BuscarInfos(id) {
    try {
      const response = await axios.get(`http://localhost:5000/produto/${id}`);
      const data = response.data;

      setProdutoImagem(data.ds_imagem1);
    } catch (error) {
      console.error("Erro ao buscar informações do produto:", error);
    }
  }

  useEffect(() => {
    BuscarInfos(id);
    if (!storage("user-info")) {
      setUserInfo("");
    } else {
      setUserInfo(storage("user-info"));
    }
  }, [id]);

  const handleAddCart = () => setCartItems([...cartItems, data]);

  function BTfinalizar() {
    window.location.href = "http://localhost:3000/Finalizar/compra";
  }

  const tamanhos = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44];

  return (
    <div className="pagina-compra-pt2">
      <Header />

      <div className="Compra-pt2">
        {produtos.map((produto) => (
          <div key={produto.id_produto}>
            <h1>{produto.nm_produto}</h1>
          </div>
        ))}

        <div className="todoMundo">
          <div className="Compra-imgg">
            <div className="tenis-Grande">
              {produtos.map((produto) => (
                <div key={produto.id_produto}>
                  <img src={produtoImagem || produto.ds_imagem} alt="" />
                </div>
              ))}

              <div className="Tenis-Menores">
                {produtos.map((produto) => (
                  <div key={produto.id_produto}>
                    <img src={produtoImagem || produto.ds_imagem} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="Compra-pt_info">
            <h1>Disponibilidade: Imediata</h1>
            <h2>DESTAQUE</h2>
            <h3>R$ 299,90</h3>
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
        
          <h1>
            O tênis Easeful da Vegano Shoes é um calçado esportivo vegano que
            está em alta na moda. Destaca-se pelo seu conforto, leveza e
            respirabilidade.
          </h1>
        </div>

        <div className="Descrisão-Produto">
          <h1>
            Gênero: Unissex <br></br>
            Cor:Preto <br></br>
            Forro: Cacharréu espuma de 4mm densidade 28 <br></br>
            Solado: Micro expandido 3D com sulcos de escoamento de água{" "}
            <br></br>
            Palmilha: E.V.A 7mm forro em tecido
          </h1>
        </div>
      </div>

      <Rodape />
    </div>
  );
}
