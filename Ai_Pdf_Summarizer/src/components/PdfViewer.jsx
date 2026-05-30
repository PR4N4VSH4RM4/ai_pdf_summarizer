import { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
// import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc =
  `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function PdfViewer({ selectedFile }) {

  const [numPages, setNumPages] = useState();
  const [scale, setScale] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="w-full h-full flex flex-col gap-6">

<div className="bg-white rounded-2xl border border-gray-200 px-6 py-4 shadow-sm">

  <div className="flex items-center gap-4">

    <h1 className="text-2xl font-semibold text-gray-800">
      PDF Viewer
    </h1>
    <div className="h-6 w-px bg-gray-300"></div>
    <button
  onClick={() => setScale((prev) => Math.max(0.5, prev - 0.2))}
  className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-300 shadow-sm hover:bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-700"
>
  −
</button>

<span className="px-3 py-2 text-sm font-medium text-gray-600">
  {Math.round(scale * 100)}%
</span>

<button
  onClick={() => setScale((prev) => Math.min(3, prev + 0.2))}
  className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-300 shadow-sm hover:bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-700"
>
  +
</button>

  </div>

</div>

      {/* Viewer */}
      <div className="flex-1 bg-white rounded-2xl border border-gray-200 overflow-auto p-5">

        {
          selectedFile ? (

            <Document

  file={URL.createObjectURL(selectedFile)}
  onLoadSuccess={onDocumentLoadSuccess}
  onLoadError={(error) => {
    console.error("PDF LOAD ERROR:", error);
  }}
  onSourceError={(error) => {
    console.error("PDF SOURCE ERROR:", error);
  }}
>

              
               {
                numPages &&
                Array.from(
                  new Array(numPages),
                  (el, index) => (
                    <div
                      key={`page_${index + 1}`}
                      className="mb-6 flex justify-center"
                    >

                      <Page
                        pageNumber={index + 1}
                        scale={scale}
                      />

                    </div>
                  )
                )
              }

            </Document>

          ) : (

            <div className="w-full h-full flex items-center justify-center">

              <div className="text-center">

                <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                  No PDF Selected
                </h2>

                <p className="text-gray-500">
                  Upload a PDF to preview it here
                </p>

              </div>

            </div>

          )
        }

      </div>

    </div>
  );
}

export default PdfViewer;