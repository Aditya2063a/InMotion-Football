import { useState } from "react";

function Upload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null); // State to store the download URL

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);
      setDownloadUrl(null); // Reset download URL when a new file is selected
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setError(null);
      setDownloadUrl(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    setError(null);
    const formData = new FormData();
    formData.append("file", file); // Match the FastAPI parameter name "file"

    try {
      const response = await fetch("http://localhost:8000/process-video/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed: " + response.statusText);
      }

      // Get the processed video as a blob
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url); // Store the URL for downloading
      setUploading(false);
    } catch (error) {
      console.error("Upload failed:", error);
      setError("Failed to upload and process video. Please try again.");
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 to-purple-200 text-black pt-24 pb-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold text-center uppercase tracking-tight text-black mb-12">
          Upload Football Video
        </h1>

        {/* Upload Form */}
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 animate-fade-in"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            {/* File Input Area */}
            <div
              className={`border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 ${
                dragActive ? "border-purple-600 bg-purple-100/30" : "border-gray-400"
              }`}
            >
              <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <svg
                  className="h-12 w-12 text-purple-600 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="text-purple-700">
                  {file ? file.name : "Drag & drop a video or click to select"}
                </p>
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-600 text-center mt-4">{error}</p>
            )}

            {/* Upload Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className={`px-6 py-3 rounded-full text-lg font-medium uppercase tracking-wide transition-all duration-300 ${
                  uploading || !file
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-purple-600 text-white hover:bg-purple-700 hover:scale-110 shadow-lg"
                }`}
                disabled={uploading || !file}
              >
                {uploading ? (
                  <div className="flex items-center space-x-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                    <span>Uploading...</span>
                  </div>
                ) : (
                  "Upload"
                )}
              </button>
            </div>

            {/* Download Button */}
            {downloadUrl && (
              <div className="flex justify-center mt-6">
                <a
                  href={downloadUrl}
                  download="processed-video.avi"  // Set the filename with .avi extension
                  className="px-6 py-3 rounded-full text-lg font-medium uppercase tracking-wide bg-purple-600 text-white hover:bg-purple-700 hover:scale-110 shadow-lg transition-all duration-300"
                >
                  Download Processed Video (AVI)
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Upload;