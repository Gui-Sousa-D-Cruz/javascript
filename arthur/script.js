function entrar(){
    let btn = window.document.querySelector('#btn')
    btn.innerHTML = 'Sim'
}

function sair(){
    let btn = window.document.querySelector('#btn')
    btn.innerHTML = 'Não'
}

function play(){
    let res = window.document.querySelector('#res')
    let audio = window.document.querySelector('#audio')
    let imagem = window.document.createElement('img')
    imagem.setAttribute('src', 'foto500.jpg')
    audio.play();
    res.appendChild(imagem)
}