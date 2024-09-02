"use client";

import { structureAtom } from "@/app/Store/inputStates";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";

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

// Style Constants
const styles = {
  container: "mx-auto pt-10 px-6 flex flex-col justify-center items-center",
  title: "text-2xl font-bold text-center",
  gridContainer: "mt-10 grid grid-cols-2 md:grid-cols-3 gap-3",
  buttonContainer: "flex justify-between px-6 lg:px-16 mt-6 mb-6",
  button: "text-lg px-8 py-2 text-white bg-black rounded-md",
  buttonDisabled:
    "text-lg px-8 py-2 text-white bg-gray-400 rounded-md cursor-not-allowed",
  backButton: "text-lg",
  box: "w-[150px] h-[75px] sm:w-[200px] sm:h-[100px] border-2 flex justify-start items-center px-4 rounded-md cursor-pointer",
  boxDefault: "border-gray-400 hover:border-black",
  boxSelected: "border-black",
};

const Structure = () => {
  const [structure] = useRecoilState(structureAtom);

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Which of these best describes your place?
        </h1>

        {/* Grid of place types */}
        <div className={styles.gridContainer}>
          {places.map((title, i) => (
            <Box key={i} title={title} />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className={styles.buttonContainer}>
        <Link href="/about-your-place">
          <button className={styles.backButton}>Back</button>
        </Link>
        <Link href={structure ? "/privacy-type" : "#"}>
          <button
            className={structure ? styles.button : styles.buttonDisabled}
            disabled={!structure}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Structure;

// Box Component
const Box = ({ title }) => {
  const [structure, setStructure] = useRecoilState(structureAtom);

  return (
    <div
      onClick={() => setStructure(title)}
      className={`${styles.box} ${
        structure === title ? styles.boxSelected : styles.boxDefault
      }`}
    >
      <h1>{title}</h1>
    </div>
  );
};
