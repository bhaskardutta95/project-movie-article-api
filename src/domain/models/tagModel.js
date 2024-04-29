const { DataTypes } = require("sequelize");
const SqlConnection = require("../../middleware/connections/sqlConnection");
const { setDateFormat, removeAttributeId } = require('../../middleware/configs/sequelizeConfig');
const dbConstants = require('../../domain/constants/dbConstants');

SqlConnection.setDateFormat()
const TagModel = SqlConnection.createSqlConnection().define('TAG', {
    guid: DataTypes.STRING,
    name: DataTypes.STRING,
    createdDate: DataTypes.DATE,
    modifiedDate: DataTypes.DATE
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: dbConstants.tableNames.TagTableName
});
SqlConnection.removeAttributeId(TagModel)

module.exports = TagModel
