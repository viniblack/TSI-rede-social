function login() {

  //pega os elementos do formLogin
  let inputEmail = document.querySelector("#inputEmail");
  let inputPassword = document.querySelector("#inputPassword");
  let msgError = document.querySelector('#msgError')

  let user = [];

  let loginValid = {
    fullName: '',
    mail: '',
    password: ''
  }

  user = JSON.parse(localStorage.getItem('listaUser'));

  user.forEach((item) => {
    if (inputEmail.value == item.mailCad && inputPassword.value == item.passwordCad) {

      loginValid = {
        fullName: item.fullNameCad,
        mail: item.mailCad,
        password: item.passwordCad
      }
    }
  });
  if (inputEmail.value == loginValid.mail && inputPassword.value == loginValid.password) {

    //direciona para a tela principal index
    const newLocal = window.location.href = "index.html";

    localStorage.setItem('userLogado', JSON.stringify(loginValid));

  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'E-mail ou senha incorretos'
  }
}
