let inputName = document.querySelector("#inputName");
let inputCPF = document.querySelector("#inputCPF");
let inputEmail = document.querySelector("#inputEmail");
let inputPhone = document.querySelector("#inputPhone");
let inputPassword = document.querySelector("#inputPassword");
let inputConfirmPassword = document.querySelector("#inputConfirmPassword");
let labelPassword = document.querySelector("#labelPassword");
let labelConfirm = document.querySelector("#labelConfirmPassword");

inputPassword.addEventListener('keyup', () => {
  console.log(inputPassword.value.length);
  if (inputPassword.value.length <= 5) {
    labelPassword.classList.add("text-danger");
    labelPassword.innerHTML = 'Senha: Minimo de 6 caracteres, 1 letra Maisucula e 1 número';
    validPassword = false;

  } else if ((inputPassword.value.length > 5) && (inputPassword.value.match(/[A-Z]+/)) && inputPassword.value.match(/[1-9]+/)) {
    labelPassword.classList.add("text-dark");
    labelPassword.innerHTML = 'Senha:';
    validPassword = true;

  }
})

inputConfirmPassword.addEventListener('keyup', () => {

  if (inputPassword.value != inputConfirmPassword.value) {
    labelConfirm.classList.add("text-danger");
    labelConfirm.innerHTML = 'Confirmar senha: As senhas não conferem';
    validConfirmPassword = false;
  } else {
    labelConfirm.classList.add("text-dark");
    labelConfirm.innerHTML = 'Confirmar senha:';
    validConfirmPassword = true;

  }
})

let submitForm = (event) => {
  event.preventDefault();
  let user = JSON.parse(localStorage.getItem('user') || '[]');

  if (validPassword) {

    user.push({
      name: inputName.value,
      cpf: inputCPF.value,
      email: inputEmail.value,
      phone: inputPhone.value,
      password: inputPassword.value
    })
    localStorage.setItem(`user`, JSON.stringify(user))
    window.location.href = "login.html";
  }

}