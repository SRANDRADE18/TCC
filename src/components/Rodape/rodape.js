import './rodape.scss'
import Pagamrnto from '../../assets/images/Pagamento.png'

export default function Rodape(){

    return(
        <div className='rodape'>

      

        <div className='roda'>

          <div className='Social'>
            <h1>Social</h1>
            <h2>Facebook</h2>
            <h2>Instagram</h2>
            <h2>Twitter</h2>
            <h2>Whatsapp</h2>
          </div>
          
          <div className='Social'>
            <h1>Ajuda</h1>
            <h2>Dúvidas Frequentes</h2>
            <h2>Trocas e Devoluções</h2>
            <h2>Atendimentos</h2>
            <h2>Termos de uso</h2>
          </div>

          <img src={Pagamrnto}></img>

          <div className='Social'>
            <h1>Entregas</h1>
            <h2>Frete grátis</h2>
            <h2>Entrega rápida</h2>
            <h2>Troca grátis</h2>
          </div>

        </div>
        </div>

    )
}