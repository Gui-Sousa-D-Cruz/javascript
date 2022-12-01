function d20(a,b){
    return Math.floor(Math.random() * (b - a + 1)) + a
    
}

var btn = document.getElementById('btn1')
btn.addEventListener('click', function(){
   var res = Math.floor(Math.random() * (20 - 1 + 1)) + 1
   var d20 = document.getElementById('d20')
   var restxt = document.getElementById('resultado')
   d20.innerHTML = res
   restxt.innerHTML = 'Seu resultado foi: '
}) 