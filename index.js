const express = require('express')
const app = express()
const port = 3000
app.get('/',(req, res) => {
    res.send('Hello Wolrd!')
})
app.listen(port,() =>{
    console.log(`O servidor está sendo executado em http:localhost:${port}`)
})