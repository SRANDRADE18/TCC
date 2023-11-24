import './ProductCard.scss';

import React, { useContext, useEffect, useState } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import axios from 'axios';
import { navigate, useNavigate, useParams } from 'react-router-dom';
import storage from 'local-storage';
import AppContext from '../../../../context/AppContext';



// ...

export default function ProductCard({ data }) {

  const { cartItems, setCartItems } = useContext(AppContext);
  const [userInfo, setUserInfo] = useState('');
  const [produtos, setProdutos] = useState([]);
  const [produtoImagem, setProdutoImagem] = useState([]);


  const imagemUrl = `http://129.148.42.252:5021`;

  console.log(imagemUrl);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://129.148.42.252:5021/produto');
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);



  useEffect((id) => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://129.148.42.252:5021/produto/img/${id}');
        setProdutoImagem(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);


  async function BuscarInfos(id) {

    try {
      const response = await axios.get(`http://129.148.42.252:5021/produto/img/${id}`);
      const data = response.data;

      setProdutoImagem(data.ds_imagem1);
      setProdutoImagem(data.ds_imagem2);
      setProdutoImagem(data.ds_imagem3);
      setProdutoImagem(data.ds_imagem4);


    } catch (error) {
      console.error('Erro ao buscar imagem do produto ${id} :', error);
    }

  }

  useEffect(() => {
    BuscarInfos();
    if (!storage('user-info')) {
      setUserInfo('');
    } else {
      setUserInfo(storage('user-info'));
    }
  }, []);

  const handleAddCart = () => setCartItems([...cartItems, data]);

  function BTcarrinho() {
    window.location.href = "http://129.148.42.252:5021/comprapt2";
  }

  return (
    <section className="product-card">

      <div className="card__infos">


        <BsFillCartPlusFill className='button__add-cart' onClick={handleAddCart} />

        {produtos.map((produto) => (

          <div className='prod' key={produto.id_produto}>

            <img src="/assets/images/tenis/tenis_vegano_shoes_easeful_preto.png"/>

            <h2>{produto.nm_produto}</h2>
            <h2>{produto.vl_preco}</h2>

            <button onClick={BTcarrinho}>Compra</button>

          </div>

        ))}

      </div>



    </section>
  );
}