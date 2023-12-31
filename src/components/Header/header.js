import { Link } from "react-router-dom";
import { useState } from "react";
import "./header.scss";
import { Bsearch } from "react-icons";
import AppContext from "../../context/AppContext";
import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Header() {
  function BTcarrinho() {
    window.location.href = "/Carrinho";
  }

  function BTuser() {
    window.location.href = "/Criar/Conta";
  }

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);


  return (
    <div className="page-header">
      <div className="header">
        <div className="header-logo">
          <a href="/">
            <img
              className="img-logo"
              src="/assets/images/Header/logo tcc 2.png"
            />
          </a>
        </div>

        <motion.div className="header-input">
          <motion.input
            initial={{ boxShadow: "none" }}
            transition={{ duration: 0.5 }}
            whileFocus={{
              boxShadow: "0px 0px 10px #00ffbb",
              border: "1px solid #d8d8d8",
            }}
            placeholder="O que você está procurando?"
          />
          <button>
            <img src="/assets/images/pesq.png" />
            
          </button>
        </motion.div>

        <div className="header-menu">
          <button className="heart">
            <AiOutlineHeart className="red" />
          </button>

         
            <button
              type="button"
              className="heart"
              onClick={() => setIsCartVisible(!isCartVisible)}
            >
              <AiOutlineShoppingCart />
              {cartItems.length > 0 && (
                <span className="cart-status">{cartItems.length}</span>
              )}
            </button>
        


          <button
            type="button"
            className="heart"
            onClick={BTuser}
            
          >
            <AiOutlineLogin />
          </button>
        </div>
      </div>

      <div className="sub-menu">
        <div className="sub-menu-esq">
          <img src="/assets/images/Header/whatsapp 7.png" />
          <img src="/assets/images/Header/facebook (1).png" />
        </div>

        <div className="sub-menu-links">
          <a>ESPORTES</a>
          <a>HOMENS</a>
          <a>MULHERES</a>
        </div>

        <div className="sub-menu-dir">
          <img src="/assets/images/Header/instagram.png" />
          <img src="/assets/images/Header/twitter.png" />
        </div>
      </div>
    </div>
  );
}
