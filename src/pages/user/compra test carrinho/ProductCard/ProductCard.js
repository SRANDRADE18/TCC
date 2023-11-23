import './ProductCard.scss';



import React, { useContext, useEffect, useState } from 'react';

import propTypes from 'prop-types';

import { BsFillCartPlusFill } from 'react-icons/bs';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';



import storage from 'local-storage';


import AppContext from '../../../../context/AppContext';



// ...

export default function ProductCard({ data }) {
  
  const { cartItems, setCartItems } = useContext(AppContext);
  const [userInfo, setUserInfo] = useState('');
  const [produtos, setProdutos] = useState([]);
  const [produtoImagem, setProdutoImagem] = useState(""); 
  const navigate = useNavigate();
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

  async function BuscarInfos(id) {
    try {
      const response = await axios.get(`http://localhost:5000/produto/${id}`);
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

  const handleAddCart = () => setCartItems([...cartItems, data]);

  function BTcarrinho() {
    window.location.href = "http://localhost:5000/comprapt2";
  }

  return (
    <section className="product-card">

      <div className="card__infos">

        <BsFillCartPlusFill className='button__add-cart' onClick={handleAddCart} />

        {produtos.map((produto) => (
          <div className='prod' key={produto.id_produto}>
       

            <img src={produtoImagem || produto.ds_imagem} alt="" />
            <h2>{produto.nm_produto}</h2>
            <h2>{produto.vl_preco}</h2>
            <button onClick={BTcarrinho}>Compra</button>
          </div>
          
        ))}

      </div>

    </section>
  );
}


