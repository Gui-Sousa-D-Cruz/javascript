
console.log(localStorage.mesa)

let mesa = Number(localStorage.mesa)

if(mesa == 1){
 //window.alert('Deu certo')
}

function mesas(p){
    if(p==1){
        let mesa = window.document.getElementById('mesa')
        localStorage.setItem('mesa', 1)
        mesa.style.backgroundColor='red'
        mesa.innerHTML='Cheia'
      


    }else{
        let mesa = window.document.getElementById('mesa')
        localStorage.setItem('mesa', 2)
        mesa.style.backgroundColor='green'
        mesa.innerHTML='Vazia'

    }
}
if(localStorage.mesa==1){
    let mesa = window.document.getElementById('mesa')
    let cheio = window.document.getElementById('cheio')
    let check = window.document.createAttribute('checked')
    localStorage.setItem('mesa', 1)
    mesa.style.backgroundColor='red'
    mesa.innerHTML='Cheia'
    cheio.setAttributeNode(check)
    


}else{
    let mesa = window.document.getElementById('mesa')
    let vazio = window.document.getElementById('vazio')
    let check = window.document.createAttribute('checked')
    localStorage.setItem('mesa', 2)
    mesa.style.backgroundColor='green'
    mesa.innerHTML='Vazia'
    vazio.setAttributeNode(check)
   
}
