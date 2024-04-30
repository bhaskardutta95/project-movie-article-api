const ArticleModel  = require('../../domain/models/articleModel');
const ArticleTagMappingModel = require('../../domain/models/articleTagMappingModel');

const addArticle = async(articleData) => {
    try{
        console.log('tagsData-',articleData)
        const insertArticle = await ArticleModel.create(articleData);
        const affectedRows = insertArticle ? insertArticle.length || 1 : 0;
        return affectedRows;
    } catch(err){
        console.log('Error in adding article- ',err)
    }
}

const addArticleTagMapping = async(articleTagMappingData) => {
    try{
        const articleTagMapping = await ArticleTagMappingModel.bulkCreate(articleTagMappingData);
        const allSuccess = articleTagMapping.every((articleTag) => articleTag instanceof ArticleTagMappingModel);
        return allSuccess;
    } catch(err) {
        console.log('Error in ArticleTagMapping');
        throw err;
    }

}

const getArticleIdByGuid = async(articleGuid) => {
    const articleId = await ArticleModel.findOne({
        where: {
          guid: articleGuid
        }, include: [id]
      });
    return articleId

}

module.exports = {
    addArticle,
    addArticleTagMapping,
    getArticleIdByGuid
}