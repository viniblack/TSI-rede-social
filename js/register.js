let inputName = document.querySelector("#inputName");
let inputCPF = document.querySelector("#inputCPF");
let inputEmail = document.querySelector("#inputEmail");
let inputPhone = document.querySelector("#inputPhone");
let inputPassword = document.querySelector("#inputPassword");
let inputConfirmPassword = document.querySelector("#inputConfirmPassword");

let submitForm = () => {
  let user = JSON.parse(localStorage.getItem('user') || '[]');

  user.push({
    name: inputName.value,
    cpf: inputCPF.value,
    email: inputEmail.value,
    phone: inputPhone.value,
    password: inputPassword.value
  })

  localStorage.setItem(`user`, JSON.stringify(user))

}