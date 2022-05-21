if(localStorage.visitas){
    localStorage.visitas = Number(localStorage.visitas) +1
}else{
    //localStorage.setItem('visitas',1)
    localStorage.visitas= 1
}
console.log(`Visitas: ${localStorage.visitas}`)

var vcorf, vcortxt, vnome

if(localStorage.nome){
    vcorf = localStorage.corf
    vcortxt = localStorage.cortxt
    vnome = localStorage.nome
    defineCor(1,vcorf)
    defineCor(2,vcortxt)
    document.getElementById('painel').innerHTML= `Olá, ${vnome}<br>`
    document.getElementById('acesso').innerHTML+= ` ${Number(localStorage.visitas)} vezes`
}

function gravar(){
    vnome = document.getElementById('fnome').value
    let form = document.getElementById('fconf')
    localStorage.corf=vcorf
    localStorage.cortxt=vcortxt
    localStorage.nome=vnome
    document.getElementById('painel').innerHTML= `Olá, ${vnome}<br>`
    document.getElementById('acesso').innerHTML= `Você acessou o site ${Number(localStorage.visitas)} vezes`
    form.style.display='none'
}

document.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        let btn = document.getElementById('btn')
        btn.click()
    }
})

function defineCor(op,cor){
    if(op==1){
        document.body.style.backgroundColor=cor
        vcorf=cor
    }else{
        document.body.style.color=cor
        vcortxt=cor
    }
}

function conf(p){
    let form = document.getElementById('fconf')
    if(p==1){
       form.style.display='block' 
    }else{
        form.style.display='none'
    }
    
}

