import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';

import storage from 'local-storage';

import { AiFillEye } from "react-icons/ai";
import Rodape from "../../../components/Rodape/rodape";
import Header from "../../../components/Header/header";

export default function Login() {

  const [email, setemail] = useState("")
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const Olharsenha = (e) => {
    setSenha(e.target.value);
  };

  const handleMostrarSenhaToggle = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const navigate = useNavigate();

  async function fazerLogin() {
    try {
      const re = await axios.post('http://localhost:5000/login-user', {
        email: email,
        senha: senha
      });
      storage('login', re);

      navigate("/Meusdados")
    } catch (err) {

        toast.error( 'deu merda' )
      }

    }
  

  return (
    <div className="tela-login">
      <Header />

      <div className="Conta-Test">
        <div className="Bem-vindo">
          <div className="bem-vindo-login">
            <h1>Seja Bem-Vindo</h1>
            <p>
              Para se manter conectado conosco faça seu login com suas
              informações pessoais <br></br> <br></br> Não possuí uma conta?
            </p>

            <button onClick={() => { navigate("/Criar/conta") }}> Criar conta </button>
          </div>
        </div>

        <div className="cadastro">
          <div className="img"></div>

          <div className="criar-conta">
            <h1> Entra na sua Conta </h1>
          </div>

          <div className="rede-sociaveis">
            <img
              className="google"
              src="/assets/images/Redes_Sociais/Google.png"
            />
            <img
              className="rede-social"
              src="/assets/images/Redes_Sociais/facebook.png"
            />
            <img
              className="rede-social"
              src="/assets/images/Redes_Sociais/instagram.png"
            />
          </div>

          <div className="infos-cliente-login">
            <input className="inputEmail" type="search" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
            <div className="inputCliente">
              <input
                className="Input-senha"
                placeholder="Senha"
                type={mostrarSenha ? "text" : "password"}
                id="senha"
                name="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />

              <button className="revelador" onClick={handleMostrarSenhaToggle}>
                <AiFillEye />
              </button>
            </div>
          </div>

          <button onClick={fazerLogin} className="button-crie"> Entrar </button>
        </div>
      </div>

      <Rodape />
      <ToastContainer />
    </div>
  );
}