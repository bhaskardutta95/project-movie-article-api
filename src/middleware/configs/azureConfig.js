const config = require('./configConstants');

const azureConfig = {
    accountName : config.azure_accountName,
    accountKey : config.azure_accountKey,
    containerName : config.azure_containerName,
    blobName : config.azure_blobName
  };
  
module.exports = azureConfig;
