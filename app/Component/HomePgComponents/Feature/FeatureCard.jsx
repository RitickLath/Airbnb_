import React from "react";

const topDivStyle = "text-xl mb-16 lg:mb-0 lg:w-[350px]";
const iconStyle = "my-2";
const headingStyle = "font-semibold my-2";
const paragraphStyle = "my-2 text-lg";

const FeatureCard = ({ icon, heading, paragraph }) => {
  return (
    <div className={topDivStyle}>
      <h1 className={iconStyle}>{icon}</h1>
      <h2 className={headingStyle}>{heading}</h2>
      <p className={paragraphStyle}>{paragraph}</p>
    </div>
  );
};

export default FeatureCard;
