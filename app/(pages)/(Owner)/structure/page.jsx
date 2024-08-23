import Link from "next/link";
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

// Style Constants
const styles = {
  container: "mx-auto pt-10 px-6 flex flex-col justify-center items-center",
  title: "text-2xl font-bold text-center",
  gridContainer: "mt-10 grid grid-cols-2 md:grid-cols-3 gap-3",
  buttonContainer: "flex justify-between px-6 lg:px-16 mt-6 mb-6",
  button: "text-lg px-8 py-2 text-white bg-black rounded-md",
  backButton: "text-lg",
  box: "w-[150px] h-[75px] sm:w-[200px] sm:h-[100px] border-2 border-gray-400 flex justify-start items-center px-4 rounded-md hover:border-black",
};

const Structure = () => {
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
        <Link href="/privacy-type">
          <button className={styles.button}>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Structure;

// Box Component
const Box = ({ title }) => {
  return (
    <div className={styles.box}>
      <h1>{title}</h1>
    </div>
  );
};
