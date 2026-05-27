import { Menu, Bell } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full h-16 bg-white border-b flex items-center justify-between px-6">

      {/* Left Section */}
      <div className="flex items-center gap-4">
        
        {/* Menu Icon */}
        <Menu className="w-6 h-6 text-gray-600 cursor-pointer" />

        {/* Page Name */}
        <h1 className="text-xl font-semibold text-gray-800">
          Upload PDF
        </h1>

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">




      </div>

    </nav>
  );
}

export default Navbar;