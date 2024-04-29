const express  = require("express");
const multer = require( "multer");
const uploadFileToBlobStorage  = require( "../middleware/connections/blobConnection");

const router = new express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/storageUpload", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    const result = await uploadFileToBlobStorage(file);
    res.status(200).json({ message: result });
  } catch (error) {
    console.error("Error uploading file to Azure Blob Storage:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
