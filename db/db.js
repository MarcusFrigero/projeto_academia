const Sequelize = require("sequelize")

const sequelize = new Sequelize("academia", "root", "rootsenac",
{
    dialect: "mysql",
    host: "localhost",
    port: 3000
})


module.exports = sequelize;
