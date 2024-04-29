const _articleData = require( '../../data/core/artcleData');
const { v4: uuidv4 }  = require( 'uuid');
const apiResponseModel = require( '../../domain/models/apiResponseModel.js');
const _blobService = require('../../middleware/connections/blobConnection.js');

async function addArticle(articleData){
    const articleBody = articleData.body;
    _blobService.uploadFileToBlobStorage(articleData)
    const insertArticle = {
        guid : uuidv4(),
        title : articleData.title,
        createdDate : articleData.createdDate,
        modifiedDate : articleData.modifiedDate,
        isDraft : articleData.isDraft,
        isDeleted : false,
    };
    
    await _articleData.addArticle(insertTag);
}

module.exports = {
    addArticle
}

