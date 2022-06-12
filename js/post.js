let base64
let post = JSON.parse(localStorage.getItem('posts') || '[]');
let userLogado = JSON.parse(localStorage.getItem('userLogado'))
const logado = document.querySelector('#logado')
const postName = document.querySelector('#postName')
const photo = document.getElementById('imgPhoto');
const file = document.getElementById('flImage');
const myVideo = document.getElementById('myVideo');
const fileVideo = document.getElementById('flVideo');
const myAudio = document.getElementById('myAudio');
const fileAudio = document.getElementById('flAudio');
const flImage = document.querySelector("#flImage");
const flVideo = document.querySelector("#flVideo");
const flAudio = document.querySelector("#flAudio");

flImage.mostrar = false;
flVideo.mostrar = false;
flAudio.mostrar = false;

class FormPost {

  constructor(idForm, idTextarea, idUlPost, idPostImage, idPostVideo, idPostAudio) {
    //pega os elementos do form
    this.form = document.getElementById(idForm);
    this.textarea = document.getElementById(idTextarea);
    this.ulPost = document.getElementById(idUlPost);
    this.postImage = document.getElementById(idPostImage);
    this.postVideo = document.getElementById(idPostVideo);
    this.postAudio = document.getElementById(idPostAudio);
    this.addSubmit();
  }


  onSubmit(func) {
    this.form.addEventListener('submit', func)
  }

  getTime() {
    const time = new Date();
    const date = time.getDate();
    const month = time.getMonth() + 1;
    const year = time.getFullYear();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    return `${date}/${month}/${year} | ${hour}h${minutes}min`
  }

  addSubmit() {

    const handleSubmit = (event) => {
      event.preventDefault();
      const time = this.getTime();
      const newPost = document.createElement('div');
      newPost.classList.add('post');

      // <details>
      // <summary><b><img src="assets/map.png" style="width:40px; margin-bottom: 10px; margin-right: 5px; ">Sua Localização</b></summary>
      //     <p><b>Latitude: <span id="latitude"></span>
      //           Longitude: <span id="longitude"></span></b></p>
      // </details>
      let textarea = this.textarea.value
      newPost.innerHTML = `
          <div class="infoUserPost">
            <div class="nameAndHour">
              <strong>${userLogado.fullName}</strong>
              <p>
                ${time}
              </p>
            </div>
          </div>
          <p>
            ${textarea}
          </p>
        `;

      if (this.postImage.mostrar)
        newPost.innerHTML += `<img src="${this.postImage.src}" style="width:30%; margin-bottom: 20px;">`;

      if (this.postVideo.mostrar)
        newPost.innerHTML += `<video src="${this.postVideo.src}" controls style="width:30%; margin-bottom: 20px;"></video>`;

      if (this.postAudio.mostrar)
        newPost.innerHTML += `<audio src="${this.postAudio.src}" controls style="width:30%; margin-bottom: 20px;"></audio>`;

      if (base64 != undefined) {
        switch (base64.substr(0, 11) || '') {
          case 'data:image/':
            post.push({
              user: userLogado.fullName,
              contentText: textarea,
              date: new Date().toLocaleString(),
              midia: base64
            })
            break;
          case 'data:audio/':
            post.push({
              user: userLogado.fullName,
              contentText: textarea,
              date: new Date().toLocaleString(),
              midia: base64
            })
            break;
          case 'data:video/':
            post.push({
              user: userLogado.fullName,
              contentText: textarea,
              date: new Date().toLocaleString(),
              midia: base64
            })
            break;
          default:
            post.push({
              user: userLogado.fullName,
              contentText: textarea,
              date: new Date().toLocaleString(),
            })
        }
      } else {
        post.push({
          user: userLogado.fullName,
          contentText: textarea,
          date: new Date().toLocaleString(),
        })
      }

      localStorage.setItem("posts", JSON.stringify(post));

      this.ulPost.append(newPost);
      this.postImage.mostrar = false;
      this.postVideo.mostrar = false;
      this.postAudio.mostrar = false;
      this.postImage.src = null;
      this.postVideo.src = null;
      this.postAudio.src = null;
      this.textarea.value = '';

    }
    this.onSubmit(handleSubmit)
  }
}

//instancia a classe FormPost
const postForm = new FormPost('formPost', 'textarea', 'posts', 'uploadImage', 'uploadVideo', 'uploadAudio');

if (userLogado) {
  logado.innerHTML = `Olá ${userLogado.fullName}`
  postName.innerHTML = `${userLogado.fullName}`
}

post.slice().reverse().forEach((post) => {
  let posts =
    `
      <div class="post">
        <div class="infoUserPost">
            <div class="nameAndHour">
                <strong>${post.user}</strong>
                <p>
                    ${post.date}
                </p>
            </div>
        </div>
          <p>
            ${post.contentText}
          </p>
    `
  if (post.midia != undefined) {

    if (post.midia.indexOf('data:image') != -1) {
      posts += `
            <img src="${post.midia}" style="width:30%; margin-bottom: 20px;">
          `
    } else if (post.midia.indexOf('data:video') != -1) {
      posts += `
            <video src="${post.midia}" style="width:30%; margin-bottom: 20px;">
          `
    } else if (post.midia.indexOf('data:audio') != -1) {
      posts += `
            <audio controls src="${post.midia}" style="width:30%; margin-bottom: 20px;">
          `
    }
    posts += `
            </div>
          </div>
        `
  }
  document.getElementById('postsLocal').innerHTML += posts
})

//função upload da imagem
flImage.addEventListener("change", function () {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#uploadImage").mostrar = true;
    document.querySelector("#uploadImage").src = uploaded_image;
    base64 = reader.result;
  });
  reader.readAsDataURL(this.files[0]);
});

//função upload do video
flVideo.addEventListener("change", function () {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    const uploaded_video = reader.result;
    document.querySelector("#uploadVideo").mostrar = true;
    document.querySelector("#uploadVideo").src = uploaded_video;
    base64 = reader.result;
  });
  reader.readAsDataURL(this.files[0]);
});

//função de upload do audio
flAudio.addEventListener("change", function () {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    const uploaded_audio = reader.result;
    document.querySelector("#uploadAudio").mostrar = true;
    document.querySelector("#uploadAudio").src = uploaded_audio;
    base64 = reader.result;
  });
  reader.readAsDataURL(this.files[0]);
});

photo.addEventListener('click', () => {
  file.click();
});

myVideo.addEventListener('click', () => {
  fileVideo.click();
});

myAudio.addEventListener('click', () => {
  flAudio.click();
});

//geolocalização do usuário

function enviar() {
  if (userLogado) {
    if (navigator.geolocation) {
      // watchPosition
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Não foi possível pegar sua localização");
    }
  } else {
    alert("Você não está logado")
  }


  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log(`lat: ${lat} lon: ${lon}`);
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("Solicitação de geolocalização negada.")
        break;
      case error.POSITION_UNAVAILABLE:
        alert("As informações de localização não estão disponíveis.")
        break;
      case error.TIMEOUT:
        alert("A solicitação para obter a localização do usuário expirou.")
        break;
      case error.UNKNOWN_ERROR:
        alert("Ocorreu um erro desconhecido.")
        break;
    }
  }
}



// function locationSucess(data) {
//   let latitude = data.coords.latitude;
//   let longitude = data.coords.longitude;

//   document.getElementById("latitude").innerHTML = latitude;
//   document.getElementById("longitude").innerHTML = longitude;

// }

// function locationError(data) {

// }