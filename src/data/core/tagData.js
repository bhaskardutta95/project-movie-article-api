const createSqlConnection  = require( "../../middleware/connections/sqlConnection");
const getTags  = require("../../data/resources/sqlQueries");
const TagModel  = require('../../domain/models/tagModel');


const getAllTagsByQuery = async() => {
    try{
        const openSqlConnection = await createSqlConnection()
        const tags = await openSqlConnection.request().query(getTags)
        console.log('records fetched successfully');
        return tags.recordset
    } catch(error){
        console.log('Error in fetching records ',error)
    }
}

const getAllTags = async() => {
    try{
        const tagData = await TagModel.findAll({
            attributes: ['guid', 'name']
          })
        return tagData
    } catch(err){
        console.log('Error in fetching tags ',err)
    }
}

const addTag = async(tagData) => {
    try{
        const newTag = await TagModel.create(tagData)
        console.log('newTag-',newTag)
    } catch(err){
        console.log('Error in adding tag ',err)
    }
}

const addTags = async(tagsData) => {
    try{
        console.log('tagsData-',tagsData)
        const bulkInsert = await TagModel.TagModel.bulkCreate(tagsData)
        const allSuccess = bulkInsert.every((tag) => tag instanceof TagModel);
        return allSuccess;
    } catch(err){
        console.log('Error in adding tags ',err)
    }
}

module.exports = {
    getAllTags,
    addTags
}
