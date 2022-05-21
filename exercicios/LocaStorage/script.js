if(localStorage.visitas){
    localStorage.visitas = Number(localStorage.visitas) +1
}else{
    //localStorage.setItem('visitas',1)
    localStorage.visitas= 1
}
document.write(`Visitas: ${localStorage.visitas}`)