const fs = require('fs');

function WriteToPath(fileName, fileContent){
    try{
    const path = `../../../uploads/${fileName}`;
    fs.writeFileSync(path,fileContent);
    return path;
    } catch(err) {
        console.log('Error in writing to path ', err);
        throw err;
    }
}

module.exports = {
    WriteToPath
}