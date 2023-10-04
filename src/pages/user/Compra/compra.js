import './compra.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import Header from '../../../components/Header/header.js';
import Rodape from '../../../components/Rodape/rodape.js';


export default function Compra() {

  function CheckButton() {
    const [isSelected, setIsSelected] = useState(false);

    const toggleSelection = () => {
      setIsSelected(!isSelected);
    };
  }

  return (
    <div className='Pagina-compra'>
      <Header />


      <div className='Produtos-compra'>

        <div className='Compra-Filtros'>

          <div className='Filtro-Preco'>

            <h1>PREÇOS</h1>

            <h2>200 R$ -- 1500R$</h2>

            <div className='Filter-Preco'>
              <input class="filter_range" type="range" ></input>
            </div>

          </div>

          <div className='Filtro-Tamanho'>

            <h1>Tamanhos</h1>

            <div className='Tamanhos-tenis'>


              <div className='test'>

                <input className='check-button' type="checkbox" />

                <h2>35</h2>

              </div>

              <div className='test'>

                <input className='check-button' type="checkbox" />

                <h2>35</h2>

              </div>

              <div className='test'>

                <input className='check-button' type="checkbox" />

                <h2>35</h2>

              </div>

              <div className='test'>

                <input className='check-button' type="checkbox" />

                <h2>35</h2>

              </div>

              <div className='test'>

                <input className='check-button' type="checkbox" />

                <h2>35</h2>

              </div>

              <div className='test'>

                <input className='check-button' type="checkbox" />

                <h2>35</h2>

              </div>

              <div className='test'>

                <input className='check-button' type="checkbox" />

                <h2>35</h2>

              </div>

              <div className='test'>

                <input type="checkbox" />

                <h2>35</h2>

              </div>

            </div>

          </div>

          <div className='Filtro-Genero'>

            <h1>Generos</h1>

            <div className='Filt-Genero01'>

              <div className='Modelos'>

                <input type="checkbox" />
                <h2>Masculino</h2>

              </div>

              <div className='Modelos'>

                <input type="checkbox" />
                <h2>Feminino</h2>

              </div>

              <div className='Modelos'>

                <input type="checkbox" />
                <h2>Unissex</h2>

              </div>

            </div>

          </div>


          <div className='Filtro-Genero'>

            <h1>Modelos</h1>

            <div className='Filt-Genero01'>

              <div className='Modelos'>

                <input type="checkbox" />
                <h2>Tênis</h2>

              </div>

              <div className='Modelos'>

                <input type="checkbox" />
                <h2>Botas</h2>

              </div>

              <div className='Modelos'>

                <input type="checkbox" />
                <h2>Sport</h2>
                
              </div>

            </div>

          </div>


          <div className='Filtro-Genero'>

            <h1>Cores</h1>

            <div className='Filtro-Cor'>

              <div className='Preto'></div>
              <div className='Roxo' ></div>
              <div className='Rosa' ></div>

            </div>

            <div className='Filtro-Cor'>

              <div className='Marrom'></div>
              <div className='Laranja' ></div>
              <div className='Verde' ></div>

            </div>

          </div>




        </div>


        <div className='Shoop-Vgn'>

          <div className='Shoop-compra'>

            <a href='http:./localhost:3000/compra_pt2'>

              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src="./assets/images/tenis/Tenis Rosa.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Tênis Vegano Shoes Sport Vegan Sweet Rose</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$249,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>

            </a>

            <a href='http:./localhost:3000/compra_pt2'>
              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src="./assets/images/tenis_vegano_shoes_esportivo_preto_ 3.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Tênis Vegano Shoes Rocket Sport Preto</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$249,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>
            </a>


            <a href='http:./localhost:3000/compra_pt2'>
              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src=".././assets/images/tenis_vegano_shoes_esportivo_preto_ 3.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Tenis Vegano Shoes Easeful Preto</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$249,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>
            </a>

            <a href='http:./localhost:3000/compra_pt2'>


              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src="./assets/images/tenis/Tenis_preto_laranja.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Tênis Vegano Shoes Strong Boost Vegan Laranja</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$249,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>
            </a>

            <a href='http:./localhost:3000/compra_pt2'>

              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src="./assets/images/tenis/Sapatilha.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Sapatilha Vegano Shoes Aquatic Vegan</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$249,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>

            </a>

            <a href='http:./localhost:3000/compra_pt2'>


              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src="./assets/images/tenis/tenis_vegano_shoes_esportivo_preto_ 3.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Tênis Vegano Shoes Sock coral</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$249,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>

            </a>

            <a href='http:./localhost:3000/compra_pt2'>

              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src="./assets/images/tenis/Tenis_galáxia.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Bota Vegano Shoes Naturale Galáxia</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$249,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>

            </a>

            <a href='http:./localhost:3000/compra_pt2'>
              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src="./assets/images/tenis/tenis_vegano_shoes_esportivo_preto_ 4.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Bota Vegano Shoes Naturale Premium Café Noir</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$249,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>
            </a>

            <a href='http:./localhost:3000/compra_pt2'>

              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src="./assets/images/tenis/tennis_saara.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Bota Vegano Shoes Saara Areia</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$249,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>

            </a>

            <a href='http:./localhost:3000/compra_pt2'>
              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src="./assets/images/tenis/tennis_Camara.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Tênis Vegano Shoes Street Preto/Câmara de ar</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$349,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>
            </a>

            <a href='http:./localhost:3000/compra_pt2'>

              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src="./assets/images/tenis/tenis_vegano_shoes_esportivo_Havana_ 5.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Tênis Vegano Shoes Street Havana</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$99,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>

            </a>

            <a href='http:./localhost:3000/compra_pt2'>

              <div className='Compra-Linha01'>

                <img className='tenis-Preto' src="./assets/images/tenis/tennis_Ultimo.png"></img>

                <div className='Compra-Info'>

                  <div className='Compra-Texto'>
                    <h1>Tênis casual Vegano Shoes Street Style Verde Musgo</h1>
                  </div>


                  <div className='Compra-Estrelas'>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                    <img src="/assets/images/Vector.svg"></img>
                  </div>

                  <div className='Compra-Preco'>
                    <h2>Frete grátis</h2>
                    <h3>R$249,90  ou 4x de 62</h3>
                  </div>


                </div>

              </div>

            </a>


          </div>

        </div>





      </div>


      <Rodape />



    </div>

  )

}