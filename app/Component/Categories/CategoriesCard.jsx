// Hydration error- Maybe due to Link

import Link from "next/link";
import React from "react";

// Style constants
const cardStyles =
  "bg-white cursor-pointer px-4 py-5 flex space-x-4 items-center rounded-md font-semibold border border-[#F7F7F7] hover:shadow-lg transition-shadow duration-300 hover:border-[1.3px] hover:border-black";
const iconStyles = "text-xl";

const CategoriesCard = ({ icon, title }) => {
  return (
    <div className={cardStyles}>
      <Link
        className="flex space-x-4"
        href={`/properties/${encodeURIComponent(title).substring(
          0,
          title.length
        )}`}
      >
        <h1 className={iconStyles}>{icon}</h1>
        <h1>{title}</h1>
      </Link>
    </div>
  );
};

export default CategoriesCard;
