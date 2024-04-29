const { DataTypes } = require("sequelize");
const SqlConnection = require("../../middleware/connections/sqlConnection");
const { setDateFormat, removeAttributeId } = require('../../middleware/configs/sequelizeConfig');
const dbConstants = require('../../domain/constants/dbConstants');

setDateFormat()
const ArticleModel = SqlConnection.createSqlConnection().define('ARTICLE', {
    guid: DataTypes.STRING,
    title: DataTypes.STRING,
    createdDate: DataTypes.DATE,
    modifiedDate: DataTypes.DATE,
    isDraft : DataTypes.BOOLEAN,
    isDeleted : DataTypes.BOOLEAN,
    blobURL : DataTypes.STRING,
    bannerImgURL : DataTypes.STRING
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: dbConstants.TagTableName
});
removeAttributeId(ArticleModel)

module.exports = ArticleModel