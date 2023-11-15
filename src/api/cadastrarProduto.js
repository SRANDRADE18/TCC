import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function cadastrarProduto( nome, preco, avaliacao, genero, cor,estoque,destaque,disponivel,promocao, preco_promocao ){

    const resposta = await api.post('/cadastrar-produto',{
        
            nome: nome,
            preco: preco,
            avaliacao: avaliacao,
            genero: genero,
            cor:cor,
            estoque: estoque,
            destaque: destaque,
            disponivel: disponivel,
            promocao: promocao,
            preco_promocao: preco_promocao
          
    })
    return resposta.data;
}

export async function enviarImagem (id, Imagem ) {

    const formData = new FormData();

    formData.append(`imagem`,Imagem);

    const resposta = await api.post( `/produto/${id}/imagem `, formData, {
        headers:{
            "Content-Type": "multipart/form-data"
        },
    } )

    return resposta.status;

}