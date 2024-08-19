// Hydration

import Link from "next/link";
import React from "react";

// Define style constants
const linkStyle =
  "flex flex-col items-center justify-center text-[#6A6A6A] hover:text-black cursor-pointer";
const iconStyle = "text-[1.8rem]";
const titleStyle = "text-sm";

const IconsCard = ({ icon, title }) => {
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className={linkStyle}>
      <Link href={`/properties/category?title=${encodedTitle}`} className={""}>
        <div className={iconStyle}>{icon}</div>
        <h1 className={titleStyle}>{title}</h1>
      </Link>
    </div>
  );
};

export default IconsCard;
