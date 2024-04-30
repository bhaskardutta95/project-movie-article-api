const { v4: uuidv4 }  = require( 'uuid');

class ArticleDto {
    constructor(){
        this.guid = uuidv4();
        this.modifiedDate = new Date(Date.now()).toISOString();
    }

    get Guid(){
        return this.guid;
    }

    get ModifiedDate(){
        return this.modifiedDate;
    }

    get AuthorGuid(){
        return this._authorGuid;
    }
    set AuthorGuid(authorGuid){
        this._authorGuid = authorGuid;
    }

    get AuthorId(){
        return this._authorId;
    }
    set AuthorId(authorId){
        this._authorId = authorId;
    }

    get ArticleTitle(){
        return this._title;
    }
    set ArticleTitle(title){
        this._title = title;
    }

    get CreatedDate(){
        return this._createdDate;
    }

    set CreatedDate(createdDate){
        this._createdDate = createdDate;
    }

    get IsDraft(){
        return this._isDraft;
    }

    set IsDraft(isDraft){
        this._isDraft = isDraft;
    }

    get IsDeleted(){
        return this._isDeleted;
    }

    set IsDeleted(isDeleted){
        this._isDeleted = isDeleted;
    }

    get TagIds(){
        return this._tagIds;
    }
    set TagIds(tagIds){
        this._tagIds = tagIds;
    }
    
    get CategoryId(){
        return this._categoryId;
    }
    set CategoryId(categoryId){
        this._categoryId = categoryId;
    }

    get SectionId(){
        return this._sectionId;
    }
    set SectionId(sectionId){
        this._sectionId = sectionId;
    }

    get ArticleBody(){
        return this._articleBody;
    }
    set ArticleBody(articleBody){
        this._articleBody = articleBody;
    }

}

module.exports = ArticleDto