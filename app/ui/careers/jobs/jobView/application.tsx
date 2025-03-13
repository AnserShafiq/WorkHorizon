'use client'
import { JobFormData } from "@/app/lib/elements";
import { useState } from "react";

export default function JobApplication({JobDetails}: {JobDetails: JobFormData}){
    const [file, setFile] = useState<File | null>(null);
  const [uploadUrl, setUploadUrl] = useState<string | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.success) {
      setUploadUrl(data.url);
    } else {
      alert("Upload failed");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadUrl && (
        <p>
          File uploaded: <a href={uploadUrl} target="_blank">View File</a>
        </p>
      )}
    </div>
  );
}