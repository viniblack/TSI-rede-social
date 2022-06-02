let login = (event) => {
  event.preventDefault();
  //pega os elementos do formLogin
  let inputEmail = document.querySelector("#inputEmail");
  let inputPassword = document.querySelector("#inputPassword");
  let msgError = document.querySelector('#msgError')

  let user = [];

  let loginValid = {
    name: '',
    email: '',
    password: ''
  }

  user = JSON.parse(localStorage.getItem('user'));

  user.forEach((item) => {
    if (inputEmail.value == item.email && inputPassword.value == item.password) {

      loginValid = {
        fullName: item.name,
        email: item.email,
        password: item.password
      }
    }
  });
  if (inputEmail.value == loginValid.email && inputPassword.value == loginValid.password) {

    //direciona para a tela principal index
    localStorage.setItem('userLogado', JSON.stringify(loginValid));
    window.location.href = "index.html";
  } else {
    msgError.classList.add("text-danger")
    msgError.innerHTML = 'E-mail ou senha incorretos'
  }
}
