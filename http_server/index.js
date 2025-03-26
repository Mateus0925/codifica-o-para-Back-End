const http = require('http')

const porta = 3000

const serve = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader = ('Content-typer', "text/html")
    //res.write('Servidor inicializado')
    res.end('<h1>Olá, este é meu serve</h1>')
})

serve.listen(porta, () =>{
    console.log(`Servidor executado na porta ${porta}`)
})