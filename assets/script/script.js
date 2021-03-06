let nome = document.querySelector("#nome")
let sobrenome = document.querySelector("#sobrenome")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let sobrenomeOk = false
let emailOk = false
let assuntoOk = false

// VERIFICAÇÕES DE INPUT
function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaSobrenome() {
    let txtSobrenome = document.querySelector("#txtSobrenome")
    if (nome.value.length < 3) {
        txtSobrenome.innerHTML = "Sobrenome Inválido"
        txtSobrenome.style.color = "red"
    } else {
        txtSobrenome.innerHTML = "Sobrenome Válido"
        txtSobrenome.style.color = "green"
        sobrenomeOk = true
    }
}

function validaEmail() {

    let txtEmail = document.querySelector('#txtEmail')
    let regex = /[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi

    if (email.value.match(regex)) {
        txtEmail.innerHTML = "E-mail Válido";
        emailOk = true;
        txtEmail.style.color = "green"
    } else {
        txtEmail.innerHTML = "E-mail Inválido";
        txtEmail.style.color = "red"
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 100 characteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

//CONTENT ANIMATION
window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}


