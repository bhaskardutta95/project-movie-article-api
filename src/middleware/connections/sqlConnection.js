const sqlConfig = require("../configs/sqlConfig.js");
const Sequelize = require("sequelize");

const SERVER = sqlConfig.server
const DATABASE  = sqlConfig.database
const USERNAME = sqlConfig.user
const PASSWORD = sqlConfig.password

const sequelizeSqlConnection = new Sequelize(
  DATABASE,
  USERNAME,
  PASSWORD,
  {
      dialect: 'mssql',
      dialectOptions: {
        options: {
          encrypt: true 
        }
      },
      host: SERVER, 
    }
);

module.exports = sequelizeSqlConnection