import "./adm.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import storage from 'local-storage';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Rodape from "../../../components/Rodape/rodape";
import Header from "../../../components/Header/header";



export default function Admpage() {

  function BTaddproduto() {
    window.location.href = "http://localhost:3000/Adicionar/Produto";
  }

  const navigate = useNavigate();

  useEffect(() => {
      if (!storage('login-adm')) {

          navigate('/Loginadm')
      }
  })

  return (
    <div className="ADM-page">

      <Header />

      <div className="ADM">
        <div className="adm">
          <div className="Filtro-ADM-add">

            <div className="ADM-Pessoa-add">
              <img src="/assets/images/Minha_Conta/do-utilizador 3.png" />
              <h2> oLá, Sr.Andrade </h2>
            </div>

            <p>Admin Panel</p>
            <p>Menu</p>
            <h1>Organizations</h1>
            <h1 onClick={BTaddproduto} >Adicionar Produto</h1>
            <h1>Pedidos Finalizados</h1>
            <h1>Pedidos Realizados</h1>
          </div>

          <div className="content-adm">


            <div className="VGN-Shoes">
              <div className="Shoes">
                <h1>lista de organizadores</h1>
                <label className="pesq">
                  <input type="search" placeholder="Pesquise um colaborador" />
                </label>
              </div>

              <div className="user-info">

                <table>
                  <tr className="hed">
                    <th> Nome </th>
                    <th> Organization </th>
                    <th> Action </th>
                  </tr>
                  <tr>
                    <td> Mahteus dos Santos Andrade  Mahteus dos Santos Andrade  Mahteus dos Santos Andrade</td>
                    <td> VGN Shoes™ </td>
                    <td> Trabalhar</td>
                  </tr>
                  <tr>
                    <td> Mahteus dos Santos Andrade</td>
                    <td> VGN Shoes™ </td>
                    <td> Trabalhar</td>
                  </tr>
                  <tr>
                    <td> Mahteus dos Santos Andrade</td>
                    <td> VGN Shoes™ </td>
                    <td> Trabalhar</td>
                  </tr>
                  <tr>
                    <td> Mahteus dos Santos Andrade</td>
                    <td> VGN Shoes™ </td>
                    <td> Trabalhar</td>
                  </tr>
                  <tr>
                    <td> Mahteus dos Santos Andrade</td>
                    <td> VGN Shoes™ </td>
                    <td> Trabalhar</td>
                  </tr>
                  <tr>
                    <td> Mahteus dos Santos Andrade</td>
                    <td> VGN Shoes™ </td>
                    <td> Trabalhar</td>
                  </tr>
                  <tr>
                    <td> Mahteus dos Santos Andrade</td>
                    <td> VGN Shoes™ </td>
                    <td> Trabalhar</td>
                  </tr>
                  <tr>
                    <td> Mahteus dos Santos Andrade</td>
                    <td> VGN Shoes™ </td>
                    <td> Trabalhar</td>
                  </tr>
                  <tr>
                    <td> Mahteus dos Santos Andrade</td>
                    <td> VGN Shoes™ </td>
                    <td> Trabalhar</td>
                  </tr>
                  <tr>
                    <td> Mahteus dos Santos Andrade</td>
                    <td> VGN Shoes™ </td>
                    <td> Trabalhar</td>
                  </tr>
                  <tr>
                    <td> Mahteus dos Santos Andrade</td>
                    <td> VGN Shoes™ </td>
                    <td> Trabalhar</td>
                  </tr>
                  <tr>
                    <td> Mahteus dos Santos Andrade</td>
                    <td> VGN Shoes™ </td>
                    <td> Trabalhar</td>
                  </tr>

                  
                </table>

              </div>

            </div>
          </div>
        </div>
      </div>

      <Rodape />
    </div>
  );
}
