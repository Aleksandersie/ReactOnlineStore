const {Sequelize} = require('sequelize')

module.exports = new Sequelize (
    process.env.db_name,
    process.env.db_user,
    process.env.db_password,
    {
        dialect: 'postgres',
        host: process.env.db_host,
        port: process.env.db_port,
    }

)