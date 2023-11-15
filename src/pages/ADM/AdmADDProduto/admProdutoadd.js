import "./admProdutoadd.scss";

import { useState } from "react";

import { cadastrarProduto, enviarImagem } from "../../../api/cadastrarProduto";


export default function Admaddproduto() {


  const tamanhos = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44]

 


  //////////////////////////////////


  const[nome, setnome]=useState('');
  const [preco, setpreco]=useState(0);
  
  const [genero,setgenero]=useState('');
  const [cor,setcor]=useState('');

  const [estoque,setestoque]=useState(0);
  
  const [disponivel, setdisponivel]=useState('');

  const [Desquicao,setdestricao]=useState('');

  const [precopromo, setprecopromo]=useState(0);

  const [imagem,setimagem]=useState('');

  async function salvarClick(){

    try {
      const r = await cadastrarProduto(nome,preco,genero,cor,estoque,disponivel,Desquicao,precopromo);

      alert('concluido')
    } catch (error) {

      alert(error.menssage)
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

                  <form>

                    <div className="Nome">
                      <h3>Imagem1:</h3>
                      <input type="file" name="imagem"  />
                    </div>

                  </form>

                  <form>
                    <div className="Nome">
                      <h3>Imagem2:</h3>
                      <input type="file" name="imagem"  />
                    </div>

                  </form>

                  <form>
                    <div className="Nome">
                      <h3>Imagem3:</h3>
                      <input type="file" name="imagem"  />
                    </div>

                  </form>

                  <form>
                    <div className="Nome">
                      <h3>Imagem4:</h3>
                      <input type="file" name="imagem"  />
                    </div>

                  </form>

                  <section className="imgs">
                  <div className="img1-produto" ></div>
                    <div className="img2-produto"></div>
                    <div className="img3-produto"></div>
                    <div className="img4-produto"></div>
                  </section>

                </div>

                <div className="Info-Produto">
                  <h2>INFORMAÇÕES DO PRODUTO</h2>

                  <form>
                    <div className="Nome">
                      <h3>Nome:</h3>
                      <input type="text" name="nm_produto" value={nome} onChange={e=>setnome(e.target.value)} />
                    </div>

                    <div className="Nome">
                      <h3>Preço:</h3>
                      <input type="number" name="vl_preco" value={preco} onChange={e=>setpreco(e.target.value)} />
                    </div>

                    <div className="Nome">
                      <h3>Gênero:</h3>
                      <input type="text" name="ds_genero" value={genero} onChange={e=>setgenero(e.target.value)} />
                    </div>

                    <div className="Nome">
                      <h3>Cor:</h3>
                      <input type="text" name="ds_cor" value={cor} onChange={e=>setcor(e.target.value)} />
                    </div>

                    <div className="Nome">
                      <h3>estoque:</h3>
                      <input type="text" name="ds_cor" value={estoque} onChange={e=>setestoque(e.target.value)} />
                    </div>

                  
                    <div className="Nome">
                      <h3>disponivel:</h3>
                      <input type="checkbox" name="ds_cor" checked={disponivel} value={disponivel} onChange={e=>setdisponivel(e.target.checked)} />
                    </div>

                    <div className="Nome">
                      <h3>Destricao:</h3>
                      <input type="text" name="ds_cor" value={Desquicao} onChange={e=>setdestricao(e.target.value)} />
                    </div>

                    <div className="Nome">
                      <h3>promocao:</h3>
                      <input type="text" name="ds_cor" value={precopromo} onChange={e=>setprecopromo(e.target.value)} />
                    </div>

                    <button type="submit" onClick={salvarClick}>Cadastrar Produto</button>
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
