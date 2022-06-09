/*
document.querySelector("#logar").addEventListener("click", function(event){
    event.preventDefault();
    let login = document.querySelector("#login").value
    let senha = document.querySelector("#senha").value;
    listarUsuarios(login, senha)
   
})
function listarUsuarios(login, senha) {
  let dataBank_usuarios = JSON.parse(localStorage.getItem('usuário'));
  
  let usuario = {
    login: "", 
    senha: ""
  }
  let fieldset = document.querySelector("fieldset");
  let p = document.createElement("p");
  dataBank_usuarios.forEach(element=>{
    se houver apenas um parâmetro, não precisa
    colocar parênteses ma arrow function
    if(element.login === login && element.senha === senha){
     // window.location.href = "home.html";
      //direcionamento para outra página
      usuario.login = login;
      usuario.senha = senha;
    }
 if(usuario.login === login && usuario.senha === senha){
   window.location.href = "home.html"
 }else{
   p.innerText = "email ou senha incorreto";
   p.style.color = "red"
   fieldset.appendChild(p)
 }
  });
  
}*/
  //getItem(chave): pega os dados salvos no navegador por meio de suas chaves
  //JSON.parse(), converte valores para objeto, nesse caso, ele converte uma string para objeto.


  document.querySelector('#logar').addEventListener('click', (e)=>{
    e.preventDefault();
    entrar()
})

function entrar(){
    let usuario = document.querySelector('#login');

    let senha = document.querySelector('#senha');

    let listaUser = [];

    let usuarioValido = {
        login: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('usuarios'));

    //vai varrer todos os itens
    listaUser.forEach(item=>{
        if(usuario.value === item.login && senha.value === item.senha){
            usuarioValido = {
                id: item.id,
                login: item.login,
                senha: item.senha
            }
        }
    })

    if(usuario.value === usuarioValido.login && senha.value === usuarioValido.senha){
        alert('deu certo')
        saveSession(usuarioValido.id);
        window.location.href ='home.html';
    }else{
        alert('deu errado')
    }

    console.log(usuarioValido);
}


function saveSession(data){
    if(saveSession){
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logado", JSON.stringify(data));

}
  



  