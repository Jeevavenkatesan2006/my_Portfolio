// src/components/ResumeDownload.jsx
import React, { useState } from "react";

/**
 * ResumeDownload (React-only)
 *
 * Behavior:
 * - Try to download /resume.png (fast, preferred)
 * - If not present, download /resume.pdf as fallback
 *
 * Requirements:
 * - Place resume.png or resume.pdf in the project's public/ folder
 * - No external libraries required
 */

export default function ResumeDownload() {
  // IMPORTANT: These are root paths (public/ is served as root)
  const imgPath = "/resume.png"; // image in public/
  const pdfPath = "/resume.pdf"; // PDF in public/

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Helper: download a Blob with given filename
  const downloadBlob = (blob, filename) => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  };

  // Try to fetch an image at imgPath. If found, return blob; otherwise null.
  const fetchImageIfExists = async () => {
    try {
      const r = await fetch(imgPath, { method: "GET", cache: "no-cache" });
      if (!r.ok) return null;
      const ct = (r.headers.get("content-type") || "").toLowerCase();
      if (!ct.startsWith("image/")) return null;
      return await r.blob();
    } catch {
      return null;
    }
  };

  // Fetch PDF as blob (throws if not found)
  const fetchPdfBlob = async () => {
    const r = await fetch(pdfPath, { method: "GET", cache: "no-cache" });
    if (!r.ok) throw new Error(`PDF not found (${r.status})`);
    return await r.blob();
  };

  // Main handler: prefer image, else download PDF
  const handleDownload = async () => {
    setError("");
    setLoading(true);
    try {
      // 1) Try image
      const imgBlob = await fetchImageIfExists();
      if (imgBlob) {
        // Choose extension from content-type, default png
        const ct = imgBlob.type || "image/png";
        const ext = (ct.split("/")[1] || "png").split(";")[0];
        downloadBlob(imgBlob, `JeevaV_Resume.${ext}`);
        setLoading(false);
        return;
      }

      // 2) Fallback to PDF
      try {
        const pdfBlob = await fetchPdfBlob();
        downloadBlob(pdfBlob, "JeevaV_Resume.pdf");
        setLoading(false);
        return;
      } catch (pdfErr) {
        throw new Error("Neither resume.png nor resume.pdf found in public/.");
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "Download failed.");
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-r from-purple-900 via-violet-800 to-pink-700 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Download My Resume
        </h2>
        <p className="text-gray-300 mb-6">
          Click to download the resume as an image (preferred). If the image is
          missing, the PDF will be downloaded.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleDownload}
            disabled={loading}
            className="px-6 py-3 bg-green-500 text-white rounded-full shadow hover:scale-105 transform transition"
          >
            {loading ? "Preparing..." : "Download Resume"}
          </button>

          <a
            href={imgPath}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-white text-white rounded"
          >
            Open image (if exists)
          </a>
        </div>

        {error && <p className="text-red-300 mt-4">{error}</p>}

        <p className="mt-6 text-gray-400 text-xs">
          Make sure the file is in <code>public/resume.png</code> or{" "}
          <code>public/resume.pdf</code>. Rename your uploaded PDF to{" "}
          <code>resume.pdf</code> (no spaces) for best results.
        </p>
      </div>
    </section>
  );
}
