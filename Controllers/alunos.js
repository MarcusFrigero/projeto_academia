const { Sequelize } = require("sequelize")
const sequelize = require("../db/db")

const Alunos = require("../Models/alunos")

module.exports = 
{
    async getAll(req, res)  // Assincrona espera o resultado para prosseguir 
    {    const sequelize = new Sequelize("academia", "admin", "rootsenac", 
        {
            host: "localhost",
            dialect:"mysql"
        });
        const alunos = await Alunos(sequelize, Sequelize.DataTypes).findAll() //SELECT * FROM Alunos 
        
        res.status(200).send(alunos)
    },

 
        async create(req, res) 
    {
        const sequelize = new Sequelize("academia", "admin", "rootsenac", 
        {
            host: "localhost",
            dialect: "mysql"
        });
        await Alunos(sequelize, Sequelize.DataTypes).create
        ({
            
            nome_aluno: req.body.nome_aluno,
            telefone: req.body.telefone,
            altura: req.body.altura,
            peso: req.body.peso
        })
        res.status(200).send
        ({
            message: "Aluno cadastrdo com sucesso"
        })
    },
    
        async update(req, res) 
    {
        const sequelize = new Sequelize("academia", "admin", "rootsenac", 
        {
            host: "localhost",
            dialect: "mysql"
        });
        await Alunos(sequelize, Sequelize.DataTypes).update
        (   {
                nome_aluno: req.body.nome_aluno,
                telefone: req.body.telefone,
                altura: req.body.altura,
                peso: req.body.peso          
            },
            {
            where: { id: req.params.id }
            }
        );
        res.status(200).send("Aluno Atualizado com sucesso")
    },

    async delete(req, res) 
    {
        const sequelize = new Sequelize("academia", "admin", "rootsenac", 
        {
            host: "localhost",
            dialect: "mysql"
        });
        await Alunos(sequelize, Sequelize.DataTypes).destroy
        (   
            {
            where: { id: req.params.id }
            }
        );
        res.status(200).send("Aluno EXCLUIDO com sucesso")
    }


}










