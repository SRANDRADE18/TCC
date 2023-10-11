import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.scss';
import Rodape from '../../../components/Rodape/rodape';
import Header from '../../../components/Header/header';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Loading from '../../../components/loading/loding';



export default function landingPage() {

  return (

    
  function  Products (){

    const [loading ,setloading] = useState(false)
    
    useEffect ( () =>{
        setloading(false)
    })
    
  }

    (Loading ? <Loading/> :

    <div className="landing-Page">

    

      <Header />

      <div className='Promo-tenis'>

        <div className='texto'>
          <h1>Produtos 100% VEGANOS</h1>
          <p>Todos os produtos VGN Shoes são fabricados a partir de matérias-primas totalmente isentas de origem animal ou qualquer tipo de teste em animais. A VG Shoes tem o cuidado e responsabilidade de rastrear todo material que compõe os produtos, esse procedimento garante que nenhum tipo de borracha, poliuretano, cola, tecido, tintas ou até mesmo fôrmas e matrizes utilizadas na fabricação dos componentes tenham qualquer composição de origem animal. Além disso, existe a preocupação com o meio ambiente, por isso, prioriza-se o uso de materiais reciclados.</p>
        </div>

        <div className='plataforma'>

          <div className='Quadrados'>
            <img className='quadradinhos' src="/assets/images/qudrado.png" />
            <img className='quadradinhos' src="/assets/images/qudrado.png" />
            <img className='quadradinhos' src="/assets/images/qudrado.png" />
            <img className='quadradinhos' src="/assets/images/qudrado.png" />
            <img className='quadradinhos' src="/assets/images/qudrado.png" />
            <img className='quadradinhos' src="/assets/images/qudrado.png" />
          </div>


          <img className='Tenis-Parado' src="/assets/images/tenis na plataforma.png"></img>


        </div>
      </div>


      <CarouselProvider
        naturalSlideHeight={350}
        naturalSlideWidth={270}
        totalSlides={4}
        step={1}
        isIntrinsicHeight={true}
        visibleSlides={4}
        infinite={true}


      >
        <div className='compra-test'>
          <ButtonBack className='seta'> antérior </ButtonBack>

          <Slider>
            <Slide index={0}>
              <a className='inferno' href='http://localhost:3000/compra'>

                <div className='Tenis-01'>

                  <img className='tenis' src="/assets/images/tenis/tenis_vegano_shoes_esportivo_preto_ 3.png"></img>
                  <div className='infos-tenis01'>

                    <div className='Infos-text'>
                      <h1>Tênis Vegano Shoes
                        Rocket Sport Preto</h1>
                    </div>


                    <div className='estrelas'>
                      <img src="/assets/images/Vector.svg"></img>
                      <img src="/assets/images/Vector.svg"></img>
                      <img src="/assets/images/Vector.svg"></img>
                      <img src="/assets/images/Vector.svg"></img>
                      <img src="/assets/images/Vector.svg"></img>
                    </div>

                    <div className='info-compra'>
                      <h2>Frete grátis</h2>
                      <h3>R$249,90  ou 4x de 60</h3>
                    </div>

                  </div>

                </div>

              </a>
            </Slide>
            <Slide index={1}>
              <a className='inferno' href='http://localhost:3000/compra'>

                <div className='Tenis-01'>

                  <img className='tenis' src="/assets/images/tenis/tenis_vegano_shoes_esportivo_preto_ 3.png"></img>
                  <div className='infos-tenis01'>

                    <div className='Infos-text'>
                      <h1>Tênis Vegano Shoes
                        Rocket Sport Preto</h1>
                    </div>


                    <div className='estrelas'>
                      <img src="/assets/images/Vector.svg"></img>
                      <img src="/assets/images/Vector.svg"></img>
                      <img src="/assets/images/Vector.svg"></img>
                      <img src="/assets/images/Vector.svg"></img>
                      <img src="/assets/images/Vector.svg"></img>
                    </div>

                    <div className='info-compra'>
                      <h2>Frete grátis</h2>
                      <h3>R$249,90  ou 4x de 60</h3>
                    </div>

                  </div>

                </div>

              </a>
            </Slide>
            <Slide index={2}>
              <a className='inferno' href='http://localhost:3000/compra'>

                <div className='Tenis-01'>

                  <img className='tenis' src="/assets/images/tenis/tenis_vegano_shoes_esportivo_preto_ 3.png"></img>
                  <div className='infos-tenis01'>

                    <div className='Infos-text'>
                      <h1>Tênis Vegano Shoes
                        Rocket Sport Preto</h1>
                    </div>


                    <div className='estrelas'>
                      <img src="/assets/images/Vector.svg"></img>
                      <img src="/assets/images/Vector.svg"></img>
                      <img src="/assets/images/Vector.svg"></img>
                      <img src="/assets/images/Vector.svg"></img>
                      <img src="/assets/images/Vector.svg"></img>
                    </div>

                    <div className='info-compra'>
                      <h2>Frete grátis</h2>
                      <h3>R$249,90  ou 4x de 60</h3>
                    </div>

                  </div>

                </div>

              </a>
            </Slide>
            <Slide index={3}>
              <a className='inferno' href='http://localhost:3000/compra'>

                <div className='Tenis-01'>

                  <img className='tenis' src="/assets/images/tenis/tenis_vegano_shoes_esportivo_preto_ 3.png"></img>
                  <div className='infos-tenis01'>

                    <div className='Infos-text'>
                      <h1>Tênis Vegano Shoes
                        Rocket Sport Preto</h1>
                    </div>


                    <div className='estrelas'>
                      <img src="/assets/images/Vector.svg"></img>
                      <img src="/assets/images/Vector.svg"></img>
                      <img src="/assets/images/Vector.svg"></img>
                      <img src="/assets/images/Vector.svg"></img>
                      <img src="/assets/images/Vector.svg"></img>
                    </div>

                    <div className='info-compra'>
                      <h2>Frete grátis</h2>
                      <h3>R$249,90  ou 4x de 60</h3>
                    </div>

                  </div>

                </div>

              </a>
            </Slide>
          </Slider>

          <ButtonNext className='seta-2'> próximo </ButtonNext>
        </div>
      </CarouselProvider>


      <div className='Promo-tenis01'>

        <img className='tenis-Preto' src="/assets/images/tenis/tenis_vegano_shoes_easeful_preto.png"></img>
        <div className='promo-tenis-text'>
          <h1> <label>ESTILO <br></br></label> INOVADOR</h1>
          <p> Os novos tênis veganos combinam design moderno e contemporâneo, sem comprometer os valores éticos. Eles seguem as últimas tendências da moda, com uma variedade de estilos, cores e materiais que atendem aos gostos e preferências de todas as pessoas</p>

        </div>

      </div>

      <div className='Tenis-Branco'>

        <div className='Textos-103'>

          <div className='Texto1'>
            <h1>
              1. Se você se preocupa com os direitos dos animais e deseja evitar o uso de produtos derivados de animais, um tênis vegano é uma escolha adequada.
            </h1>
          </div>

          <div className='Texto3'>
            <h1>
              3. Evitar substâncias tóxicas: Muitos calçados de couro são tratados com produtos químicos, como corantes e solventes, que podem ser prejudiciais ao meio ambiente e à saúde humana.
            </h1>
          </div>

        </div>

        <img src="/assets/images/Tenis-Branco.png"></img>


        <div className='Texto1'>
          <h1>
            2.Sustentabilidade ambiental: Os tênis veganos são geralmente fabricados com materiais sintéticos e alternativos, como poliéster reciclado, borracha natural, lona e microfibras.
          </h1>
        </div>

      </div>

      <Rodape />


    </div> 
    
    )
    

  );
}

