const { DataTypes } = require("sequelize");
const SqlConnection = require("../../middleware/connections/sqlConnection");
const dbConstants = require('../../domain/constants/dbConstants');

SqlConnection.setDateFormat()
const ArticleModel = SqlConnection.createSqlConnection().define('ARTICLE', {
    guid: DataTypes.STRING,
    title: DataTypes.STRING,
    createdDate: DataTypes.DATE,
    modifiedDate: DataTypes.DATE,
    isDraft : DataTypes.BOOLEAN,
    isDeleted : DataTypes.BOOLEAN,
    blobURL : DataTypes.STRING
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: dbConstants.TagTableName
});
SqlConnection.removeAttributeId(ArticleModel)

module.exports = ArticleModel