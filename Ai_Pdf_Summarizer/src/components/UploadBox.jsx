function UploadBox() {
    return (
<div className="flex flex-col items-center justify-center min-h-screen pt-10 w-full px-6 bg-white">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-5xl border-2 border-dashed border-slate-300 cursor-pointer hover:border-indigo-500 transition">
          
        <h1 className="text-3xl font-bold mb-6 text-center !text-black">
            Drag and Drop your Pdf here
          </h1>
          <p className="text-sm text-gray-400 mt-4">
  or browse from your computer- up to 50MB per file 
</p>
            
          
          <label className="flex flex-col items-center justify-center cursor-pointer">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg mt-6 transition">
                Choose File
            </button>
            <p className="text-sm text-gray-400 mt-4">
  PDF files only
</p>
            

  
            <input
              type="file"
              accept="application/pdf"
              className="hidden"
            />
          </label>
  
        </div>
      </div>
    );
  }
  
  export default UploadBox;