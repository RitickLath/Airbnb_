"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

// Naming constants
const containerStyles =
  "hidden mx-auto lg:grid grid-cols-4 w-[80%] border-2 rounded-full mt-4 shadow-md";
const inputStyles = "outline-none mt-1 rounded-md bg-transparent";
const leftSectionStyles =
  "px-6 py-3 col-span-1 hover:bg-[#DCDCDC] rounded-full";
const rightSectionStyles =
  "px-8 hover:my-0 hover:py-3 col-span-1 hover:bg-[#DCDCDC] hover:rounded-full my-3 border-l-2";

const Searchbar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  return (
    <div className={containerStyles}>
      {/* Location Input */}
      <div className={leftSectionStyles}>
        <h1 className="font-semibold">Where</h1>
        <input
          className={inputStyles}
          type="text"
          placeholder="Search Destinations"
        />
      </div>

      {/* Check-in Date */}
      <div className={rightSectionStyles}>
        <h1 className="font-semibold">Check-in</h1>
        <input
          type="date"
          className={inputStyles}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

      {/* Check-out Date */}
      <div className={rightSectionStyles}>
        <h1 className="font-semibold">Check-out</h1>
        <input
          type="date"
          className={inputStyles}
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          placeholderText="Add dates"
        />
      </div>

      {/* Guest Input */}
      <div className={`${rightSectionStyles}`}>
        <div className="flex items-center space-x-2">
          <div>
            <h1 className="font-semibold">Add Guest</h1>
            <input
              className={inputStyles}
              type="text"
              placeholder="Add guests"
            />
          </div>
          {/* Search Icon */}
          <FaSearch className="text-red-600 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
