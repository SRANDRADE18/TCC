import './compra_pt2.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Header from '../components/Header/header';
import Rodape from '../components/Rodape/rodape.js';
import TenisEsportivopreto from '../assets/images/tenis/tenis_esportivo_preto.svg'
import Tenis1 from '../assets/images/compra_pt2/Tenis-img1.png'
import Tenis2 from '../assets/images/compra_pt2/Tenis-img2.png'
import Tenis3 from '../assets/images/compra_pt2/Tenis-img3.png'
import Tenis4 from '../assets/images/compra_pt2/Tenis-img4.png'
import Estrela from '../assets/images/Vector.svg';


    export default function compraPt2(){
        return(

            <div className='Pagina_Compra-pt2'>

                <Header/>

                <div className='Compra-pt2'>

                    <div className='Compra-imgg'>

                        <div className='tenis-Grande'>

                        <img src={TenisEsportivopreto}></img>

                       <div className='Tenis-Menores'>
                         <img src={Tenis1}/>
                         <img src={Tenis2}/>
                     

                     
                         <img src={Tenis3}/>
                         <img src={Tenis4}/>
                       </div>
                     
                        </div>

                    </div>

                    <div className='Compra-pt_info'>

                        <h1>Disponibilidade: Imediata</h1>
                        <h2>DESTAQUE</h2>
                        <h3>R$ 299,90</h3>
                        <h4>R$ 284,91 à vista com desconto</h4>
                        
                        <div className='Estrela-info-pt2'>
                          <img src={Estrela}></img>
                           <img src={Estrela}></img>
                           <img src={Estrela}></img>
                           <img src={Estrela}></img>
                           <img src={Estrela}></img>

                         </div>

                         <button className='Button-compra'>Comprar</button>

                         <h1>Cores</h1>
                         <div className='Filtro-Cor-pt2'>
            
                          <div className='Preto'></div>
                         <div className='Roxo' ></div>
                         <div className='Rosa' ></div>

                         </div>

                         <div className='Filtro-Cor-pt2'>

                          <div className='Marrom'></div>
                          <div className='Laranja' ></div>
                          <div className='Verde' ></div>

                         </div>

                         <div className='Comppra-pt_Tamanhos'>

                         <div className='Tamanhos-Definir'>
                         <h2>35</h2>
                         </div>

                         <div className='Tamanhos-Definir'>
                         <h2>36</h2>
                         </div>
                         <div className='Tamanhos-Definir'>
                         
                         <h2>37</h2>
                         </div>                       
                         <div className='Tamanhos-Definir'>
                         
                         <h2>38</h2>
                         </div>                        
                         <div className='Tamanhos-Definir'>
                         <h2>39</h2>
                         </div>

                         </div>

                         <div className='Comppra-pt_Tamanhos'>
                         <div className='Tamanhos-Definir'>
                         
                         <h2>40</h2>
                         </div>
                         <div className='Tamanhos-Definir'>
                         
                         <h2>41</h2>
                         </div>
                         <div className='Tamanhos-Definir'>
                       
                         <h2>42</h2>
                         </div>

                          <div className='Tamanhos-Definir'>
                       
                            <h2>43</h2>
                         </div>

                          <div className='Tamanhos-Definir'>
                       
                         <h2>44</h2>
                         </div>
                         </div>


                    </div>

                </div>


                <div className='Descrisão'>

                    <div className='Descrição-compra'>

                        <h1>O tênis Easeful da Vegano Shoes é um calçado esportivo vegano que está em alta na moda. Destaca-se pelo seu conforto, leveza e respirabilidade.</h1>

                    </div>

                    <div className='Descrisão-Produto'>

                        <h1>Gênero: Unissex <p></p> Cor:Preto <p></p> Indicado para: Dia a dia<p></p> Pisada: Neutra <p></p> Cabedal: Nylon mesh ray dublado spam 150g<p></p> Forro: Cacharréu espuma de 4mm densidade 28 <p></p>Solado: Micro expandido 3D com sulcos de escoamento de água <p></p>Palmilha: E.V.A 7mm forro em tecido</h1>

                    </div>

                </div>

                <Rodape/>

            </div>


        )



        
    }