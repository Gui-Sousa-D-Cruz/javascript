var num = [5 , 7, 3]
num[3] = 2
num.push(1)
num.push(9)
num.push(6)
num.push(8)
num.push(4)
num.push(4)
num.sort()
console.log(`Nosso vetor é o ${num} e tem ${num.length} elementos`)


for(var pos in num ){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let posi = num.indexOf(2)
if(posi == -1){
    console.log('Valor não encontrado')
}else{
    console.log(`O valor está na posição ${posi}`)

}