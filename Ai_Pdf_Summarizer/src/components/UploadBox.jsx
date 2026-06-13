import { Upload } from "lucide-react";

function UploadBox({setSelectedFile, setActivePage, setOcrText}) {
  return (
    <div className="w-full">

      <div className="bg-white border border-dashed border-gray-300 py-16 px-5 md:py-28 md:px-10 rounded-2xl min-h-[340px] flex flex-col items-center justify-center">

        {/* Upload Icon */}
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6">
          <Upload className="text-gray-500" size={28} />
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
          Drag and drop your PDF here
        </h1>

        {/* Subheading */}
        <p className="text-gray-500 mb-8 text-sm">
          or browse from your computer — up to 50 MB per file
        </p>

        {/* Button */}
        <label className="cursor-pointer">

        <div className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition">
          Choose File
          </div>
          

          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={async (e) => {
              const file = e.target.files[0];
            
              if (!file) return;
            
              setSelectedFile(file);
            
              const formData = new FormData();
              formData.append("file", file);
            
              try {
                const response = await fetch(
                  "http://localhost:5000/api/pdf",
                  {
                    method: "POST",
                    body: formData,
                  }
                );
            
                const data = await response.json();
                console.log("API Response:", data);
            
                console.log(data);
            
                setOcrText(data.text);
            
                setTimeout(() => {
                  setActivePage("viewer");
                }, 100);
            
              } catch (error) {
                console.error(error);
              }
            }}
          />

        </label>

        <p className="text-sm text-gray-400 mt-5">
          PDF files only
        </p>

      </div>

    </div>
  );
}

export default UploadBox;