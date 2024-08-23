import HostNavbar from "@/app/Component/Navbar/HostNavbar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar at the top */}
      <HostNavbar />

      {/* Main content area */}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
};

export default Layout;
