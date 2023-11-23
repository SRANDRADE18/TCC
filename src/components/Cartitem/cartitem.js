import React, { useContext,useEffect,useState } from 'react';
import propTypes from 'prop-types';
import { BsCartDashFill } from 'react-icons/bs';
import './cartitem.scss';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';
import { Link } from "react-router-dom";
import axios from 'axios';
import {  useParams } from 'react-router-dom';
import storage from "local-storage"
import { BsFillCartPlusFill } from 'react-icons/bs';





export default function CartItem({ data }) {

  const { cartItems, setCartItems } = useContext(AppContext);
  

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
  };





  ////////////////////////////


  async function BuscarInfos(id) {


    const command = await axios.get(`http://localhost:5000/produto/${id}`)

    const data = command.data;

    setProdutoImagem1(data.ds_imagem1)
    setProdutoImagem2(data.imagem2)
    setProdutoImagem3(data.imagem3)
    setProdutoImagem4(data.imagem4)
  }

  const [userInfo, setUserInfo] = useState('')

  const [produtos, setProdutos] = useState([]);
  const [produtoimagem1, setProdutoImagem1] = useState("");

  const [produtoImagem2, setProdutoImagem2] = useState("");
  const [produtoImagem3, setProdutoImagem3] = useState("");
  const [produtoImagem4, setProdutoImagem4] = useState("");

  const { id } = useParams();

  useEffect(() => {
    BuscarInfos(id)
    if (!storage('user-info')) {
      setUserInfo('')
    }
    else {
      setUserInfo(storage('user-info'));
    }
  }, []);

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

  return (
    <section className="cart-item">

      {produtos.map((produto) => (

        <div className='prod' key={produto.id_produto}>

          <img src={`http://localhost:5000/storage/tenis${produtoimagem1}`} alt="" />

          <h3 className="cart-item-title"> {produto.nm_produto}</h3>
          <h3 className="cart-item-title"> {formatCurrency(produto.vl_preco)}</h3>
          <button type="button"
          className="button__remove-item" onClick={handleRemoveItem}><BsCartDashFill /></button>
        </div>

      ))}

     

    </section>
  );
}

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;