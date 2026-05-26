function UploadPage() {
    const recentFiles = [
      {
        name: "Research_Paper.pdf",
        date: "26 May 2026",
        status: "Completed",
      },
      {
        name: "Notes.pdf",
        date: "25 May 2026",
        status: "Processing",
      },
      {
        name: "Assignment.pdf",
        date: "24 May 2026",
        status: "Failed",
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 flex">
        
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 p-5 hidden md:block">
          <h1 className="text-2xl font-bold text-blue-600 mb-8">
            AI PDF Analyzer
          </h1>
  
          <nav className="space-y-3">
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100">
              Dashboard
            </button>
  
            <button className="w-full text-left px-4 py-3 rounded-lg bg-blue-100 text-blue-700 font-medium">
              Upload PDF
            </button>
  
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100">
              Summaries
            </button>
  
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100">
              Settings
            </button>
          </nav>
        </aside>
  
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
  
          {/* Navbar */}
          <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
              Upload PDF
            </h2>
  
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
              P
            </div>
          </header>
  
          {/* Page Content */}
          <main className="p-6">
  
            {/* Heading */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Upload PDF
              </h1>
  
              <p className="text-gray-600">
                Upload a PDF file to generate AI summaries and extract text.
              </p>
            </div>
  
            {/* Upload Box */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 text-center mb-8">
              <div className="text-6xl mb-4">📄</div>
  
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Drag & Drop your PDF here
              </h2>
  
              <p className="text-gray-500 mb-6">
                or click to browse files
              </p>
  
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                Choose PDF
              </button>
  
              <div className="mt-5 text-sm text-gray-500">
                PDF only • Max file size: 20MB
              </div>
            </div>
  
            {/* Processing Section */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
  
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-gray-700">
                  Processing PDF...
                </p>
  
                <span className="text-sm text-blue-600 font-medium">
                  72%
                </span>
              </div>
  
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="bg-blue-600 h-full w-[72%]"></div>
              </div>
            </div>
  
            {/* Recent Files */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-5">
                Recent Files
              </h2>
  
              <div className="space-y-4">
                {recentFiles.map((file, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
  
                      <div className="text-3xl">📑</div>
  
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {file.name}
                        </h3>
  
                        <p className="text-sm text-gray-500">
                          Uploaded on {file.date}
                        </p>
                      </div>
                    </div>
  
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        file.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : file.status === "Processing"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {file.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
  
          </main>
        </div>
      </div>
    );
  }
  
  export default UploadPage;