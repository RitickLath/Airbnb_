// Hydration Error - Mayber
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define style constants
const linkStyle = "lg:w-[350px] mb-8";
const imageStyle = "w-full h-[250px] rounded-md";
const titleStyle = "font-semibold mt-2";
const paragraphStyle = "text-normal text-gray-500";

const DisplayCard = ({ image, title, paragraph }) => {
  return (
    <div className={linkStyle}>
      <Link href="/" passHref>
        <Image
          alt={title || "Image"} // Better alt text for accessibility
          src={image}
          width={300}
          height={250} // Consistent aspect ratio
          className={imageStyle}
        />
        <h1 className={titleStyle}>{title}</h1>
        <h2 className={paragraphStyle}>{paragraph}</h2>
      </Link>
    </div>
  );
};

export default DisplayCard;
