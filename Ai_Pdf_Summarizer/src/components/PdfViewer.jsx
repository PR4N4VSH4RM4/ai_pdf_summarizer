function PdfViewer({selectedFile}) {
    return (
      <div className="w-full h-full flex flex-col gap-6">
  
        {/* Header */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 flex items-center justify-between">
  
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              PDF Viewer
            </h1>
  
            <p className="text-sm text-gray-500 mt-1">
              Preview uploaded PDF documents
            </p>
          </div>
  
          {/* Controls */}
          <div className="flex items-center gap-3">
  
            <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition">
              Zoom In
            </button>
  
            <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition">
              Zoom Out
            </button>
  
          </div>
  
        </div>
  
        {/* PDF Area */}
        <div className="flex-1 bg-white rounded-2xl border border-gray-200 overflow-hidden flex items-center justify-center">
        {
  selectedFile ? (
    <iframe
    src={URL.createObjectURL(selectedFile)}
    title="PDF Viewer"
    className="w-full h-full"
  />
  ) : (
    <div className="text-center">

      <h2 className="text-2xl font-semibold text-gray-700 mb-3">
        No PDF Selected
      </h2>

      <p className="text-gray-500">
        Uploaded PDF will appear here
      </p>

    </div>
  )
}
          
  
        </div>
  
      </div>
    );
  }
  
  export default PdfViewer;