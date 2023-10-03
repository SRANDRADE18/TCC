import './rodape.scss'
import Pagamrnto from '../../assets/images/Pagamento.png'
import '../../assets/fonts/fonts.scss'
import metodopag from '../../assets/images/metodo-pag.svg' 
export default function Rodape() {

  return (
    <div className='pag-rodape'>
      <div className='linha-fantasma'></div>
      
      <div className='content'>
        <div className='cards'>
          <h1>Social</h1>
          <a>Facebook</a>
          <a>Instagram</a>
          <a>Twitter</a>
          <a>Whatsapp</a>
        </div>
        <div className='cards'>
         <h1>Ajuda</h1>
          <a>Dúvidas Frequentes</a>
          <a>Trocas e Devoluções</a>
          <a>Atendimentos</a>
          <a>Termos de uso</a>
        </div>
        <div className='cards' id='card-1'>
          <h1>Entregas</h1>
          <a>Frete grátis</a>
          <a>Entrega rápida</a>
          <a>Troca grátis</a>
          <a>ㅤ</a>
        </div>
        <div className='cards' id='card-pag'>
          <h1>Metodos de Pagamento</h1>
          <img src={metodopag}></img>
        </div>
      </div>
      <div className='linha-fantasma'></div>
      <div className='footer-content'>
        <h6>© VGN Shoes 2020 - 2023. Todos os direitos reservados. | Contrato de compra e venda | *Frete Grátis: Confira as regras.</h6>

        <h6>VGN COMÉRCIO DIGITAL LTDA. - CNPJ: 11.200.418/0006-73 - Estrada Municipal Luiz Lopes Neto, 617 - Bairro dos Tenentes, CEP: 37640-915, Extrema, MG, Brasil.</h6>
      </div>
    </div>
  )
}