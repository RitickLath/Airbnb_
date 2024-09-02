// Layout.js
import HostNavbar from "@/app/Component/Navbar/HostNavbar";
import React from "react";
import AtomWrapper from "./AtomWrapper";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <HostNavbar />
      <AtomWrapper>
        <div className="flex-1 overflow-auto">{children}</div>
      </AtomWrapper>
    </div>
  );
};

export default Layout;
