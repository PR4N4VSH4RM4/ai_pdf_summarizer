function UploadBox() {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-slate-800 p-10 rounded-2xl shadow-xl w-[500px]">
          
          <h1 className="text-3xl font-bold mb-6 text-center">
            Drop a PDf 
          </h1>
  
          <label className="border-2 border-dashed border-slate-500 rounded-xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 transition">
            
            <p className="text-lg mb-2">
              Upload PDF
            </p>

            <p className="text-sm text-slate-400">
              Drag & Drop or Click
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