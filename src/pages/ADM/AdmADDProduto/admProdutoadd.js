import "./admProdutoadd.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import Rodape from "../../../components/Rodape/rodape";
import Header from "../../../components/Header/header";

export default function Admaddproduto() {
  const [nome, setnome] = useState([]);
  const [cor, setcor] = useState([]);
  const [tamanho, settamanho] = useState([]);
  const [Email, setEmail] = useState([]);
  const [senha, setsenha] = useState([]);

  const tamanhos = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44]

  function Adicionarproduto() { }


  //////////////////////////////////


  const [produto, setProduto] = useState({
    nm_produto: '',
    vl_preco: '',
    ds_genero: '',
    ds_cor: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/cadastrar-produto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(produto),
      });

      if (response.ok) {
        alert('Produto cadastrado com sucesso!');

        setProduto({
          nm_produto: '',
          vl_preco: '',
          ds_genero: '',
          ds_cor: '',
        });
      } else {
        const erro = await response.json();
        alert(`Erro ao cadastrar produto: ${erro.erro}`);
      }
    } catch (error) {
      console.error('Erro ao realizar a requisição:', error);
      alert('Ocorreu um erro ao cadastrar o produto. Por favor, tente novamente.');
    }
  };


  /////////////////////////////////

  const [imagem, setImagem] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImagem(file);
  };

  const Submit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('imagem', imagem);

      const response = await fetch('http://localhost:5000/produto/:id/imagem', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Imagem cadastrada com sucesso!');

        setImagem(null);
      } else {
        const erro = await response.json();
        alert(`Erro ao cadastrar imagem: ${erro.erro}`);
      }
    } catch (error) {
      console.error('Erro ao realizar a requisição:', error);
      alert('Ocorreu um erro ao cadastrar a imagem. Por favor, tente novamente.');
    }
  }

  ////////////////////////////////



  return (
    <div className="adm-page">


      <div className="ADM-add">
        <div className="adm-add">
          <div className="Filtro-ADM-add">

            <div className="ADM-Pessoa-add">
              <img src="/assets/images/Minha_Conta/do-utilizador 3.png" />
              <h2> oLá, Sr.Andrade </h2>
            </div>

            <p>Admin Panel</p>
            <p>Menu</p>
            <h1>Organizations</h1>
            <h1>Adicionar Produto</h1>
            <h1>Pedidos Finalizados</h1>
            <h1>Pedidos Realizados</h1>
          </div>

          <div className="ADM-Header">
            <div className="ADM-Cabecalho-add">
              <div className="hamburguer-icon">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>


            </div>

            <div className="adicionar-produto">
              <h2>Tela De Adicionar Produto</h2>
            </div>

            <div className="VGN-Shoes-Produto">
              <div className="Flex">
                <div className="Colar-img">

                  <form onSubmit={Submit}>
                    <div className="Nome">
                      <h3>Imagem1:</h3>
                      <input type="file" name="imagem" onChange={handleImageChange} />
                    </div>

                  </form>

                  <form onSubmit={Submit}>
                    <div className="Nome">
                      <h3>Imagem2:</h3>
                      <input type="file" name="imagem" onChange={handleImageChange} />
                    </div>

                  </form>

                  <form onSubmit={Submit}>
                    <div className="Nome">
                      <h3>Imagem3:</h3>
                      <input type="file" name="imagem" onChange={handleImageChange} />
                    </div>

                  </form>

                  <form onSubmit={Submit}>
                    <div className="Nome">
                      <h3>Imagem4:</h3>
                      <input type="file" name="imagem" onChange={handleImageChange} />
                    </div>

                  </form>

                  <section className="imgs">
                    <div className="img1-produto" style={{ `backgroundImage: url(${imagem})` }}></div>
                    <div className="img2-produto"></div>
                    <div className="img3-produto"></div>
                    <div className="img4-produto"></div>
                  </section>

                </div>

                <div className="Info-Produto">
                  <h2>INFORMAÇÕES DO PRODUTO</h2>

                  <form onSubmit={handleSubmit}>
                    <div className="Nome">
                      <h3>Nome:</h3>
                      <input type="text" name="nm_produto" value={produto.nm_produto} onChange={handleChange} />
                    </div>

                    <div className="Nome">
                      <h3>Preço:</h3>
                      <input type="number" name="vl_preco" value={produto.vl_preco} onChange={handleChange} />
                    </div>

                    <div className="Nome">
                      <h3>Gênero:</h3>
                      <input type="text" name="ds_genero" value={produto.ds_genero} onChange={handleChange} />
                    </div>

                    <div className="Nome">
                      <h3>Cor:</h3>
                      <input type="text" name="ds_cor" value={produto.ds_cor} onChange={handleChange} />
                    </div>

                    <button type="submit">Cadastrar Produto</button>
                  </form>

                </div>

              </div>
              <div className="desc">
                <div className="descricao">
                  <h3> Descrição </h3>
                  <label>
                    <textarea></textarea>
                  </label>
                </div>
                <div className="Tamanhos-add">

                  <h3>tamanhos</h3>


                  <div className='Comppra-pt_Tamanhos'>

                    {tamanhos.map(item =>
                      <label className='tamanhos'>
                        <input type='checkbox' />
                        <span className='selected'>{item}</span>
                      </label>)}

                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div >

    </div >
  );
}
