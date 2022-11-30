function d20(a,b){
    return Math.floor(Math.random() * (b - a + 1)) + a
    
}

var btn = document.getElementById('btn1')
btn.addEventListener('Click', function d20(a,b){
   var res = Math.floor(Math.random() * (b - a + 1)) + a
   var btn1 = document.getElementById('btn1'
   btn1.innerHTML = res
}) 