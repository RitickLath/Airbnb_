"use client";

import Link from "next/link";
import React, { useState } from "react";

const AddTitle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Determine if both fields are filled
  const isFormComplete = true; // title.trim() !== "" && description.trim() !== "";

  return (
    <div>
      <div className="px-6 pt-10 flex flex-col items-center">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-center">
            Now, let's give your flat/apartment a title and description
          </h1>
          <h3 className="mt-2 text-gray-600 text-center">
            Short title and 20-30 words description work best. Have fun with it
            - you can always change it later.
          </h3>

          <div className="mt-6 flex flex-col space-y-6">
            <textarea
              placeholder="Give Title to your Apartment/Flat"
              className="w-full px-4 py-2 h-[100px] border-2 rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Give Description to your Apartment/Flat"
              className="w-full px-4 py-2 h-[200px] border-2 rounded-md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        {/* btn */}
        <div className="flex justify-between px-6 lg:px-16 mt-6 mb-6 w-full">
          <Link href="/add-images">
            <button className="text-lg text-gray-700 hover:underline">
              Back
            </button>
          </Link>
          {/* Conditionally render the link based on form completion */}
          {isFormComplete ? (
            <Link href="/step3">
              <button className="text-lg px-8 py-2 text-white bg-black rounded-md hover:bg-gray-800 transition-colors duration-200">
                Next
              </button>
            </Link>
          ) : (
            <button
              className="text-lg px-8 py-2 text-white bg-gray-400 rounded-md cursor-not-allowed"
              disabled
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddTitle;
