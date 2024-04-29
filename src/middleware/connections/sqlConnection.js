const Sequelize = require("sequelize");
const { DATE } = require("sequelize");
const config = require('../configs/configConstants.js');

const SERVER = config.sql_server
const DATABASE  = config.sql_database
const USERNAME = config.sql_user
const PASSWORD = config.sql_password

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

function setDateFormat() {
  DATE.prototype._stringify = function _stringify(date, options) {
      return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
  };
}

function removeAttributeId(Model) {
  Model.removeAttribute('id')
}

module.exports = {
  createSqlConnection,
  removeAttributeId,
  setDateFormat
}