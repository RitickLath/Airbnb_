import Image from "next/image";
import React from "react";

const Step1 = () => {
  return (
    <div>
      {/* Container for content and image */}
      <div className="px-6 pt-10 md:h-[80vh] lg:px-32 flex flex-col md:flex-row md:space-x-4 md:items-center">
        {/* Text Content */}
        <div className="max-w-[500px] w-full mb-8 md:mb-0">
          <h4 className="text-lg font-semibold mb-3">Step-1</h4>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Tell us about your place
          </h1>
          <h3 className="text-lg">
            In this step, we'll ask you which type of property you have and if
            guests will book the entire place or just a room. Then let us know
            the location and how many guests can stay.
          </h3>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/Image/step1.jpeg"
            width={300}
            height={300}
            className="w-[80%] min-w-[420px] max-w-[700px]"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between px-6 lg:px-16 mt-4 mb-6">
        <button className="text-lg">Back</button>
        <button className="text-lg px-8 py-2 text-white bg-black rounded-md">
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1;
