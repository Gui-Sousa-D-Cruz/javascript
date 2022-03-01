

var pais = 'Brasil'

        var res = `V`
        
        res.innerHTML = `Sua origem é ${pais.value} !`

        if (pais === 'Brasil'){
            res.innerHTML += `<p>Você é Brasileiro !</p>`
        } else{
            res.innerHTML += `<p>Você é gay !</p>`
        }