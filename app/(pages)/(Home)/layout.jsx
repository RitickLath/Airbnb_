import Navbar from "@/app/Component/Navbar/Navbar";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default HomeLayout;
