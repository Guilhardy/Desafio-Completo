/*
ATIVIDADE;
 - PEGAR OS DADOS E JIGAR DENTRO DE UM OBJETO E COLOCAR NO VETOR E GRAVAR NO LOCAL STORAGE
*/
/*localStorage:
  - chave: variável constante que fica no navegador e que armazena os dados que são mandandos para o navegador
  - valor: valor que será salvado na chave
*/

/*let data_bank = [];
document.querySelector("#cadastro").addEventListener("click", function(evento){
    evento.preventDefault();
    
  let email = document.querySelector("#email").value;
  let senha = document.querySelector("#senha").value;
  
  salvar(email, senha);
});
function salvar(email, senha){
 let usuario = {
    email, 
    senha
  }
  data_bank.push(usuario);
  localStorage.setItem("usuário", JSON.stringify(data_bank));
  
}*/



document.querySelector('#cadastro').addEventListener('click', (w)=>{
    w.preventDefault();
    let email = document.querySelector('#email').value;
    let senha = document.querySelector('#senha').value;
  
    salvar(email, senha);
  });
  
  
  function salvar(e, s){
    let db = JSON.parse(localStorage.getItem('usuarios') || '[]');
    //crio um objeto
    let usuario = {
        id: db.length + 1,
        login: e,
        senha: s
    }
    //jogo o obejto dentro do vetor
    db.push(usuario);
    //salvo no localstorage
    localStorage.setItem('usuarios', JSON.stringify(db));
    location.href = 'login.html';    
  } 
  
  /*
  document.querySelector('#cadastro').addEventListener('click', (e)=>{
    e.preventDefault();
    entrar()
  })
  function entrar(){
    let usuario = document.querySelector('#email');
    let senha = document.querySelector('#senha');
    let listaUser = [];
    let usuarioValido = {
        email: '',
        senha: ''
    }
    listaUser = JSON.parse(localStorage.getItem('usuarios'));
    //vai varrer todos os itens
    listaUser.forEach(item=>{
        if(usuario.value === item.email && senha.value === item.senha){
            usuarioValido = {
                id: item.id,
                email: element.login,
                senha: item.senha
            }
        }
    })
    if(usuario.value === usuarioValido.login && senha.value === usuarioValido.senha){
        alert('deu certo')
        saveSession(usuarioValido.id);
        window.location.href ='recados.html';
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
  }  */