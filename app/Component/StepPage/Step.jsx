import Image from "next/image";
import Link from "next/link";
import React from "react";

// Style Constants
const styles = {
  container:
    "px-6 pt-10 md:h-[80vh] lg:px-32 flex flex-col md:flex-row md:space-x-4 md:items-center",
  textContainer: "max-w-[500px] w-full mb-8 md:mb-0",
  stepTitle: "text-lg font-semibold mb-3",
  mainTitle: "text-2xl md:text-3xl font-bold mb-3",
  description: "text-xl",
  imageContainer2: " hidden md:flex justify-center md:justify-start",
  imageContainer1: "flex justify-center md:hidden",
  image: "w-[80%] min-w-[420px] max-w-[700px]",
  buttonContainer: "flex justify-between px-6 lg:px-16 mt-4 mb-6",
  button: "text-lg px-8 py-2 text-white bg-black rounded-md",
  backButton: "text-lg",
};

const Step = ({ step, title, desc, img, back, next }) => {
  return (
    <div>
      {/* Container for content and image */}
      <div className={styles.container}>
        <div className={styles.imageContainer1}>
          <Image
            src="/Image/step3.jpeg"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>

        {/* Text Content */}
        <div className={styles.textContainer}>
          <h4 className={styles.stepTitle}>{step}</h4>
          <h1 className={styles.mainTitle}>{title}</h1>
          <h3 className={styles.description}>{desc}</h3>
        </div>

        {/* Image */}
        <div className={styles.imageContainer2}>
          <Image src={img} width={300} height={300} className={styles.image} />
        </div>
      </div>

      {/* Buttons */}
      <div className={styles.buttonContainer}>
        <Link href={back}>
          <button className={styles.backButton}>Back</button>
        </Link>
        <Link href={next}>
          <button className={styles.button}>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Step;
