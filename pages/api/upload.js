//import fs from "fs";
import formidable from "formidable";
import { uploadFile } from "../../utils/google-cloud-script";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  console.log("Upload request received");
  const form = formidable();
  form.parse(req, async (err, fields, files) => {
    // Check for errors
    if (!files.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    try {
      //console.log("file", files.file);
      await uploadFile(files["file"].filepath, files["file"].originalFilename);
      return res.status(200).json({ message: "File uploaded successfully" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err.message });
    }
  });
};
