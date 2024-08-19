"use client";

import React, { useState } from "react";

// Style constants
const inputBaseStyles = "outline-none mt-1 rounded-md bg-transparent";
const containerStyles =
  "w-full lg:w-[450px] mt-4 lg:mt-0 border-[1px] p-4 rounded-lg shadow-lg bg-white z-100";
const headerTextStyles = "font-bold text-xl md:text-2xl lg:text-3xl";
const subheaderTextStyles = "pr-6 my-2";
const sectionStyles = "py-2 border-[1px] px-4 rounded-md mb-2";
const labelTextStyles = "font-semibold text-sm";
const buttonStyles =
  "w-full text-center mt-4 py-2 bg-[#E51861] rounded-md text-white font-semibold text-lg";

const Input = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  return (
    <div className={containerStyles}>
      <h1 className={headerTextStyles}>Find places to stay on Airbnb</h1>
      <h3 className={subheaderTextStyles}>
        Discover entire homes and rooms perfect for any trip
      </h3>

      <div className={sectionStyles}>
        <h1 className={labelTextStyles}>LOCATION</h1>
        <input type="text" placeholder="Anywhere" />
      </div>

      <div className={sectionStyles}>
        <h1 className={labelTextStyles}>Check-in</h1>
        <input
          type="date"
          className={inputBaseStyles}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

      <div className={sectionStyles}>
        <h1 className={labelTextStyles}>Check-out</h1>
        <input
          type="date"
          className={inputBaseStyles}
          selected={endDate}
          placeholder="Add Date"
          onChange={(date) => setEndDate(date)}
        />
      </div>

      <div className={buttonStyles}>
        <button>Search</button>
      </div>
    </div>
  );
};

export default Input;
