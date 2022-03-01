function carregar(){
    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML= `Agora são ${hora} : ${minutos}`
    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'imagens/fotomanha.png'
        document.body.style.backgroundColor = '#e2cd9f'
        msg2.innerHTML = 'Bom dia!'
        document.getElementById('msg2').style.color = '#e2cd9f'
    }else if (hora >=12 && hora < 18){
        //BOA TARDE
        img.src = 'imagens/fototarde.png'
        document.body.style.backgroundColor = '#b9846f'
        msg2.innerHTML = 'Boa tarde!'
        document.getElementById('msg2').style.color = '#b9846f'

    }else{
        //BOA NOITE
        img.src = 'imagens/fotonoite.png'
        document.body.style.backgroundColor = '#515154'
        msg2.innerHTML = 'Boa noite!'
        document.getElementById('msg2').style.color = '#515154'

    }


}

setInterval(carregar, 500)

