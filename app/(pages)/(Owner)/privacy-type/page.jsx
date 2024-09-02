"use client";

import React from "react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { privacyTypeAtom } from "@/app/Store/inputStates";

// Style Constants
const styles = {
  container:
    "h-min-screen mx-auto pt-10 px-6 flex flex-col justify-center items-center",
  title: "text-2xl lg:text-3xl font-bold text-center",
  boxContainer: "mt-10",
  buttonContainer: "flex justify-between px-6 lg:px-16 mt-6",
  backButton: "text-lg",
  button: "text-lg px-8 py-2 text-white bg-black rounded-md",
  buttonDisabled:
    "text-lg px-8 py-2 text-white bg-gray-400 rounded-md cursor-not-allowed",
  box: "w-[350px] lg:w-[530px] lg:h-[100px] p-4 border-[1.7px] rounded-md cursor-pointer mb-4",
  boxDefault: "border-gray-400 hover:border-black",
  boxSelected: "border-black",
  boxTitle: "text-lg font-semibold",
  boxDesc: "text-gray-400",
};

const AboutYourPlace = () => {
  const [privacyType, setPrivacyType] = useRecoilState(privacyTypeAtom);

  return (
    <div>
      {/* Main Container */}
      <div className={styles.container}>
        <h1 className={styles.title}>What type of place will guests have?</h1>

        {/* Box Container */}
        <div className={styles.boxContainer}>
          <Box
            title="An Entire Place"
            desc="Guests have the whole place to themselves"
            selected={privacyType === "An Entire Place"}
            onClick={() => setPrivacyType("An Entire Place")}
          />
          <Box
            title="A Room"
            desc="Guests have their own room in a house, plus access to shared spaces."
            selected={privacyType === "A Room"}
            onClick={() => setPrivacyType("A Room")}
          />
          <Box
            title="A shared room"
            desc="Guests sleep in a room or common area that may be shared with you or others."
            selected={privacyType === "A shared room"}
            onClick={() => setPrivacyType("A shared room")}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className={styles.buttonContainer}>
        <Link href="/structure">
          <button className={styles.backButton}>Back</button>
        </Link>
        <Link href={privacyType ? "/location" : "#"}>
          <button
            className={privacyType ? styles.button : styles.buttonDisabled}
            disabled={!privacyType}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutYourPlace;

const Box = ({ title, desc, selected, onClick }) => {
  return (
    <div
      className={`${styles.box} ${
        selected ? styles.boxSelected : styles.boxDefault
      }`}
      onClick={onClick}
    >
      <h1 className={styles.boxTitle}>{title}</h1>
      <h2 className={styles.boxDesc}>{desc}</h2>
    </div>
  );
};
