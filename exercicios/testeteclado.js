//Como descobrir o codigo da tecla do teclado
var text = document.getElementById('txta');

text.addEventListener('keypress', function(evento){
    console.log(evento.keyCode);
})

//Como fazer uma tecla pressionar o botão 

/*esse document antes do addEventListener pode ser substituido por qualquer variavel onde você queira executar o comando, então nesse caso se a pagina estiver selecionada a qualquer momento que clicar o enter o botão será ativado*/
document.addEventListener('keypress', function(e){
    if (e.key === "NOME DO BOTAO") {
        console.log('APERTOU O BOTAO') //teste se o botao foi pressionado
        const btn = document.getElementById('ID DO BOTAO')

        btn.click()
    }
})
