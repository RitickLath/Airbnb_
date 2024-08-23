"use client";

import React, { useState } from "react";
import Link from "next/link";
import { tags } from "@/app/Constants/tags";
import { facilities } from "@/app/Constants/facilities";

// Style Constants
const styles = {
  container: "px-6 pt-10 flex flex-col items-center",
  heading: "font-bold text-2xl lg:text-3xl",
  subheading: "mt-2 text-gray-600",
  sectionTitle: "mt-6 text-lg font-semibold",
  grid: "mt-1 grid grid-cols-2 md:grid-cols-3 gap-3",
  box: "w-[150px] h-[70px] sm:w-[200px] sm:h-[100px] border-2 flex justify-start items-center px-4 rounded-md cursor-pointer transition-colors duration-300",
  boxSelected: "border-black bg-gray-100",
  buttonContainer: "flex justify-between px-6 lg:px-16 mt-6 mb-6 w-full",
  backButton: "text-lg text-gray-700 hover:underline",
  nextButton:
    "text-lg px-8 py-2 text-white bg-black rounded-md hover:bg-gray-800 transition-colors duration-200",
};

const Amenities = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedFacilities, setSelectedFacilities] = useState([]);

  const toggleSelection = (item, type) => {
    const setSelection =
      type === "tag" ? setSelectedTags : setSelectedFacilities;
    const currentSelection = type === "tag" ? selectedTags : selectedFacilities;

    if (currentSelection.includes(item)) {
      setSelection(currentSelection.filter((i) => i !== item));
    } else {
      setSelection([...currentSelection, item]);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div>
          <h1 className={styles.heading}>
            Tell guests what your place has to offer
          </h1>
          <h3 className={styles.subheading}>
            You can add more amenities after you publish your listing.
          </h3>

          <div>
            <h1 className={styles.sectionTitle}>
              What about these guest favourites?
            </h1>
            <div className={styles.grid}>
              {facilities.map((facility, i) => (
                <Box
                  key={i}
                  title={facility}
                  isSelected={selectedFacilities.includes(facility)}
                  onClick={() => toggleSelection(facility, "facility")}
                />
              ))}
            </div>
          </div>

          <div>
            <h1 className={styles.sectionTitle}>
              Do you have any standout amenities?
            </h1>
            <div className={styles.grid}>
              {tags.map((tag, i) => (
                // isSelected for style of border
                <Box
                  key={i}
                  title={tag}
                  isSelected={selectedTags.includes(tag)}
                  onClick={() => toggleSelection(tag, "tag")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Link href="/step2">
          <button className={styles.backButton}>Back</button>
        </Link>
        <Link href="/add-images">
          <button className={styles.nextButton}>Next</button>
        </Link>
      </div>
    </div>
  );
};

const Box = ({ title, isSelected, onClick }) => {
  const boxStyle = isSelected
    ? `${styles.box} ${styles.boxSelected}`
    : styles.box;

  return (
    <div className={boxStyle} onClick={onClick}>
      <h1>{title}</h1>
    </div>
  );
};

export default Amenities;
