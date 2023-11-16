import "./admProdutoadd.scss";

import { ToastContainer, toast } from "react-toastify";


import { useState } from "react";

import { cadastrarProduto, enviarImagem } from "../../../api/cadastrarProduto";

import { Await } from "react-router-dom";

import { erro, error } from "jquery";








export default function Admaddproduto() {


  const tamanhos = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44]





  //////////////////////////////////


  const [nome, setnome] = useState('');
  const [preco, setpreco] = useState(0.0);
  const [avaliacao, setavaliacao] = useState(0.0);
  const [genero, setgenero] = useState('');
  const [estoque, setestoque] = useState(0.0);
  const [disponivel, setdisponivel] = useState('');
  const [descricao, setdescricao] = useState('');
  const [forro, setforro] = useState('');
  const [solado, setsolado] = useState('');
  const [palmilha, setpalmilha] = useState('');


  const [Imagem1, setimagem1] = useState();
  const [Imagem2, setimagem2] = useState();
  const [Imagem3, setimagem3] = useState();
  const [Imagem4, setimagem4] = useState();

  async function salvarClick() {

    const produtoooo = await cadastrarProduto({
      nome: nome,
      preco: preco,
      genero: genero,
      estoque: estoque,
      disponivel: disponivel,
      descricao: descricao,
      forro: forro,
      solado: solado,
      palmilha: palmilha
    });

    try {

      if (!Imagem1)
        throw new error('Escolha a imagem');
      if (!Imagem2)
        throw new error('Escolha a imagem');
      if (!Imagem3)
        throw new error('Escolha a imagem');

      if (!Imagem4)
        throw new error('Escolha a imagem');



      const produto = await cadastrarProduto(nome, preco, genero, estoque, disponivel, descricao, forro, solado, palmilha);

      if (produto && produto.data) {
        const Img1 = await enviarImagem(produto.data, Imagem1);
        const Img2 = await enviarImagem(produto.data, Imagem2);
        const Img3 = await enviarImagem(produto.data, Imagem3);
        const Img4 = await enviarImagem(produto.data, Imagem4);

        toast.success('Concluído');
      } else {
        toast.error('Erro ao obter dados do produto');
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }

  }





  ////////////////////////////////



  return (
    <div className="adm-page">

      <ToastContainer />

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

                  <div className="Nome"  >
                    <h3>img:</h3>
                    <input className="button" type="file" name="ds_cor" onChange={e => setimagem1(e.target.files[0])} />
                  </div>


                  <div className="Nome"  >
                    <h3>img:</h3>
                    <input className="button" type="file" name="ds_cor" onChange={e => setimagem2(e.target.files[0])} />
                  </div>


                  <div className="Nome" >
                    <h3>img:</h3>
                    <input className="button" type="file" name="ds_cor" onChange={e => setimagem3(e.target.files[0])} />
                  </div>


                  <div className="Nome"  >
                    <h3>img:</h3>
                    <input className="button" type="file" name="ds_cor" onChange={e => setimagem4(e.target.files[0])} />
                  </div>

                  <section className="imgs">

                    <img src="/assets/images/addprodutoADM/image94.png" alt="" />

                 
                 

                    <img src="/assets/images/addprodutoADM/image94.png" alt="" />

               

                  

                    <img src="/assets/images/addprodutoADM/image94.png" alt="" />

                

                  

                    <img src="/assets/images/addprodutoADM/image94.png" alt="" />

                  </section>


                </div>

                <div className="Info-Produto">
                  <h2>INFORMAÇÕES DO PRODUTO</h2>

                  <div>
                    <div className="Nome">
                      <h3>Nome:</h3>
                      <input type="text" name="nm_produto" value={nome} onChange={(e) => setnome(e.target.value)} />
                    </div>

                    <div className="Nome">
                      <h3>Preço:</h3>
                      <input type="number" name="vl_preco" value={preco} onChange={(e) => setpreco(e.target.value)} />
                    </div>

                    <div className="Nome">
                      <h3>Avaliação:</h3>
                      <input type="number" name="nr_avaliacao" value={avaliacao} onChange={(e) => setavaliacao(e.target.value)} />
                    </div>

                    <div className="Nome">
                      <h3>Gênero:</h3>
                      <input type="text" name="ds_genero" value={genero} onChange={(e) => setgenero(e.target.value)} />
                    </div>

                    <div className="Nome">
                      <h3>Estoque:</h3>
                      <input type="number" name="nr_estoque" value={estoque} onChange={(e) => setestoque(e.target.value)} />
                    </div>

                    <div className="Nome">
                      <h3>Disponível:</h3>
                      <input type="checkbox" name="bt_disponivel" checked={disponivel} onChange={(e) => setdisponivel(e.target.checked)} />
                    </div>

                    <div className="Nome">
                      <h3>Descrição:</h3>
                      <input type="text" name="ds_descricao" value={descricao} onChange={(e) => setdescricao(e.target.value)} />
                    </div>

                    <div className="Nome">
                      <h3>Forro:</h3>
                      <input type="text" name="ds_forro" value={forro} onChange={(e) => setforro(e.target.value)} />
                    </div>

                    <div className="Nome">
                      <h3>Solado:</h3>
                      <input type="text" name="ds_solado" value={solado} onChange={(e) => setsolado(e.target.value)} />
                    </div>

                    <div className="Nome">
                      <h3>Palmilha:</h3>
                      <input type="text" name="ds_palmilha" value={palmilha} onChange={(e) => setpalmilha(e.target.value)} />
                    </div>



                    <button onClick={salvarClick}>Cadastrar Produto</button>
                  </div>

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
