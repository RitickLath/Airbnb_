"use client";

import Link from "next/link";
import React from "react";

const AddImages = () => {
  return (
    <div>
      <div className="px-6 pt-10 flex flex-col items-center">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">
            Add some photos of your flat/apartment
          </h1>
          <h3 className="mt-2 text-gray-600">
            You'll need atleast 1 photo to get started. You can add more or make
            changes later
          </h3>

          <div className="w-full bg-[#F7F7F7] flex items-center justify-center mt-8  min-w-[150px] h-[100px] md:min-w-[300px] md:h-[300px] border-dashed border-2 border-gray-600">
            <input
              type="file"
              className="cursor-pointer opacity-1 px-4"
              onChange={(e) => {
                // Handle file selection
                console.log(e.target.files[0]);
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between px-6 lg:px-16 mt-6 mb-6 w-full">
        <Link href="/amenities">
          <button className="text-lg text-gray-700 hover:underline">
            Back
          </button>
        </Link>
        <Link href="/add-title">
          <button className="text-lg px-8 py-2 text-white bg-black rounded-md hover:bg-gray-800 transition-colors duration-200">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddImages;
