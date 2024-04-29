const { DATE } = require("sequelize");

function setDateFormat() {
    DATE.prototype._stringify = function _stringify(date, options) {
        return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
    };
}

function removeAttributeId(Model) {
    Model.removeAttribute('id')
}

module.exports = {
    setDateFormat,
    removeAttributeId
}
