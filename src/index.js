const express = require( "express");
const storageController = require( "./controller/azureStorageController");
const tagController = require( "./controller/tagController");
const { json, urlencoded } = require( 'body-parser');


const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/api", storageController);
app.use("/api/tag", tagController);


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server status OK on port ' + port)
})
