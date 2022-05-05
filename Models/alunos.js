"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => 
{
    class Alunos extends Model{}

    Alunos.init 
    (   {
       // id: DataTypes.SMALINT,
        nome_aluno: DataTypes.STRING(30),
        telefone: DataTypes.STRING(12),
        altura: DataTypes.DECIMAL(4,2),
        peso: DataTypes.DECIMAL(6,3),
        

        },
        {
        sequelize,
        modelName: "alunos",
        timestamps: false
        }
    );
    
return Alunos
}
