import React from "react";
import Link from "next/link";

// Style Constants
const styles = {
  container: "mx-auto pt-10 px-6 flex flex-col justify-center items-center",
  title: "text-2xl lg:text-3xl font-bold text-center",
  boxContainer: "mt-10",
  buttonContainer: "flex justify-between px-6 lg:px-16 mt-6",
  backButton: "text-lg",
  button: "text-lg px-8 py-2 text-white bg-black rounded-md",
  box: "w-[400px] h-[100px] lg:w-[530px] lg:h-[100px] p-4 border-[1.7px] rounded-md hover:border-black cursor-pointer mb-4",
  boxTitle: "text-lg font-semibold",
  boxDesc: "text-gray-400",
};

const AboutYourPlace = () => {
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
          />
          <Box
            title="A Room"
            desc="Guests have their own room in a house, plus access to shared spaces."
          />
          <Box
            title="A shared room"
            desc="Guests sleep in a room or common area that may be shared with you or others."
          />
        </div>
      </div>

      {/* Buttons */}
      <div className={styles.buttonContainer}>
        <Link href="/structure">
          <button className={styles.backButton}>Back</button>
        </Link>
        <Link href="/location">
          <button className={styles.button}>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutYourPlace;

const Box = ({ title, desc }) => {
  return (
    <div className={styles.box}>
      <h1 className={styles.boxTitle}>{title}</h1>
      <h2 className={styles.boxDesc}>{desc}</h2>
    </div>
  );
};
