Olivier Wolfson
Currently signed in to Google Cloud using owolfdev@gmail.com

# Get service key to work in vercel

https://github.com/orgs/vercel/discussions/219

#

# Github Repo

git remote add origin https://github.com/owolfdev/example-gcp-upload.git

git branch -M main

git push -u origin main

####

https://console.cloud.google.com/storage/browser?authuser=4&project=cloud-storage-project-373821&prefix=

Todo:

# Learn Google Cloud Platform

https://www.youtube.com/watch?v=Y4gb4Ce-I88
https://www.cloudskillsboost.google/course_sessions/2252167/video/354198

Make sure that films can be submitted / assigned to multiple festivals. Make sure that films can be assigned multiple genres.

# Allow user to upload to Google Cloud Platform

To allow users to upload files to your Google Cloud Storage bucket in a Next.js app, you will need to follow these steps:

Set up a Google Cloud Storage bucket and make sure that you have the necessary credentials to access it (e.g., a service account key file).

In your Next.js app, install the @google-cloud/storage npm package, which is a client library for interacting with Google Cloud Storage.

Use the @google-cloud/storage package to connect to your Google Cloud Storage bucket and perform the necessary operations to upload a file.

In your Next.js app, create an HTML form that allows users to select a file to upload. When the form is submitted, you can use JavaScript to retrieve the selected file and use the @google-cloud/storage package to upload it to your Google Cloud Storage bucket.

You may also want to consider implementing server-side authentication and authorization to ensure that only authorized users can upload files to your Google Cloud Storage bucket.

Here is some sample code that demonstrates how to use the @google-cloud/storage package to upload a file to a Google Cloud Storage bucket in a Next.js app:

```javascript
const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
  projectId: "my-project-id",
  keyFilename: "/path/to/service-account-key.json",
});

const bucket = storage.bucket("my-bucket-name
");

async function uploadFile(file) {
  const options = {
    gzip: true,
    metadata: {
      cacheControl: "public, max-age=31536000",
    },
  };

  await bucket.upload(file, options);
  console.log(`${file} uploaded to ${bucket.name}.`);
}
```

You can then call the uploadFile function and pass in the file that you want to upload.

######

# upload videos stored on google cloud storage to youtube via javascript in a next js app

To upload videos stored in Google Cloud Storage to YouTube using JavaScript in a Next.js app, you will need to follow these steps:

Set up a YouTube Data API key and make sure that you have enabled the YouTube Data API for your Google Cloud project.

In your Next.js app, install the googleapis npm package, which is a client library for interacting with Google APIs.

Use the googleapis package to authenticate with the YouTube Data API and obtain an access token.

Use the googleapis package to make a request to the YouTube Data API's videos.insert method, passing in the necessary parameters such as the video file's URL, the title and description of the video, etc.

You may also want to consider implementing server-side authentication and authorization to ensure that only authorized users can upload videos to YouTube.

Here is some sample code that demonstrates how to use the googleapis package to upload a video to YouTube in a Next.js app:

```javascript
const { google } = require("googleapis");

const youtube = google.youtube({
  version: "v3",
  auth: "YOUR_API_KEY",
});

async function uploadVideo(videoFileUrl, videoTitle, videoDescription) {
  const res = await youtube.videos.insert({
    part: "snippet,status",
    resource: {
      snippet: {
        title: videoTitle,
        description: videoDescription,
      },
      status: {
        privacyStatus: "public",
      },
    },
    media: {
      body: request(videoFileUrl),
    },
  });
  console.log(`Video uploaded: ${res.data.id}`);
}
```

You can then call the uploadVideo function and pass in the URL of the video file in Google Cloud Storage, as well as the title and description of the video.

# Create a video streaming service using Google Cloud

To set up a video streaming service using Google Cloud, you will need to perform the following steps:

Set up a Google Cloud account and create a new project.

Use Google Cloud Storage to store your video files. This service provides secure and scalable object storage for your data.

Use Google Cloud's Content Delivery Network (CDN) to deliver your video content to users. The CDN uses a network of servers around the world to deliver content quickly and reliably to users.

Use Google Cloud's transcoding service to convert your video files into multiple formats and bitrates. This ensures that your videos can be played on a wide range of devices.

Use a streaming media server, such as Wowza Streaming Engine or Nimble Streamer, to stream your videos to users. You can either host the media server on Google Cloud or on your own infrastructure.

Use a player, such as JW Player or Video.js, to play your videos on your website or application.

Monitor your video streaming service using tools like Google Cloud's Stackdriver to ensure that it is performing optimally and to troubleshoot any issues that may arise.

---

--

Google authentication
fix label on Google login screen
https://github.com/supabase/supabase/issues/1798

https://react-hook-form.com/api/useform

zod notes
password: z.string().min(6, { message: "Please type your password." })

client side redirects
https://www.youtube.com/watch?v=oXWImFqsQF4

try using local storage to set redirect conditions

work on redirect

ToDo:

Continue on Accounts.

check for duplicate user names.
https://stackoverflow.com/questions/59259924/how-to-check-duplicate-username-in-the-database

sendgrid dynamic templates
https://www.youtube.com/watch?v=dPXqmzVm_2I
https://github.com/hunterbecton/sendgrid-next-js/blob/main/email.html
