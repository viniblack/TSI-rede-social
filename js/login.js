let login = (event) => {
  event.preventDefault();
  let inputEmail = document.querySelector("#inputEmail");
  let inputPassword = document.querySelector("#inputPassword");
  let msgError = document.querySelector('#msgError');
  let user = JSON.parse(localStorage.getItem('user'));
  let loginValid = {
    name: '',
    email: '',
    password: ''
  }

  if (inputEmail.value == '' && inputPassword.value == '') {
    msgError.classList.add("text-danger")
    msgError.innerHTML = 'E-mail ou senha incorretos'
    return false
  }

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
    localStorage.setItem('userLogado', JSON.stringify(loginValid));
    let token = (Math.random().toString(16) + Math.random().toString(16)).replaceAll('.', '')
    localStorage.setItem('token', token)
    window.location.href = "index.html";
  } else {
    msgError.classList.add("text-danger")
    msgError.innerHTML = 'E-mail ou senha incorretos'
  }
}
