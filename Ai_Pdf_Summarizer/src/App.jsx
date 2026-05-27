import Sidebar from "./components/Toolbar";
import Navbar from "./components/navbar";
import UploadBox from "./components/UploadBox";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <Header />

        {/* Content */}
        <main className="p-8">

          <UploadBox />

        </main>

      </div>

    </div>
  );
}

export default App;