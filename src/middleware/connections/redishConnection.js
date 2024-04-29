const { createClient } = require( 'redis');
const azureConfig  = require( '../configs/redishConfig.js');

const client = createClient({
    host: azureConfig.host,
    port: azureConfig.port,
    password: azureConfig.password
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