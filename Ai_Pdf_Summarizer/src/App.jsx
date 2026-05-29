import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import UploadBox from "./components/UploadBox";
import PdfViewer from "./components/PdfViewer";

function App() {

  const [activePage, setActivePage] = useState("upload");
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">

      {/* Sidebar */}
      <Sidebar
  activePage={activePage}
  setActivePage={setActivePage}
/>

      {/* Main */}
      <div className="flex flex-col flex-1">

        {/* Navbar */}
        <Navbar activePage={activePage} />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">

          {activePage === "upload" && <UploadBox setSelectedFile ={setSelectedFile}/>}

          {activePage === "viewer" && <PdfViewer selectedFile = {selectedFile}/>}

        </main>

      </div>

    </div>
  );
}

export default App;