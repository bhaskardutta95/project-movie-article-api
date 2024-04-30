const express = require( "express");
const { json, urlencoded } = require( 'body-parser');
const storageController = require( "./controller/azureStorageController");
const tagController = require( "./controller/tagController");
const articleController = require( "./controller/articleController");

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/api", storageController);
app.use("/api/tag", tagController);
app.use("/api/article", articleController);

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server status OK on port ' + port)
})
