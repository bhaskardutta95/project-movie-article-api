const { createClient } = require( 'redis');
const config = require('../configs/configConstants.js');

const client = createClient({
    host: config.redis_host,
    port: config.redis_port,
    password: config.redis_password
});

async function createRedisConnection () {
    try{
        await client.connect();
        console.log('connected to redis')
    } catch(err){
        console.log('Error in connecting redis ',err)
    }
};

module.exports = {
    createRedisConnection
}