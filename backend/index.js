const express = require('express')
const conexao = require('./db/conexao')

const app = express()

app.use(express.json())

//Conexao com Banco de Dados
conexao.sync().then(() => {
    app.listen(3000)
}).catch(erro => {
    console.log('Deu erro: ', erro)
})