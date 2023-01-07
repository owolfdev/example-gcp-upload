//Description: This script is used to upload files to Google Cloud Storage
const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  keyFilename: process.env.GOOGLE_CLOUD_KEY_FILE,
});

const bucket = storage.bucket(process.env.GOOGLE_CLOUD_STORAGE_BUCKET);

export async function uploadFile(file, filename) {
  const options = {
    destination: filename,
    gzip: true,
    metadata: {
      cacheControl: "public, max-age=31536000",
    },
  };

  try {
    await bucket.upload(file, options);
    console.log(`${file} uploaded to ${bucket.name}.`);
  } catch (error) {
    console.error(`Error uploading file: ${error.message}`);
  }
}
