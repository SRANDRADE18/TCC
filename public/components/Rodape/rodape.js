import './rodape.scss'
import Pagamrnto from '../../assets/images/Pagamento.png'
import '../../fonts.scss'
export default function Rodape() {

  return (
    <div className='rodape'>



      <div className='roda'>

        < div className='Roda-Test'>

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

      <a>© VGN Shoes 2020 - 2023. Todos os direitos reservados. | Contrato de compra e venda | *Frete Grátis: Confira as regras.</a>
      <br />
      <a>VGN COMÉRCIO DIGITAL LTDA. - CNPJ: 11.200.418/0006-73 - Estrada Municipal Luiz Lopes Neto, 617 - Bairro dos Tenentes, CEP: 37640-915, Extrema, MG, Brasil.</a>
    </div>

  )
}