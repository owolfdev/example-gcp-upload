import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
//import uploadFile from "../scripts/google-cloud";

export default function Home() {
  const [file, setFile] = useState<any>();
  useEffect(() => {}, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileElement = e.target as HTMLInputElement;
    const formData = fileElement.files?.item(0);
    //console.log("form data:", formData);
    setFile(formData);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    fetch("./api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <div className=" p-11   space-y-9 ">
        <h1 className="text-4xl font-bold">Google Cloud Platform Upload</h1>
        <input type="file" name="file" id="file" onChange={handleFileInput} />
        <button
          className="border border-black rounded px-2"
          onClick={handleUpload}
        >
          upload
        </button>
      </div>
    </>
  );
}
