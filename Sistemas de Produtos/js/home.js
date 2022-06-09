const form = document.querySelector('#pro-inf');
const tabela = document.querySelector('#tbody');
let idx = form.idx.value;
let usuarioId = Number(sessionStorage.getItem('logado'));
//LOGCHECKED
const session = localStorage.getItem("session");

checkLogged();

function checkLogged (){
    if(session) {
        sessionStorage.setItem("log", session);
        usuarioId = session;
    }

    if (!usuarioId) {
        window.location.href = "index.html"
        return;
    }

    /*const dataUser = localStorage.getItem(logado);
    if(dataUser){
        data = JSON.parse(dataUser);
    }*/

}

//salvar no localStorge
const atualizarLocalStorge = (produtos) => { localStorage.setItem('produtos', JSON.stringify(produtos)) }

//Recuperar os produtos
const recuperarLocalStorage = () => JSON.parse(localStorage.getItem('produtos') || '[]');

const salvarProduto = (e) => {
    e.preventDefault()

    //pegar dados do formulario
    const nome = form.nome.value;
    const preco = Number(form.preco.value);
    const prime = form.prime.checked;

    if(idx == 'novo'){
    const produtos = recuperarLocalStorage();
    //produtos.push({ id: produtos.length + 1, nome, preco, prime });
    let idp = 0;
    for(const pro of produtos){
        if(pro.usuarioId === usuarioId){
            idp = Number(pro.id)
        }
    };
    produtos.push({ id: idp+= 1, nome, preco, prime ,usuarioId});
   
    atualizarLocalStorge(produtos);
    preencherTabela();
    form.reset();
    }else{
         let produto = {id: idx, nome, preco, prime}
     atualizarProduto(idx, produto);
     preencherTabela();
     form.reset();
     idx = 'novo';


    }

}
const preencherTabela = () => {
    const produtos = recuperarLocalStorage()
    tabela.innerHTML = '';
    for (const produto of produtos) {
        if(produto.usuarioId === usuarioId){
        tabela.innerHTML += `
        
        <tr>
        <th scope="row">${produto.id}</th>
        <td>${produto.nome}</td>
        <td>${produto.preco}</td>
        <td>${produto.prime ? "sim" : "não"}</td>
        <td>
          <img type="button" width="40" src="./img/123.png" onclick="removerProduto(${produto.id})" />
          <img type="button"  width="40" src="./img/234.png" onclick="editarProduto(${produto.id}) "/>
        
        </td>
        
        </tr>
        
        `;
}


    }

}
//função de remover
const removerProduto = (id) => {
    const produtos = recuperarLocalStorage();
    const indexProduto = produtos.findIndex(produto => produto.id === id)
    if (indexProduto < 0) return;
    produtos.splice(indexProduto, 1);
    atualizarLocalStorge(produtos);
    alert('PRODUTO REMOVIDO!!');
    preencherTabela();

}

//função editar
const editarProduto = (id) => {
    const produtos = recuperarLocalStorage();
    const indexProduto = produtos.findIndex((produto) => produto.id === id)
    form.nome.value = produtos[indexProduto].nome;
    form.preco.value = produtos[indexProduto].preco;
    form.prime.checked = produtos[indexProduto].prime;
    idx = id;
}

const atualizarProduto = (id, produto) => {
    const produtos = recuperarLocalStorage();
    const indexProduto = produtos.findIndex((produto) => produto.id === id);
    produtos[indexProduto] = produto;
    atualizarLocalStorge(produtos);
}

//eventos
form === null || form === void 0 ? void 0 : form.addEventListener('submit', salvarProduto);
document.addEventListener('DOMContentLoaded', preencherTabela);

let sair = document.querySelector('#sair');

sair.addEventListener('click', function(){
    saindo()
});

function saindo(){
    sessionStorage.removeItem("logado");
    localStorage.removeItem("session");


    window.location.href = "cadastro.html"
}