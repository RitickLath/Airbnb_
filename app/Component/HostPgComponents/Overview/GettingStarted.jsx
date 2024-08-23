import Image from "next/image";
import Link from "next/link";

// Style Constants
const styles = {
  container: "px-6 lg:px-16 lg:flex",
  textContainer:
    "lg:w-1/2 lg:flex items-center mt-16 text-3xl lg:text-5xl font-bold",
  rightSection: "mt-12",
  itemContainer: "flex mb-8 md:mb-0",
  itemTextContainer: "text-xl sm:text-2xl font-semibold mb-2",
  itemSubText: "text-2xl font-medium mb-2",
  buttonContainer: "w-full h-full border-2",
  button:
    "relative w-full lg:w-[200px] bg-[#F62E58] text-white rounded-md py-2 mb-2 font-semibold text-lg",
};

const GettingStarted = () => {
  return (
    <div className={styles.container}>
      {/* Left/Top Section */}
      <div className={styles.textContainer}>
        <h1>It’s easy to get started on Airbnb</h1>
      </div>

      {/* Right/Bottom Section */}
      <div className={styles.rightSection}>
        {/* Item-1 */}
        <div className={styles.itemContainer}>
          <div>
            <h1 className={styles.itemTextContainer}>
              Tell us about your place
            </h1>
            <h1>
              Share some basic info, such as where it is and how many guests can
              stay.
            </h1>
          </div>
          <div>
            <Image src="/Image/bed.webp" alt="bed" width={200} height={200} />
          </div>
        </div>

        {/* Item-2 */}
        <div className={styles.itemContainer}>
          <div>
            <h1 className={styles.itemSubText}>Make it stand out</h1>
            <h1>
              Add 5 or more photos plus a title and description – we’ll help you
              out.
            </h1>
          </div>
          <div>
            <Image src="/Image/rest.webp" alt="rest" width={200} height={200} />
          </div>
        </div>

        {/* Item-3 */}
        <div className={styles.itemContainer}>
          <div>
            <h1 className={styles.itemSubText}>Finish up and publish</h1>
            <h1>
              Choose a starting price, verify a few details, then publish your
              listing.
            </h1>
          </div>
          <div>
            <Image
              src="/Image/publish.webp"
              alt="publish"
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* Link */}
        <Link className={styles.buttonContainer} href="/about-your-place">
          <button className={styles.button}>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default GettingStarted;
