import React, { useState } from 'react';
import axios from 'axios';

const UploadPDF = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:8000/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setStatus("✅ File uploaded successfully!");
      onUpload();
    } catch (err) {
      setStatus("❌ Upload failed. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
        className="file-input file-input-bordered file-input-info w-full max-w-xs"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full max-w-xs"
      >
        Upload PDF
      </button>
      {status && <p className="text-gray-700 text-sm text-center">{status}</p>}
    </div>
  );
};

export default UploadPDF;