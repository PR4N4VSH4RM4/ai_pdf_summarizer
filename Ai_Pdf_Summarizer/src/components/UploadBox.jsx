function UploadBox() {
    return (
      <div className="w-full">
  
        <div className="bg-white p-10 rounded-2xl shadow-sm border-2 border-dashed border-slate-300 hover:border-indigo-500 transition">
  
          <div className="flex flex-col items-center py-20">
  
            <h1 className="text-3xl font-bold mb-4 text-center text-black">
              Drag and Drop your PDF here
            </h1>
  
            <p className="text-gray-500 mb-6 text-center">
              or browse from your computer — up to 50MB per file
            </p>
  
            <label className="cursor-pointer">
  
              <div className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
                Choose File
              </div>
  
              <input
                type="file"
                accept="application/pdf"
                className="hidden"
              />
  
            </label>
  
            <p className="text-sm text-gray-400 mt-4">
              PDF files only
            </p>
  
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default UploadBox;