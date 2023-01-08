//Description: This script is used to upload files to Google Cloud Storage
const { Storage } = require("@google-cloud/storage");

// const storage = new Storage({
//   projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
//   keyFilename: process.env.GOOGLE_CLOUD_KEY_FILE,
// });

const storage = new Storage({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  credentials: {
    type: "service_account",
    project_id: process.env.GOOGLE_CLOUD_PROJECT_ID,
    private_key_id: process.env.GOOGLE_CLOUD_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_CLOUD_PRIVATE_KEY,
    client_email:
      "owolf-service-account-1@cloud-storage-project-373821.iam.gserviceaccount.com",
    client_id: "113398809103466733332",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/owolf-service-account-1%40cloud-storage-project-373821.iam.gserviceaccount.com",
  },
});

const bucket = storage.bucket("owolf-image-storage");

export async function uploadFile(file, filename) {
  console.log("gcp private key", process.env.GOOGLE_CLOUD_PRIVATE_KEY);

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
