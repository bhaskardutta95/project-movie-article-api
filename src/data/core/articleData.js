const ArticleModel  = require('../../domain/models/articleModel');

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

module.exports = {
    addArticle
}