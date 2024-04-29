const _tagData = require( '../../data/core/tagData.js');
const { v4: uuidv4 }  = require( 'uuid');
const apiResponseModel = require( '../../domain/models/apiResponseModel.js');


async function getTagsByQuery() {
    const tags = await _getAllTags();
    if(!tags){
        apiResponseModel('No tags found', 'No tags found', 500)
    }
    return tags;
}

async function getAllTags(){
    const tagsData = await _tagData.getAllTags();
    if(tagsData.length == 0){
        return apiResponseModel(null, 'No tags found', false)
    } else {
        return apiResponseModel(tagsData,'Tags fetched successfully', true)
    }
}

async function addTag(){
    var testDate = new Date(Date.now()).toISOString();
    const insertTag = {
        guid : '5d1d0d0d-0d0d-0d0d-0d0d-0d0d0d0d0d0d',
        name : 'tag1',
        createdDate : testDate,
        modifiedDate : testDate
    };
    
    await __tagData.addTag(insertTag);
}

async function addTags(bulkTags) {
    var currentDate = new Date(Date.now()).toISOString();
    const tags = bulkTags.map((tag) => ({
        ...tag,
        guid: uuidv4(),
        createdDate: currentDate,
        modifiedDate: currentDate
    }));
    const bulkInsert = await _tagData.addTags(tags);
    if(bulkInsert){
        return true;
    } else {
        return false;
    }
}

module.exports = {
    getAllTags,
    addTags,
    addTag
}
