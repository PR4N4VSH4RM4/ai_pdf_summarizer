import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import UploadBox from "./components/UploadBox";
import PdfViewer from "./components/PdfViewer";

function App() {

  const [activePage, setActivePage] = useState("upload");
  const [selectedFile, setSelectedFile] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [ocrText, setOcrText] = useState("");



  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">

      {/* Sidebar */}
      <Sidebar
  activePage={activePage}
  setActivePage={setActivePage}
  sidebarOpen={sidebarOpen}
/>


      {/* Main */}
      <div className="flex flex-col flex-1">

        {/* Navbar */}
        <Navbar activePage={activePage} 
        setSidebarOpen={setSidebarOpen}/>

        {/* Page Content */}
        <main className="flex-1 p-3 md:p-6 overflow-y-auto">

          {activePage === "upload" && <UploadBox setSelectedFile ={setSelectedFile} setActivePage={setActivePage} setOcrText={setOcrText}/>}

          {activePage === "viewer" && <PdfViewer selectedFile = {selectedFile}/>}
          {ocrText && (
  <div className="bg-white p-4 rounded-xl mt-4">
    <h2 className="font-bold mb-2">
      OCR Text
    </h2>

    <pre className="whitespace-pre-wrap">
      {ocrText}
    </pre>
  </div>
)}

        </main>

      </div>

    </div>
  );
}

export default App;