const express = require( "express");
const _articleService = require( '../services/core/articleService');
const articleDto = require('../domain/dataObjects/articleDto');
const router = new express.Router();
const multer = require( "multer");
const upload = multer({ dest: "uploads/" });

router.post("/addArticle",upload.single("file"), async (req, res) => {
    try {
        const file = req.file;
        const { authorGuid, articleTitle, isDraft, tagIds, categoryId } = req.body;

        const ArticleDto = new articleDto();
        ArticleDto.ArticleTitle = articleTitle;
        ArticleDto.CreatedDate = new Date(Date.now()).toISOString();
        ArticleDto.IsDraft = isDraft;
        ArticleDto.TagIds = tagIds;
        ArticleDto.CategoryId = categoryId;
        ArticleDto.ArticleBody = file;
        ArticleDto.AuthorGuid = authorGuid;

        const addArticle = await _articleService.addArticle(ArticleDto);
        res.status(200).json(addArticle);

    } catch (error) {
      console.error("Error fetching tags", error);
      res.status(500).json({ error: "Error while saving article" });
    }
  });
  
  module.exports = router