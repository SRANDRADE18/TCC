
import "./admProdutoadd.scss";

import { ToastContainer, toast } from "react-toastify";


import { useState } from "react";




import axios from "axios";
import Header from "../../../components/Header/header";
import Rodape from './../../../components/Rodape/rodape';


export default function Admaddproduto() {


  const tamanhos = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44]


  //////////////////////////////////
  const [nome, setnome] = useState('');
  const [preco, setpreco] = useState('');
  const [avaliacao, setavaliacao] = useState();
  const [genero, setgenero] = useState('');
  const [estoque, setestoque] = useState();
  const [disponivel, setdisponivel] = useState('');
  const [descricao, setdescricao] = useState('');

  const [Imagem1, setimagem1] = useState('');

  const [previewImagem1, setPreviewImagem1] = useState('');

  const [Imagem2, setimagem2] = useState('');
  const [previewImagem2, setPreviewImagem2] = useState('');

  const [Imagem3, setimagem3] = useState('');
  const [previewImagem3, setPreviewImagem3] = useState('');

  const [Imagem4, setimagem4] = useState('');
  const [previewImagem4, setPreviewImagem4] = useState('');






  function escolherImg(inputfileId) {
    document.getElementById(inputfileId).click();
  }


  function imagemselc(e, identificador, imagemraiz) {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const fileUrl = reader.result; // Aqui está a URL base64
        identificador(fileUrl);
      };

      reader.readAsDataURL(selectedFile);
      imagemraiz(selectedFile);
    }
  }

  function limparImagem(identificador, imagemraiz, idinpt) {
    identificador('');
    imagemraiz('');
    const novoInput = document.createElement('input');
    novoInput.type = 'file';
    novoInput.id = idinpt;
    novoInput.addEventListener('change', (e) => imagemselc(e, identificador, imagemraiz));
    const inputAntigo = document.getElementById(idinpt); // Substitua 'capa' pelo ID correto
    inputAntigo.parentNode.replaceChild(novoInput, inputAntigo);
  };

  async function CadastrarProduto() {
    try {
      let produto = {
        nome: nome,
        preco: preco,
        avaliacao: avaliacao,
        genero: genero,
        estoque: estoque,
        disponivel: disponivel,
        descricao: descricao
      };
      const command = await axios.post("http://localhost:5000/produto/registrar", produto);
      toast.success("Produto Cadastrado");

      const idp = command.data;


      const imgsend1 = await enviarImagensProduto(idp.id, Imagem1, "Imagem1", 'ds_imagem1');
      const imgsend2 = await enviarImagensProduto(idp.id, Imagem2, "Imagem2", 'ds_imagem2');
      const imgsend3 = await enviarImagensProduto(idp.id, Imagem3, "Imagem3", 'ds_imagem3');
      const imgsend4 = await enviarImagensProduto(idp.id, Imagem4, "Imagem4", 'ds_imagem4');
    }

    catch (err) {
      toast.error(err.response.data.erro)
    }
  };

  async function enviarImagensProduto(id, imagem, texdt, campo) {
    try {
      if (!imagem) {
        toast.warning("Não foi possível cadastrar: " + `${texdt}`)
      }
      else {
        const formData = new FormData();
        formData.append('prodimg', imagem);

        const command = await axios.post(`http://localhost:5000/produto/${id}/imagens/${campo}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
        });

        toast.success("Imagem Cadastrada: " + `${texdt}`);
      }
    }
    catch (err) {
      toast.error(err.response.data.erro)
    }
  }

  ////////////////////////////////



  return (
    <div className="adm-page">

      <Header />

      <ToastContainer />

      <img src="http://localhost:5000/storage/tenis/87d3a3ea93ce341a7a31aa7641813fab" alt="" />

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
                <div className="imgs">
                  <div className="Colar-img"  >


                    <div className="addimg" >
                      <input type="file" id='imagemcapa1' onChange={e => imagemselc(e, setPreviewImagem1, setimagem1)} />
                      <label>Imagem 1</label>
                      <img src={previewImagem1} onClick={() => escolherImg('imagemcapa1')} />

                    </div>


                    <div className="addimg" >
                      <input type="file" id='imagemcapa2' onChange={e => imagemselc(e, setPreviewImagem2, setimagem2)} />
                      <label>Imagem 2</label>
                      <img src={previewImagem2} onClick={() => escolherImg('imagemcapa2')} />

                    </div>


                    <div className="addimg" >

                      <input type="file" id='imagemcapa3' onChange={e => imagemselc(e, setPreviewImagem3, setimagem3)} />
                      <label>Imagem 3</label>
                      <img src={previewImagem3} onClick={() => escolherImg('imagemcapa3')} />

                    </div>

                    <div className="addimg" >
                      <input type="file" id='imagemcapa4' onChange={e => imagemselc(e, setPreviewImagem4, setimagem4)} />
                      <label>Imagem 4</label>
                      <img src={previewImagem4} onClick={() => escolherImg('imagemcapa4')} />

                    </div>

                  </div>

                  <div className="removerImgs">

                    <button onClick={() => limparImagem(setPreviewImagem1, setimagem1, 'imagemcapa1')}>Remover</button>
                    <button onClick={() => limparImagem(setPreviewImagem2, setimagem2, 'imagemcapa2')}>Remover</button>
                    <button onClick={() => limparImagem(setPreviewImagem3, setimagem3, 'imagemcapa3')}>Remover</button>
                    <button onClick={() => limparImagem(setPreviewImagem4, setimagem4, 'imagemcapa4')}>Remover</button>

                  </div>
                </div>

                <div className="Info-Produto">
                  <h2>INFORMAÇÕES DO PRODUTO</h2>

                  <div className="infos">
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
            <div className=" cadastro">
              <button onClick={CadastrarProduto}>Cadastrar Produto</button>
            </div>
          </div>

        </div>
        <Rodape />
      </div >

    </div >
  );
}
