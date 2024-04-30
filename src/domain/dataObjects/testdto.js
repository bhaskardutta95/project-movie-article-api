const arDto = require('../dataObjects/articleDto');

var arD = new arDto();
arD.ArticleTitle = 'hello';
console.log(arD.Guid, '--', arD.ArticleTitle)