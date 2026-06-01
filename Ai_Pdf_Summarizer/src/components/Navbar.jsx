import { Menu } from "lucide-react";
function Navbar({ setSidebarOpen }) {
  return (
    <nav className="h-16 bg-white border-b border-gray-200 flex items-center px-6">
      <button
        onClick={() => setSidebarOpen(prev => !prev)}
         className="p-2 rounded-lg hover:bg-gray-100 transition"
      >
       <Menu size={22} />
      </button>

      <h1 className="text-[20px] font-semibold text-gray-800">
        Upload PDF
      </h1>

    </nav>
  );
}

export default Navbar;