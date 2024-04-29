const  azureConfig  = require( '../configs/azureConfig.js');
const { BlobServiceClient, StorageSharedKeyCredential } = require( "@azure/storage-blob");

const accountName = azureConfig.accountName;
const accountKey = azureConfig.accountKey;
const containerName = azureConfig.containerName;

const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);
const blobServiceClient = new BlobServiceClient(
  `https://${accountName}.blob.core.windows.net`,
  sharedKeyCredential
);

async function uploadFileToBlobStorage(file) {
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blockBlobClient = containerClient.getBlockBlobClient(file.originalname);
  await blockBlobClient.uploadFile(file.path);
  return `File ${file.originalname} uploaded successfully.`;
}

module.exports = {
    uploadFileToBlobStorage
}
