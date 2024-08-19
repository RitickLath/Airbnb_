import React from "react";
import DisplayCard from "./DisplayCard";

const Display = () => {
  return (
    <div className="px-12 lg:px-20">
      <h1 className="font-semibold text-2xl lg:text-3xl mb-4">
        Big, small, we have it all
      </h1>
      <div className="lg:flex justify-between w-[80%] lg:w-full">
        <DisplayCard
          image="/Image/house.jpg"
          title="Houses >"
          paragraph="If you need extra space, get an entire place all to yourself"
        />

        <DisplayCard
          image="/Image/flat.jpg"
          title="Flats >"
          paragraph="If you need extra space, get an entire place all to yourself"
        />

        <DisplayCard
          image="/Image/room.jpg"
          title="Rooms >"
          paragraph="If you need extra space, get an entire place all to yourself"
        />
      </div>
    </div>
  );
};

export default Display;
