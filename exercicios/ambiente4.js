var amigo = {
    nome:'José', 
    sexo:'M',
    peso:80,
    engordar(p=0){
        console.log(`Engordou ${p} kilos`)
        this.peso += p
    }
}

console.log(`${amigo.nome} pesa ${amigo.peso} kilos`)

amigo.engordar(8)

console.log(`${amigo.nome} agora pesa ${amigo.peso} kilos`)
