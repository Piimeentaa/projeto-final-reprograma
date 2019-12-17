const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const ingressos = require('./Routes/Listaingressos')
const filmes = require('./Routes/Listafilmes')
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())
app.use('/ingressos', ingressos)
app.use('/filmes', filmes)

app.get('/', (request, response) => {
  response.send('Seja bem-vindo ao projeto final CRUD da Isadora')
})


app.listen(PORT)
console.info(`Rodando na porta ${PORT}`)
