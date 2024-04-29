const { BlobServiceClient, StorageSharedKeyCredential } = require( "@azure/storage-blob");
const config = require('../configs/configConstants.js');

const accountName = config.azure_accountName;
const accountKey = config.azure_accountKey;
const containerName = config.azure_containerName;

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
