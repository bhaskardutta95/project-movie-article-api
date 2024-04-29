const config = require('./configConstants');

const redishConfig = {
        host: config.redis_host,
        port: 17047,
        password: config.redis_password,
    };
    
module.exports =redishConfig