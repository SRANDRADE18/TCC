import "./criar_conta.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import Rodape from "../../../components/Rodape/rodape";
import Header from "../../../components/Header/header";
import { AiFillEye} from "react-icons/ai";
import InputMask from "react-input-mask";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Criar_conta() {
  //////////////////////////////////////////////////////////
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [nascimento, setData] = useState("");
  const [email, setEmail] = useState("");

  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const Olharsenha = (e) => {
    setSenha(e.target.value);
  };

  const handleMostrarSenhaToggle = () => {
    setMostrarSenha(!mostrarSenha);
  };

  function handleError() {
    toast.error('Mensagem error');
  }

  async function Cadastrar() {
   try{
    const InfoCliente = {
      nome: nome,
      cpf: cpf,
      nascimento: nascimento,
      email: email,
      senha: senha
    }

    const url = 'http://localhost:5021/criarconta' 
    const resposta = await axios.post(url, InfoCliente)

    if(resposta.status === 200){
      toast.success('Contra criada com sucesso');
    }

    if(resposta.status === 200){
      window.location.href = 'http://localhost:3000/Login'
    }
    
   }
   catch (err) {
    toast.error(err.response.data.erro);
  }
  }

  ///////////////////////////////////////////////////////////////

  return (
    <div className="Criar-Conta">
      <Header />

      <div className="Conta-Test">
        <div className="Bem-vindo02">
          <div className="Bem-vindo03">
            <h1>Seja Bem-Vindo</h1>
            <p>
              Para se manter conectado conosco faça seu login com suas
              informações pessoais
            </p>

            <button className="login-button"> Login </button>
          </div>
        </div>

        <div className="cadastro-cliente">
          <div className="img"></div>

          <div className="criar-conta">
            <h1> crie sua conta </h1>
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

          <div className="infos-cliente">
            <input
              className="Input-criar_conta"
              type="text"
              placeholder="Nome Completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <InputMask
              mask="999.999.999-99"
              className="Input-criar_conta"
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />

            <InputMask
              mask="99/99/9999"
              className="Input-criar_conta-data"
              type="text"
              placeholder="data"
              value={nascimento}
              onChange={(e) => setData(e.target.value)}
            />

            <input
              className="Input-criar_conta"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="div-senha">
              <input
                className="Input-senha"
                placeholder="Senha"
                type={mostrarSenha ? "text" : "password"}
                id="senha"
                name="senha"
                value={senha}
                onChange={Olharsenha}
              />


              <button
              className="revelador" onClick={handleMostrarSenhaToggle}
              >
                <AiFillEye />
              </button>
            </div>
          </div>

          <p>
            {" "}
            Já tem uma conta? <Link to="/Login"> Entrar. </Link>
          </p>

          <button className="cadastro-button" onClick={Cadastrar}>
            {" "}
            Criar Conta{" "}
          </button>
        </div>
      </div>

      <Rodape />
      <ToastContainer/>
    </div>
  );
}
