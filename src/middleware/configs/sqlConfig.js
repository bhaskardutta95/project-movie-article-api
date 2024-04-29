const config = require('./configConstants');

const sqlConfig = {
    user : config.sql_user,
    password:config.sql_password,
    server : config.sql_server,
    database : config.sql_database,
    driver: config.sql_driver,
    options: {
        trustedConnection: true,
        trustServerCertificate: false 
    }  
};

module.exports = sqlConfig