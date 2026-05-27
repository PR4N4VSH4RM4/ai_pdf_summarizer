import {
    LayoutDashboard,
    Upload,
    Eye,
    FileText,
    Settings,
  } from "lucide-react";
  
  function Sidebar() {
    return (
      <div className="w-64 h-screen bg-white border-r">
  

        <div className="h-16 border-b flex items-center px-6">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
            P
          </div>
  
          <h1 className="ml-3 text-xl font-semibold">
            PDF Analyzer
          </h1>
        </div>

        <div className="p-4 flex flex-col gap-2">
  
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100">
            <LayoutDashboard size={20} />
            Dashboard
          </button>
  
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 text-blue-600 font-medium">
            <Upload size={20} />
            Upload PDF
          </button>
  
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100">
            <Eye size={20} />
            PDF Viewer
          </button>
  

  
        </div>
  
      </div>
    );
  }
  
  export default Sidebar;