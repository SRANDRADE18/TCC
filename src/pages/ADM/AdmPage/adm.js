import "./adm.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import Rodape from "../../../components/Rodape/rodape";
import Header from "../../../components/Header/header";

export default function Admpage() {
  return (
    <div className="ADM-page">
      <Header />

      <div className="ADM">
        <div className="adm">
          <div className="Filtro-ADM">
            <img
              className="logo"
              src="/assets/images/Header/logo tcc 2.png"
            ></img>
            <p>Admin Panel</p>
            <p>Menu</p>
            <h1>Organizations</h1>
            <h1>Adicionar Produto</h1>
            <h1>Pedidos Finalizados</h1>
            <h1>Pedidos Realizados</h1>
          </div>

          <div className="ADM-Header">
            <div className="ADM-Cabecalho">
              <div className="hamburguer-icon">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>

              <div className="ADM-Pessoa">
                <img src="/assets/images/Minha_Conta/do-utilizador 3.png" />
                <h2> oLá, Sr.Andrade </h2>
              </div>
            </div>
          </div>

          <div className="VGN-Shoes">
            <div className="Shoes">
              <h1>lista de organizadores</h1>
            </div>

            <div className="Sr-no">
              <h1>Nome</h1>
              <h1>Organization</h1>
              <h1>Action</h1>
            </div>

            <div className="info-usuario">
              <div className="Fulano">
                <h1>Matheus Andrade</h1>
              </div>

              <div className="Fulano">
                <h2>Organization</h2>
              </div>

              <div className="Fulano">
                <h3>Action</h3>
              </div>
            </div>

            <div className="info-usuario">
              <div className="Fulano">
                <h1>Matheus Andrade</h1>
              </div>

              <div className="Fulano">
                <h2>Organization</h2>
              </div>

              <div className="Fulano">
                <h3>Action</h3>
              </div>
            </div>

            <div className="info-usuario">
              <div className="Fulano">
                <h1>Matheus Andrade</h1>
              </div>

              <div className="Fulano">
                <h2>Organization</h2>
              </div>

              <div className="Fulano">
                <h3>Action</h3>
              </div>
            </div>

            <div className="info-usuario">
              <div className="Fulano">
                <h1>Matheus Andrade</h1>
              </div>

              <div className="Fulano">
                <h2>Organization</h2>
              </div>

              <div className="Fulano">
                <h3>Action</h3>
              </div>
            </div>

            <div className="info-usuario">
              <div className="Fulano">
                <h1>Matheus Andrade</h1>
              </div>

              <div className="Fulano">
                <h2>Organization</h2>
              </div>

              <div className="Fulano">
                <h3>Action</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Rodape />
    </div>
  );
}
