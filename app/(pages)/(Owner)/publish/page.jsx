import Link from "next/link";
import React from "react";

const Publish = () => {
  return (
    <div className="px-6 pt-10 flex flex-col items-center">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold mb-3">
          Congratulations!!!
        </h1>
        <h3 className="text-xl text-gray-600 max-w-[550px] mb-6">
          From one Host to another – welcome aboard. Thank you for sharing your
          home and helping to create incredible experiences for our guests.
        </h3>
      </div>

      <Link className="w-[150px] rounded-md bg-red-600" href="/">
        <button className="px-3 py-2 text-center font-semibold w-full text-white">
          Lets get started
        </button>
      </Link>
    </div>
  );
};

export default Publish;
