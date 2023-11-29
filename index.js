const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('hendlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (requsicao, resposta) => {
    resposta.send("Olá, mundo!")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})