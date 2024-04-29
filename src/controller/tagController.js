const express = require( "express");
const _tagService = require( '../services/core/tagService');
const router = new express.Router();


router.get("/getAllTags", async (req, res) => {
  try {
    res.status(200).json(await _tagService.getAllTags());
  } catch (error) {
    console.error("Error fetching tags", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/addTag", async (req, res) => {
  try {
    const tags = await _tagService.addTag();
    res.status(200).json({ tags });
  } catch (error) {
    console.error("Error fetching tags", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/addTags", async (req, res) => {
  try {
    const array = req.body;
    const bulkInsertTags = await _tagService.addTags(array);
    if(bulkInsertTags){
      res.status(200).json("Tag/Tags added successfully" );
    } else {
      res.status(500).json('Adding TAG failed');
    }
  } catch (error) {
    console.error("Error fetching tags", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router