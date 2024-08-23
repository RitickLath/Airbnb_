"use client";

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

          <div className="w-full bg-[#F7F7F7] flex items-center justify-center mt-8 min-w-[300px] h-[300px] border-dashed border-2 border-gray-600">
            <input
              type="file"
              className="cursor-pointer opacity-1"
              onChange={(e) => {
                // Handle file selection
                console.log(e.target.files[0]);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddImages;
