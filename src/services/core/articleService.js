const _articleData = require( '../../data/core/articleData');
const _blobService = require('../../middleware/connections/blobConnection');
const _fileSystem = require('../../middleware/connections/fileSystemConnection');
const apiResponseModel = require('../../domain/models/apiResponseModel');
const { v4: uuidv4 }  = require( 'uuid');


async function addArticle(articleData){
    const articleBody = articleData.ArticleBody;
    const articleGuid = articleData.Guid;
    const authorGuid = articleData.AuthorGuid;

    const fileName = `article-${authorGuid}-${articleGuid}`;
    const fileUploadPath = _fileSystem.WriteToPath(fileName, articleBody);

    const blobUpload = _blobService.uploadFileToBlobStorage(fileUploadPath)
    const articleUploadUrl = (await blobUpload).url;

    if(articleUploadUrl != null || articleUploadUrl != '' || articleUploadUrl != undefined){
        const insertNewArticle = {
            guid : articleGuid,
            title : articleData.ArticleTitle,
            createdDate : articleData.CreatedDate,
            modifiedDate : articleData.ModifiedDate,
            isDraft : articleData.IsDraft,
            isDeleted : false,
            blobURL : articleUploadUrl
        }
        const uploadArticleToDb = await _articleData.addArticle(insertNewArticle);
        if(uploadArticleToDb){
            await articleTagMapping(articleGuid, articleData.TagIds);
            return apiResponseModel(null, 'Article uploaded successfully', true);
        } else {
            return apiResponseModel(null, 'Error in uploading article', false);
        }
    }
    else {
        return apiResponseModel(null, 'Error in uploading article', false);
    }
}

async function articleTagMapping(articleGuid, tagIds){
    const articleId = _articleData.getArticleIdByGuid(articleGuid);
    const articleTags = bulkTags.map((articleTagMap) => ({
        ...articleTagMap,
        guid: uuidv4(),
        articleId : articleId,
        tagId : tagIds
    }));
    const articleTagMap = await _articleData.addArticleTagMapping(articleTags)
}

module.exports = {
    addArticle
}

