"use client";

import React, { useState } from "react";
import Link from "next/link";

// Style constants
const styles = {
  container:
    "h-min-screen mx-auto pt-10 px-6 lg:px-12 flex flex-col justify-center items-center",
  heading: "text-2xl lg:text-3xl font-bold text-center",
  subheading: "text-gray-600 mt-3 lg:font-semibold text-center",
  formContainer: "mt-8 w-full max-w-lg",
  form: "flex flex-col space-y-6",
  label: "text-sm font-semibold text-gray-700",
  input:
    "border-b-2 w-full outline-none placeholder-gray-500 py-2 focus:border-black transition-colors duration-200",
  buttonContainer: "flex justify-between px-6 lg:px-16 mt-8 mb-6 w-full",
  backButton: "text-lg text-gray-700 hover:underline",
  nextButton:
    "text-lg px-8 py-2 text-white bg-black rounded-md hover:bg-gray-800 transition-colors duration-200",
};

const Location = () => {
  // State variables for each form input
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  return (
    <div>
      <div className={styles.container}>
        <div>
          <h1 className={styles.heading}>Where's your place located?</h1>
          <h3 className={styles.subheading}>
            Your address is only shared with guests after they've made a
            reservation.
          </h3>

          <div className={styles.formContainer}>
            <form className={styles.form} action="">
              <div>
                <label className={styles.label}>Address</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Enter your Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className={styles.label}>City</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Enter your City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className={styles.label}>State</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Enter your State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className={styles.label}>Country</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Enter your Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className={styles.label}>Postal Code</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Enter your Postal Code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className={styles.label}>Longitude</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Enter your Longitude"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className={styles.label}>Latitude</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Enter your Latitude"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Link href="/privacy-type">
          <button className={styles.backButton}>Back</button>
        </Link>
        <Link href="/step2">
          <button className={styles.nextButton}>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Location;
