const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'octagro',
    logging: false,
    define: {
        timestamps: true,
        freezeTableName: true
      },
})

module.exports = sequelize