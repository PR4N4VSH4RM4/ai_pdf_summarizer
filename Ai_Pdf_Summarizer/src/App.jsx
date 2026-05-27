import Sidebar from "./components/Toolbar";
import Navbar from "./components/navbar";
import UploadBox from "./components/UploadBox";

import {
  Routes,
  Route,
} from "react-router-dom";

function Dashboard() {
  return (
    <h1 className="text-3xl font-bold">
      Dashboard
    </h1>
  );
}

function App() {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1 flex flex-col">

        <Navbar />

        <main className="p-8">

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/upload"
              element={<UploadBox />}
            />

          </Routes>

        </main>

      </div>

    </div>
  );
}

export default App;