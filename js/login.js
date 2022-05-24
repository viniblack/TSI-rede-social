let inputName = document.querySelector("#inputName");
let inputCPF = document.querySelector("#inputCPF");
let inputEmail = document.querySelector("#inputEmail");
let inputPhone = document.querySelector("#inputPhone");
let inputPassword = document.querySelector("#inputPassword");
let inputConfirmPassword = document.querySelector("#inputConfirmPassword");

inputName.oninvalid = () => {
  inputName.setCustomValidity("");
  if (!inputName.validity.valid) {
    inputName.setCustomValidity("Campo obrigatório");
  } else if (inputName.value.length < 3) {
    inputName.setCustomValidity("Nome tem que ter mais que 3 caracteres");
  } else if (inputName.value.length > 50) {
    inputName.setCustomValidity("Nome não pode ter mais que 50 caracteres");
  }
}

inputCPF.oninvalid = function () {
  inputCPF.setCustomValidity("");
  if (!inputCPF.validity.valid) {
    inputCPF.setCustomValidity("Campo obrigatório");
  } else if (inputCPF.value.length < 11) {
    inputCPF.setCustomValidity("Esse CPF não é valido");
  }
}

inputEmail.oninvalid = function () {
  inputEmail.setCustomValidity("");
  if (inputEmail.value.length > 30) {
    inputEmail.setCustomValidity("Email tem que ter menos de 30 caracteres");
  }
}


function isAllPresent(str) {

  var pattern = new RegExp(
    "^(?=.*[A-Z])(?=.*\\d).+$"
  );

  // If the string is empty
  // then print No
  if (!str || str.length === 0) {
    document.write("No" + "<br>");
    return;
  }

  // Print Yes If the string matches
  // with the Regex
  if (pattern.test(str)) {
    document.write("Yes" + "<br>");
  } else {
    document.write("No" + "<br>");
  }
  return;
}

// Driver Code
var str = "#GeeksForGeeks123@";
isAllPresent(str);

let submitForm = () => {
  user = {
    name: inputName.value,
    cpf: inputCPF.value,
    email: inputEmail.value,
    phone: inputPhone.value,
    password: inputPassword.value
  }

  window.localStorage.setItem(`user`, JSON.stringify(user))

}