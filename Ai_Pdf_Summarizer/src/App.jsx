import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import UploadBox from "./components/UploadBox";
import PdfViewer from "./components/PdfViewer";

function App() {

  const [activePage, setActivePage] = useState("upload");
  const [selectedFile, setSelectedFile] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

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

          {activePage === "upload" && <UploadBox setSelectedFile ={setSelectedFile} setActivePage={setActivePage}/>}

          {activePage === "viewer" && <PdfViewer selectedFile = {selectedFile}/>}

        </main>

      </div>

    </div>
  );
}

export default App;