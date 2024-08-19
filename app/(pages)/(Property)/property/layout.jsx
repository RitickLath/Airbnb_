import MainNavbar from "@/app/Component/Navbar/MainNavbar";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <MainNavbar />
      {children}
    </div>
  );
};

export default HomeLayout;
