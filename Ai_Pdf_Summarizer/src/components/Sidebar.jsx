import {
  LayoutDashboard,
  Upload,
  Eye,
} from "lucide-react";

function Sidebar({ activePage, setActivePage, sidebarOpen  }) {

  const menuClass =
  `flex items-center px-4 py-3 rounded-xl text-[15px] transition ${
    sidebarOpen ? "gap-3" : "justify-center"
  }`;

  const activeClass =
    "bg-blue-50 text-blue-600 font-medium";

  const inactiveClass =
    "text-gray-500 hover:bg-gray-100";

  return (
    <aside
  className={`hidden md:flex bg-white border-r border-gray-200 flex-col transition-all duration-300 overflow-hidden ${
    sidebarOpen ? "w-[250px]" : "w-[80px]"
  }`}
>
      {/* Logo */}
      <div className="h-16 flex items-center px-5 border-b border-gray-200">

        <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-semibold">
          
        </div>

        {sidebarOpen && (
  <h1 className="ml-3 text-[22px] font-semibold text-gray-800">
    PDF Analyzer
  </h1>
)}
      </div>

      {/* Menu */}
      <div className="p-4 flex flex-col gap-1">

        {/* Dashboard */}
        <button
          className={`${menuClass} ${
            activePage === "dashboard"
              ? activeClass
              : inactiveClass
          }`}
          onClick={() => setActivePage("dashboard")}
        >
          <LayoutDashboard size={18} />
          {sidebarOpen && "Dashboard"}
        </button>

        {/* Upload */}
        <button
          className={`${menuClass} ${
            activePage === "upload"
              ? activeClass
              : inactiveClass
          }`}
          onClick={() => setActivePage("upload")}
        >
          <Upload size={18} />
          {sidebarOpen && "Upload PDF"}
        </button>

        {/* Viewer */}
        <button
          className={`${menuClass} ${
            activePage === "viewer"
              ? activeClass
              : inactiveClass
          }`}
          onClick={() => setActivePage("viewer")}
        >
        <Eye size={18} />
        {sidebarOpen && <span>PDF Viewer</span>}
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;