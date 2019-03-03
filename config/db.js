

// 数据库连接配置
const Sequelize = require('sequelize')

const config = {
    host:'127.0.0.1',
    username:'root',
    password:'mysql',
    database:'note_db',
    sqltype:'mysql'
}

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.sqltype,
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

module.exports = {
    sequelize
}