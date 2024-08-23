"use client";

import Link from "next/link";
import React, { useState } from "react";

const Pricing = () => {
  // States
  const [guestPrice, setGuestPrice] = useState("");
  const [cleaningFee, setCleaningFee] = useState("");
  const [serviceFee, setServiceFee] = useState("");

  // Determine if all fields are filled
  const isFormComplete = true;

  // guestPrice.trim() !== "" &&
  // cleaningFee.trim() !== "" &&
  // serviceFee.trim() !== "";

  // Style constants
  const styles = {
    container: "px-6 pt-10 flex flex-col items-center",
    title: "text-2xl lg:text-3xl font-bold text-center",
    subtitle: "mt-2 text-gray-600 text-center",
    inputContainer: "mt-8",
    label: "text-sm font-semibold text-gray-700",
    input:
      "border-b-2 w-full outline-none placeholder-gray-500 py-2 focus:border-black transition-colors duration-200",
    buttonContainer: "flex justify-between px-6 lg:px-16 mt-6 mb-6 w-full",
    backButton: "text-lg text-gray-700 hover:underline",
    nextButtonEnabled:
      "text-lg px-8 py-2 text-white bg-black rounded-md hover:bg-gray-800 transition-colors duration-200",
    nextButtonDisabled:
      "text-lg px-8 py-2 text-white bg-gray-400 rounded-md cursor-not-allowed",
  };

  return (
    <div>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Now, set your price</h1>
          <h3 className={styles.subtitle}>You can change it anytime.</h3>

          <div className={styles.inputContainer}>
            <label className={styles.label}>
              Guest Price before taxes (Price per night)
            </label>
            <input
              type="text"
              className={styles.input}
              placeholder="Price before taxes"
              value={guestPrice}
              onChange={(e) => setGuestPrice(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>Cleaning Fee</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Cleaning Fee"
              value={cleaningFee}
              onChange={(e) => setCleaningFee(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>Service Fee</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Service Fee"
              value={serviceFee}
              onChange={(e) => setServiceFee(e.target.value)}
              required
            />
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <Link href="/step3">
            <button className={styles.backButton}>Back</button>
          </Link>
          {/* Conditionally render the link based on form completion */}
          {isFormComplete ? (
            <Link href="/publish">
              <button className={styles.nextButtonEnabled}>Publish</button>
            </Link>
          ) : (
            <button className={styles.nextButtonDisabled} disabled>
              Publish
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
