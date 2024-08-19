import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

// CSS Class Names
const navbarContainer =
  "w-full flex justify-between bg-red-100 shadow-lg px-8 py-4";

const centerLinksContainer = "hidden lg:flex items-center space-x-4";
const linkStyle = "hover:bg-gray-100 rounded-full px-3 py-2";
const rightContainer = "flex items-center space-x-4";

const userMenuContainer =
  "flex items-center space-x-3 border-2 rounded-full px-4 py-2 text-xl border-gray-500 text-gray-600 cursor-pointer";

// Component
const HostNavbar = () => {
  return (
    <div className={navbarContainer}>
      {/* LEFT */}
      <div>
        <Image
          alt="banner"
          src="/Image/logo.png"
          width={120}
          height={40}
          className="w-[120px] h-10"
        />
      </div>

      {/* MIDDLE */}

      {/* RIGHT */}
      <div className={rightContainer}>
        <Link className={linkStyle} href="/">
          Home
        </Link>
        <div className={userMenuContainer}>
          <FaRegUserCircle className="font-bold" />
          <RxHamburgerMenu className="font-bold" />
        </div>
      </div>
    </div>
  );
};

export default HostNavbar;
