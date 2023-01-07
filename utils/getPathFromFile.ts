import multer from "multer";
import fs from "fs";
import path from "path";
import os from "os";

import { Storage } from "@google-cloud/storage";

const storage = new Storage({
  projectId: "cloud-storage-project-373821",
  keyFilename:
    "/Users/wolf/Documents/Development/Education/google_cloud/google-cloud-upload-dl/scripts/cloud-storage-project-373821-bd7a764663a2.json",
});

const bucket = storage.bucket("owolf-image-storage");

async function uploadFile(file: string): Promise<void> {
  const options = {
    gzip: true,
    metadata: {
      cacheControl: "public, max-age=31536000",
    },
  };

  try {
    await bucket.upload(file, options);
    console.log(`${file} uploaded to ${bucket.name}.`);
  } catch (error: any) {
    console.error(`Error uploading file: ${error.message}`);
  }
}

// Set up Multer to handle the file upload
const upload = multer({ storage: multer.memoryStorage() });

export default async (req: any, res: any): Promise<void> => {
  console.log("hello from upload api");

  if (req.method === "POST") {
    // Use Multer to handle the file upload
    upload.single("file")(req, res, (err: any) => {
      if (err) {
        return res.status(400).send(err.message);
      }

      // Write the file data to a temporary file
      const filePath = path.join(os.tmpdir(), req.file.originalname);
      fs.writeFileSync(filePath, req.file.buffer);

      // Pass the file path to the uploadFile function
      uploadFile(filePath)
        .then(() => {
          res.status(200).send("File uploaded");
        })
        .catch((err) => {
          res.status(500).send(err.message);
        });
    });
  } else {
    res.setHeader("Allow", "POST");
    return res.status(405).send("Method Not Allowed");
  }
};
