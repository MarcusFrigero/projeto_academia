const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const alunosRoute = require("./Routes/alunosRoute")

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/alunos", alunosRoute)

app.use((req, res, next)=>{
    const erro = new Error("Rota não encontrada")
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500); // || = Ou    
    return res.send({
        erro: {
            message: error.message
        }
})

})



module.exports = app;