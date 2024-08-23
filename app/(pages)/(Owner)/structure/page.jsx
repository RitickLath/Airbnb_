import React from "react";

const places = [
  "House",
  "Flat/Apartment",
  "Barn",
  "Bed & breakfast",
  "Boat",
  "Cabin",
  "Campervan",
  "Cave",
  "Castle",
  "Farm",
  "Hotel",
  "Guest House",
  "Houseboat",
  "Riad",
  "Tent",
  "Tower",
  "Yurt",
  "Windmill",
];

const Structure = () => {
  return (
    <div className="mx-auto pt-10 px-6 flex flex-col justify-center items-center">
      <h1 className="text-2xl text-center">
        Which of these best describes your place?
      </h1>

      {/*  */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3">
        {places.map((title, i) => (
          <Box key={i} title={title} />
        ))}
      </div>
    </div>
  );
};

export default Structure;

const Box = ({ title }) => {
  return (
    <div className="w-[150px] h-[75px] sm:w-[200px] sm:h-[100px] border-2 border-gray-400 flex justify-start items-center px-4 rounded-md hover:border-black">
      <h1>{title}</h1>
    </div>
  );
};
