const { DataTypes } = require("sequelize");
const SqlConnection = require("../../middleware/connections/sqlConnection");
const dbConstants = require('../../domain/constants/dbConstants');

SqlConnection.setDateFormat()
const ArticleTagMappingModel = SqlConnection.createSqlConnection().define('ArticleTagMapping', {
    guid: DataTypes.STRING,
    articleId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: dbConstants.tableNames.TagTableName
});
SqlConnection.removeAttributeId(ArticleTagMappingModel)

module.exports = ArticleTagMappingModel
