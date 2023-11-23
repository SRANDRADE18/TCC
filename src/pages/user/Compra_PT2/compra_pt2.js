import "./compra_pt2.scss";




import Rodape from "../../../components/Rodape/rodape";
import Header from "../../../components/Header/header";




export default function compraPt2() {
  

  function BTfinalizar() {
    window.location.href = "http://localhost:3000/Finalizar/compra";
  }

  const tamanhos = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44];

  return (
    <div className="pagina-compra-pt2">
      <Header />

      <div className="Compra-pt2">
        

        <div className="todoMundo">
          <div className="Compra-imgg">
            <div className="tenis-Grande">
             

              <div className="Tenis-Menores">
               
              </div>
            </div>
          </div>

          <div className="Compra-pt_info">
            <h1>Disponibilidade: Imediata</h1>
            <h2>DESTAQUE</h2>
            <h3>R$ 299,90</h3>
            <h4>R$ 284,91 à vista com desconto</h4>

            <div className="Estrela-info-pt2">
              <img src="../assets/images/Vector.svg"></img>
              <img src="../assets/images/Vector.svg"></img>
              <img src="../assets/images/Vector.svg"></img>
              <img src="../assets/images/Vector.svg"></img>
              <img src="../assets/images/Vector.svg"></img>
            </div>

            <button onClick={BTfinalizar} className="Button-compra">
              Comprar
            </button>

            <div className="Comppra-pt_Tamanhos">
              {tamanhos.map((item) => (
                <label className="tamanhos">
                  <input type="checkbox" />
                  <span className="selected">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="Descrisão">
        <div className="Descrição-compra">
        
          <h1>
            O tênis Easeful da Vegano Shoes é um calçado esportivo vegano que
            está em alta na moda. Destaca-se pelo seu conforto, leveza e
            respirabilidade.
          </h1>
        </div>

        <div className="Descrisão-Produto">
          <h1>
            Gênero: Unissex <br></br>
            Cor:Preto <br></br>
            Forro: Cacharréu espuma de 4mm densidade 28 <br></br>
            Solado: Micro expandido 3D com sulcos de escoamento de água{" "}
            <br></br>
            Palmilha: E.V.A 7mm forro em tecido
          </h1>
        </div>
      </div>

      <Rodape />
    </div>
  );
}
