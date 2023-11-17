import './loginadm.scss';
import axios from 'axios';
import { useState } from 'react';

import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


import Rodape from '../../../components/Rodape/rodape';
import Header from '../../../components/Header/header';




export default function Login_ADM() {

    const [login, setlogin] = useState("");
    const [senha, setsenha] = useState("");

    const navigate = useNavigate();


    async function fazerLoginadm() {
      try {
        const add = await axios.post('http://localhost:5000/login-adm', {
          login: login,
          senha: senha
        });
        storage('login-adm', add);
  
        navigate("/Admpage")
      } catch (error) {
        toast.error('deu merda')
  
      }
    }

    return (

        <div className='login-adm'>

            <Header />

            <div className='Conta-Test'>

                <div className='Bem-vindo'>

                    <div className='bem-vindo-login'>

                        <h1>Seja Bem-Vindo</h1>
                        <p>Essa é a parte de login do administrador do site, preencha as informações para se conectar na administração </p>

                    </div>

                </div>

                <div className='cadastro'>

                    <div className='img'>

                    </div>

                    <div className='criar-conta'>
                        <h1> Login Administrativo </h1>
                    </div>

                    <div className='infos-cliente-login'>

                        <input type="search" placeholder='Email' value={login} onChange={(e) => setlogin(e.target.value)} />
                        <input type="search" placeholder='Senha' value={senha} onChange={(e) => setsenha(e.target.value)} />

                    </div>


                    <button onClick={fazerLoginadm}> Fazer login </button>

                </div>
            </div>



            <Rodape />
            <ToastContainer/>

        </div>
    )

}