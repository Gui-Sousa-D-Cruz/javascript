
    document.getElementById('btnAdd').addEventListener('click', function(){
        let lista = document.getElementById('listaElementos')
        let texto = document.getElementById('fnovo')
        var li = document.createElement('li')
        li.textContent=texto.value
        lista.appendChild(li)
        texto.value=''
        texto.focus()



    })

    document.addEventListener('keypress', function(e){
        if(e.key === 'Enter'){
            let btn = document.getElementById('btnAdd')
            btn.click()
        }
    })



