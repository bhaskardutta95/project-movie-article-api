const sqlConfig = {
    user : "",
    password:'',
    server : "moviearticledb.database.windows.net",
    database : "",
    driver:"ODBC Driver 18 for SQL Server",
    options: {
        trustedConnection: true,
        trustServerCertificate: false 
    }  
};

module.exports = sqlConfig