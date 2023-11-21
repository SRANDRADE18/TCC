import React, { useContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductCard.scss';
import storage from "local-storage"

import formatCurrency from '../../../../utils/formatCurrency';

import AppContext from '../../../../context/AppContext';


export default function ProductCard({ data }) {

  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => setCartItems([...cartItems, data]);

  function BTcarrinho() {
    window.location.href = "http://localhost:5000/comprapt2";
  }

  //////////////////////////////

  const [userInfo, setUserInfo] = useState('')

  const [produtos, setProdutos] = useState([]);
  const [produtoimagem1, setProdutoImagem1] = useState("");

  const [produtoImagem2, setProdutoImagem2] = useState("");
  const [produtoImagem3, setProdutoImagem3] = useState("");
  const [produtoImagem4, setProdutoImagem4] = useState("");

  const { id } = useParams();

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/produto');
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);


  const getImageUrl = (imageName) => {
    // Substitua as barras invertidas (\) por barras normais (/)
    const normalizedPath = imageName.replace(/\\/g, '/');
    return `http://localhost:5000/storage/tenis/${normalizedPath}`;
  };
  

  async function BuscarInfos(id) {


    const command = await axios.get(`http://localhost:5000/produto/${id}`)

    const data = command.data;

    setProdutoImagem1(data.ds_imagem1)
    setProdutoImagem2(data.imagem2)
    setProdutoImagem3(data.imagem3)
    setProdutoImagem4(data.imagem4)
  }

  useEffect(() => {
    BuscarInfos(id)
    if (!storage('user-info')) {
      setUserInfo('')
    }
    else {
      setUserInfo(storage('user-info'));
    }
  }, []);


  return (
    <section className="product-card">



      <div className="card__infos">

        {produtos.map((produto) => (

          <div className='prod' key={produto.id_produto}>

            

            <img src={`http://localhost:5000/storage/tenis${produtoimagem1}`} alt="" />

            <h2> {produto.nm_produto}</h2>
            <h2> {produto.vl_preco}</h2>
            <button onClick={BTcarrinho}>Compra <BsFillCartPlusFill /></button>
          </div>

        ))}

      </div>

      <button
        type="button"
        className="button__add-cart"
        onClick={handleAddCart}
      >
        <BsFillCartPlusFill />
      </button>

    </section>
  );
}



ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;