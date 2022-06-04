let token = localStorage.getItem('token');

// Verifica se está logado
let paginaAtual = window.location.href
if (window.location.href.indexOf('index') == -1) {

  window.onload = function () {
    if (token == undefined || token == null) {
      console.log('não logado');
    } else {
      console.log('logado');
      window.location.href = "index.html";
    }
  }
}


let sair = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userLogado');
  window.location.href = "index.html";
}