function inserir(){
    let inserir = document.getElementById('txta')
    let lista = document.getElementById('lista')
    let item = document.createElement('li')
    item.innerHTML = inserir.value
    lista.appendChild(item)
    
}

txta.addEventListener('keypress', function(e){
    if (e.key === "Enter") {
        console.log('Apertou o CU')
        const btn = document.getElementById('btn')

        btn.click()
    }
})
