import "./admProdutoadd.scss";

import { ToastContainer, toast } from "react-toastify";


import { useState } from "react";

import { cadastrarProduto, enviarImagem } from "../../../api/cadastrarProduto";

import { Await } from "react-router-dom";

import { erro, error } from "jquery";
import axios from "axios";








export default function Admaddproduto() {


  const tamanhos = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44]


  //////////////////////////////////
  const [nome, setnome] = useState('');
  const [preco, setpreco] = useState(0);
  const [avaliacao, setavaliacao] = useState(0);
  const [genero, setgenero] = useState('');
  const [estoque, setestoque] = useState(0.0);
  const [disponivel, setdisponivel] = useState('');
  const [descricao, setdescricao] = useState('');

  const [Imagem1, setimagem1] = useState('');
  const [previewImagem1, setPreviewImagem1] = useState("");

  const [Imagem2, setimagem2] = useState('');
  const [previewImagem2, setPreviewImagem2] = useState("");

  const [Imagem3, setimagem3] = useState('');
  const [previewImagem3, setPreviewImagem3] = useState("");

  const [Imagem4, setimagem4] = useState('');
  const [previewImagem4, setPreviewImagem4] = useState("");

  async function cadastraProduto() {
    try {
      let produto = {
        nome: nome.trim(),
        preco: preco.trim(),
        avaliacao: avaliacao,
        genero: genero,
        estoque: estoque.trim(),
        disponivel: disponivel,
        descricao: descricao.trim()


      };

      const comand = await axios.post("http://localhost:5000/cadastrar-produto", produto);
      toast.success("Produto cadastrado");

      const idp = comand.data;

      const imgsend1 = enviarImagem(idp.id, Imagem1, "Imagem1", 'ds_Imagem1');
      const imgsend2 = enviarImagem(idp.id, Imagem2, "Imagem2", 'ds_Imagem2');
      const imgsend3 = enviarImagem(idp.id, Imagem3, "Imagem3", 'ds_Imagem3');
      const imgsen4  = enviarImagem(idp.id, Imagem4, "Imagem4", 'ds_Imagem4');
    } 
    
    
    catch (error) {
      toast.error(error.response.data.erro)
    }

  }


  function imagemselc(e, identificador, imagemraz) {
    const selectedFile = e.target.files[0];
    imagemraz(selectedFile)
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile);
      identificador(fileUrl);
    }
  }

  function limparImagem(indentificador, imagemraz, idinput) {
    indentificador('');
    imagemraz('');

    const novoInput = document.createElement('input');
    novoInput.type = 'file';
    novoInput.id = idinput;
    novoInput.addEventListener('change', (e) => imagemselc(e, indentificador, imagemraz));
    const inputAntigo = document.getElementById(idinput);
    inputAntigo.parentNode.removeChild(novoInput, inputAntigo);

  };

  async function enviarImagensProduto(id, imagem, texdt) {
    try {
        if (!imagem) {
            toast.warning("Não foi possível cadastrar: "+`${texdt}`)
        }
        else {
            const formData = new FormData();
            formData.append('prodimg', imagem);
        
            const command = await axios.post(`http://localhost:5000/produto/${id}/imagens`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            });

            toast.success("Imagem Cadastrada: "+`${texdt}`);
        }
    }
    catch (err) {
        toast.error(err.response.data.erro)
    }
}


  function escolherImg() {
    document.getElementById('imagemcapa').click();
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
                <div className="Colar-img"  >

                 
                <div className="addimg" >
                                <input type="file" id='imagemcapa' onChange={e => imagemselc(e, setPreviewImagem1, setimagem1)} />
                                <label>Imagem 1</label>
                                <img src={Imagem1} alt="Imagem1" onClick={() => escolherImg('imagem1')} />
                                <button onClick={() => limparImagem(setPreviewImagem1, setimagem1,'imagem1')}>Remover</button>

                  </div>

                  
                  <div className="addimg" >
                                <input type="file" id='imagemcapa' onChange={e => imagemselc(e, setPreviewImagem4, setimagem4)} />
                                <label>Imagem 2</label>
                                <img src={Imagem2} alt="Imagem2" onClick={() => escolherImg('imagem2')} />
                                <button onClick={() => limparImagem(setPreviewImagem2, setimagem2,'imagem2')}>Remover</button>

                  </div>

                  
                  <div className="addimg" >

                                <input type="file" id='imagemcapa' onChange={e => imagemselc(e, setPreviewImagem4, setimagem4)} />
                                <label>Imagem 2</label>
                                <img src={Imagem2} alt="Imagem2" onClick={() => escolherImg('imagem2')} />
                                <button onClick={() => limparImagem(setPreviewImagem2, setimagem2,'imagem2')}>Remover</button>

                  </div>

                  <div className="addimg" >
                                <input type="file" id='imagemcapa' onChange={e => imagemselc(e, setPreviewImagem4, setimagem4)} />
                                <label>Imagem 4</label>
                                <img src={Imagem4} alt="Imagem4" onClick={() => escolherImg('imagem4')} />
                                <button onClick={() => limparImagem(setPreviewImagem4, setimagem4,'imagem4')}>Remover</button>

                  </div>

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

                    <button onClick={cadastraProduto}>Cadastrar Produto</button>

                  </div>

                </div>

              </div>
              <div className="desc">

                <div className="descricao">
                  <h3> Descrição </h3>

                  <label>
                    <textarea value={descricao} onChange={(e) => setdescricao(e.target.value)} />
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
