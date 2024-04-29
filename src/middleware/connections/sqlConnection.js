const sqlConfig = require("../configs/sqlConfig.js");
const Sequelize = require("sequelize");

const SERVER = sqlConfig.server
const DATABASE  = sqlConfig.database
const USERNAME = sqlConfig.user
const PASSWORD = sqlConfig.password

function createSqlConnection() {
  try{
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

    return sequelizeSqlConnection

  } catch(err) {
    console.log('Error connecting to SQL ',err)
  }

}

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

createSqlConnection()

module.exports = {
  sequelizeSqlConnection,
  createSqlConnection
}