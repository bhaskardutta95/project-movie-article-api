const { createRedisConnection, client } = require('../../middleware/connections/redishConnection');

async function storeCodeAndIdInCache(id,code,key){
    try{
        const data = JSON.stringify({id,code})
        await createRedisConnection()
        await client.set(`${key}:${code}`,data)
        console.log('Stored id and guid in cache')
    } catch(err){ 
        console.log('Error in storing id and guid in cache ',err)
    }
}

async function getIdFromCache(code,key){
    try{
        await createRedisConnection()
        const cachedData = await client.get(`${key}:${code}`)
        if(cachedData){
            const data = JSON.parse(cachedData)
            return data.id
        } else {
            console.log('No data found in cache')
            return null
        }
    } catch(err){
        console.log(`Error fetching ${code} in cache `,err)
    }
}

module.exports = {
    storeCodeAndIdInCache,
    getIdFromCache
}
