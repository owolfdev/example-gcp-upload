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
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCc04Li+V9j5OTC\nB4mqgyPL6K0k0yIVEvRBxPn0ZPZxgj/Gfra72fhD7UZyJCjD7vQzWrYd4jP+gdn8\n+8jw/MdRW99UlOhJvGxA0FbWdnV7tjDCm3/sh8xRpQRXizyxfKq5rTf336oIdzhV\ngzcyfFxNPjzMyhbVfbrprIT3553zN+BtjYsU3b5NF0qZKnEbdJAFYa//BliHnx8/\nziuWoI5xRIyplj4eVPqk9u/KoKyXXiDjlqOU2Uw1iDflABKZ2kGXmmiV4X0JnB2I\n2jRHxIWVLxeJFvnHauVAzE+6BAQCkvYfz+/FRtUBgv3R9aNGN5qRzUHuWucJ7j6T\nlrkcjedzAgMBAAECggEAGeNWh2ZYB1L5Kkh5QsMMLTR3JI2P4j+zP4onIt9pyToR\nkhBH1QG52Gi6SMxMSG/RMwsF5i/5mklQNVFRDesEchtC5iEAqW9nxVk/BH8gjK/6\nI53sw5x1L4MYkOUEu13ThvwfsZTj6irYC1GyUmyyBfRAsCOqGkr7iGh4uL2s1sG/\n6WAQxCSRysF0kbI7I1GpL1ZhrRaThEtGsatnJrsYnt/n20BiBCNMw4PsS/I4Knlk\nU1U4bH0hHvnuekZ5Uluil9B+pQ3fyxzSiRbwEDijYJvRzkehSYxx3grb5URV9nME\nVhmOw+C6/tonT/fAjkIyiCJ6beE2pzwyWnkDjKZ2dQKBgQDMiws/DxSNdOLj98fd\nHQiakA75QncDf6wFRL3hgkkzY7gzZbRcZmE4B0sa//Y+6ClKvwKDvTRMYdzKpaIV\nCxTYzvTpC6bH0Fr5lAPCiKKBtV2Rb2U5CRl5u8fuOnyJDQH4YwZ4Eq9BDluVFgkQ\nmDRbFYbp4n/P2NQPq2d8dH7+PQKBgQDER2jF2/0iDCCuigjEuhlcyJeb2x1qSJ03\nXyUL1JApohHKqsy1a62mCQDAPkiaLaw+3unEZB6jIr0mzCDv63wE5xlRjKeDx58F\nRHDzCdUtsW8ZUYRsrQDBFf75rEth25KnFIVME3smTfg7ke6qpnhQjPH7tENino9Q\nVsoQhVIHbwKBgQCvBKap3XB7nbFq2SC2LVqoTm3RkLKfVsZNd8V1yXJzO3do2zSZ\n/6xeMbdtMel1aFe0sn4nVWUDmpU+/L0UfnfnECb1pdeej8TYW3NgKGPM0vBuOkAF\nrqiSxj/Ls1XOO0gdTjZB1dMJuoxYpBM7lNDvwxq+0+UDZwgFJGgXUOM9DQKBgCWM\nJ43aJJVzzni1LTI9C4cFVINbKkhftbuW9uZJdn6QY2jqvZhjDef6Rut/vrHH1PB+\nAigwou/AQIEAgbiDysjBUMWZ6524/UGrsxO7KM3B6KfmQTfs7H0DcTBf9le1Alv1\n//3qqB9OwRLcOtToXZHDNLNa650dCftrbuI0Ltn/AoGAdgEV4eSEB0HjedwypO6J\nUoN7Pou0n1p9W7C7Uq569pQgFFvyH84cCCE6TYxjzk01IP4+NXVErcv/tm48kvOB\nL09I2Nxi5zUdwFsniDz9JeLwYlY2oUdlnomJ7oObgwWr4ym2ZSMFbIMibBKgxAAM\nFk8CyFUTagYRZVeI+jwm3E4=\n-----END PRIVATE KEY-----\n",
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
