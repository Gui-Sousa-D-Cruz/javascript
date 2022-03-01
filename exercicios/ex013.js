var agora = new Date()
var hora = 17
var tempo = 'da manhã'

if(hora <= 12){
    tempo = 'da manhã'
}else if(hora < 18){
    tempo = 'da tarde'
}else{
    tempo = 'da noite'
}



console.log(`Agora são exatamente ${hora} horas ${tempo}.`)
if (hora < 12){
    console.log('Bom Dia!')
}else if(hora <= 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}

