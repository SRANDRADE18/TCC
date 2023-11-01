import "./ultimo_pedido.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import Rodape from "../../../components/Rodape/rodape";
import Header from "../../../components/Header/header";
import { motion } from "framer-motion";

export default function UltimoPedido() {
  return (
    <div className="pagina-ultimopedido">
      <Header />

      <div className="Conta-perfil">
        <img src="/assets/images/Minha_Conta/do-utilizador 3.png" />
        <h2> oLá, Sr.Andrade </h2>
      </div>

      <div className="Ultimo-Pedido">
        <div className="acao-UltimoPedido">
          <div className="menu">
            <img src="/assets/images/Minha_Conta/monitorando 1.png" />
            <h3>Pedidos</h3>
          </div>

          <div className="menu">
            <img src="/assets/images/Minha_Conta/troca 1.png" />
            <h3>Troca</h3>
          </div>

          <div className="menu">
            <img src="/assets/images/Minha_Conta/do-utilizador 3.png" />
            <h3>Meus Dados</h3>
          </div>

          <div className="menu">
            <img src="/assets/images/Minha_Conta/casa.png" />
            <h3>Endereços</h3>
          </div>

          <div className="menu">
            <img src="/assets/images/Minha_Conta/cartoes.png" />
            <h3>cartões Salvos</h3>
          </div>

          <div className="menu">
            <img src="/assets/images/Minha_Conta/saida.png" />
            <h3>Sair</h3>
          </div>
        </div>

        <div className="Pedidos01">

          <div className="pedidos">
            <div className="Tenis-Pedido">
              <img src="/assets/images/tenis/tenis_vegano_shoes_esportivo_preto_ 3.png" />

              <h4>
                Tênis Vegano Shoes Easeful <br></br>
                Cor: <a>Preto</a>{" "}  <br></br>
                Tamanho: <a>40</a>{" "} <br></br>
                Quantidade: 1 <br></br>
                Valor Unitario: <a> R$ 276,99 </a>{" "} <br></br>
              </h4>
            </div>

            <div className="Status-Pedido">
              <img src="/assets/images/Minha_Conta/Status.png" />

              <h5>
                Status: <a>Pedido entregue - 26/05/2023 13:00</a>{" "}
              </h5>

              <motion.button className="Cancelar"
                initial={{ backgroundImage: 'none' }}
                transition={{ duration: 0.5  }}
                whileHover={{ backgroundImage: ['linear-gradient( to right, #ff6969, #fff, #fff','linear-gradient( to right, #ff0000, #ff6969, #fff', 'linear-gradient( to right, #ff0000, #ff0000, #fff', 'linear-gradient( to right, #ff0000, #ff0000, #ff0000'] }}
              >
                Cancelar
              </motion.button>
              <button className="Acompanhar_Entrega">Acompanhar Entrega</button>
            </div>

            <div className="resumo_do_pedido">
              <h6>
                Resumo da Compra <br></br>
                Pedido: 108022102 <br></br>
                Data do Pedido:19/05/2023 <br></br>
                Valor Total:RS$273,99 <br></br>
                Metodo de Pagamento: Cartão <br></br>
                Previsão de Entrega:23/05/2023 <br></br>
                Produto Entregue:21/05/2023
              </h6>
            </div>
          </div>

          <div className="pedidos">
            <div className="Tenis-Pedido">
              <img src="/assets/images/tenis/tenis_vegano_shoes_esportivo_preto_ 3.png" />

              <h4>
                Tênis Vegano Shoes Easeful <br></br>
                Cor: <a>Preto</a>{" "}  <br></br>
                Tamanho: <a>40</a>{" "} <br></br>
                Quantidade: 1 <br></br>
                Valor Unitario: <a> R$ 276,99 </a>{" "} <br></br>
              </h4>
            </div>

            <div className="Status-Pedido">
              <img src="/assets/images/Minha_Conta/Status.png" />

              <h5>
                Status: <a>Pedido entregue - 26/05/2023 13:00</a>{" "}
              </h5>

              <button className="Cancelar">Cancelar</button>
              <button className="Acompanhar_Entrega">Acompanhar Entrega</button>
            </div>

            <div className="resumo_do_pedido">
              <h6>
                Resumo da Compra <br></br>
                Pedido: 108022102 <br></br>
                Data do Pedido:19/05/2023 <br></br>
                Valor Total:RS$273,99 <br></br>
                Metodo de Pagamento: Cartão <br></br>
                Previsão de Entrega:23/05/2023 <br></br>
                Produto Entregue:21/05/2023
              </h6>
            </div>
          </div>

          <div className="pedidos">
            <div className="Tenis-Pedido">
              <img src="/assets/images/tenis/tenis_vegano_shoes_esportivo_preto_ 3.png" />

              <h4>
                Tênis Vegano Shoes Easeful <br></br>
                Cor: <a>Preto</a>{" "}  <br></br>
                Tamanho: <a>40</a>{" "} <br></br>
                Quantidade: 1 <br></br>
                Valor Unitario: <a> R$ 276,99 </a>{" "} <br></br>
              </h4>
            </div>

            <div className="Status-Pedido">
              <img src="/assets/images/Minha_Conta/Status.png" />

              <h5>
                Status: <a>Pedido entregue - 26/05/2023 13:00</a>{" "}
              </h5>

              <button className="Cancelar">Cancelar</button>
              <button className="Acompanhar_Entrega">Acompanhar Entrega</button>
            </div>

            <div className="resumo_do_pedido">
              <h6>
                Resumo da Compra <br></br>
                Pedido: 108022102 <br></br>
                Data do Pedido:19/05/2023 <br></br>
                Valor Total:RS$273,99 <br></br>
                Metodo de Pagamento: Cartão <br></br>
                Previsão de Entrega:23/05/2023 <br></br>
                Produto Entregue:21/05/2023
              </h6>
            </div>
          </div>
          <div className="pedidos">
            <div className="Tenis-Pedido">
              <img src="/assets/images/tenis/tenis_vegano_shoes_esportivo_preto_ 3.png" />

              <h4>
                Tênis Vegano Shoes Easeful <br></br>
                Cor: <a>Preto</a>{" "}  <br></br>
                Tamanho: <a>40</a>{" "} <br></br>
                Quantidade: 1 <br></br>
                Valor Unitario: <a> R$ 276,99 </a>{" "} <br></br>
              </h4>
            </div>

            <div className="Status-Pedido">
              <img src="/assets/images/Minha_Conta/Status.png" />

              <h5>
                Status: <a>Pedido entregue - 26/05/2023 13:00</a>{" "}
              </h5>

              <button className="Cancelar">Cancelar</button>
              <button className="Acompanhar_Entrega">Acompanhar Entrega</button>
            </div>

            <div className="resumo_do_pedido">
              <h6>
                Resumo da Compra <br></br>
                Pedido: 108022102 <br></br>
                Data do Pedido:19/05/2023 <br></br>
                Valor Total:RS$273,99 <br></br>
                Metodo de Pagamento: Cartão <br></br>
                Previsão de Entrega:23/05/2023 <br></br>
                Produto Entregue:21/05/2023
              </h6>
            </div>
          </div>
          <div className="pedidos">
            <div className="Tenis-Pedido">
              <img src="/assets/images/tenis/tenis_vegano_shoes_esportivo_preto_ 3.png" />

              <h4>
                Tênis Vegano Shoes Easeful <br></br>
                Cor: <a>Preto</a>{" "}  <br></br>
                Tamanho: <a>40</a>{" "} <br></br>
                Quantidade: 1 <br></br>
                Valor Unitario: <a> R$ 276,99 </a>{" "} <br></br>
              </h4>
            </div>

            <div className="Status-Pedido">
              <img src="/assets/images/Minha_Conta/Status.png" />

              <h5>
                Status: <a>Pedido entregue - 26/05/2023 13:00</a>{" "}
              </h5>

              <button className="Cancelar">Cancelar</button>
              <button className="Acompanhar_Entrega">Acompanhar Entrega</button>
            </div>

            <div className="resumo_do_pedido">
              <h6>
                Resumo da Compra <br></br>
                Pedido: 108022102 <br></br>
                Data do Pedido:19/05/2023 <br></br>
                Valor Total:RS$273,99 <br></br>
                Metodo de Pagamento: Cartão <br></br>
                Previsão de Entrega:23/05/2023 <br></br>
                Produto Entregue:21/05/2023
              </h6>
            </div>
          </div>

          <div className="pedidos">
            <div className="Tenis-Pedido">
              <img src="/assets/images/tenis/tenis_vegano_shoes_esportivo_preto_ 3.png" />

              <h4>
                Tênis Vegano Shoes Easeful <br></br>
                Cor: <a>Preto</a>{" "}  <br></br>
                Tamanho: <a>40</a>{" "} <br></br>
                Quantidade: 1 <br></br>
                Valor Unitario: <a> R$ 276,99 </a>{" "} <br></br>
              </h4>
            </div>

            <div className="Status-Pedido">
              <img src="/assets/images/Minha_Conta/Status.png" />

              <h5>
                Status: <a>Pedido entregue - 26/05/2023 13:00</a>{" "}
              </h5>

              <button className="Cancelar">Cancelar</button>
              <button className="Acompanhar_Entrega">Acompanhar Entrega</button>
            </div>

            <div className="resumo_do_pedido">
              <h6>
                Resumo da Compra <br></br>
                Pedido: 108022102 <br></br>
                Data do Pedido:19/05/2023 <br></br>
                Valor Total:RS$273,99 <br></br>
                Metodo de Pagamento: Cartão <br></br>
                Previsão de Entrega:23/05/2023 <br></br>
                Produto Entregue:21/05/2023
              </h6>
            </div>
          </div>

          <div className="pedidos">
            <div className="Tenis-Pedido">
              <img src="/assets/images/tenis/tenis_vegano_shoes_esportivo_preto_ 3.png" />

              <h4>
                Tênis Vegano Shoes Easeful <br></br>
                Cor: <a>Preto</a>{" "}  <br></br>
                Tamanho: <a>40</a>{" "} <br></br>
                Quantidade: 1 <br></br>
                Valor Unitario: <a> R$ 276,99 </a>{" "} <br></br>
              </h4>
            </div>

            <div className="Status-Pedido">
              <img src="/assets/images/Minha_Conta/Status.png" />

              <h5>
                Status: <a>Pedido entregue - 26/05/2023 13:00</a>{" "}
              </h5>

              <button className="Cancelar">Cancelar</button>
              <button className="Acompanhar_Entrega">Acompanhar Entrega</button>
            </div>

            <div className="resumo_do_pedido">
              <h6>
                Resumo da Compra <br></br>
                Pedido: 108022102 <br></br>
                Data do Pedido:19/05/2023 <br></br>
                Valor Total:RS$273,99 <br></br>
                Metodo de Pagamento: Cartão <br></br>
                Previsão de Entrega:23/05/2023 <br></br>
                Produto Entregue:21/05/2023
              </h6>
            </div>
          </div>


        </div>

      </div>

      <Rodape />
    </div>
  );
}
