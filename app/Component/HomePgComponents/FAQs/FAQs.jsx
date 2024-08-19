// Using the native <details> and <summary> elements allows for server-side
// toggle functionality without needing client-side JavaScript.

import { faqs } from "@/app/Constants/FAQ";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Style constants
const containerStyles = "px-6 lg:px-20 p-4 lg:flex justify-between mt-10";
const headingStyles = "text-4xl lg:text-5xl font-bold lg:w-[60%] lg:-mt-4 mb-4";
const faqContainerStyles = "lg:w-[70%]";
const faqItemStyles = "border-b border-gray-300 py-4";
const faqSummaryStyles =
  "flex justify-between items-center cursor-pointer text-lg font-medium";
const faqAnswerStyles = "mt-4 text-gray-600";
const iconContainerStyles = "ml-2";

const FAQs = () => {
  return (
    <div className={containerStyles}>
      <h1 className={headingStyles}>Your questions, answered</h1>
      <div className={faqContainerStyles}>
        {faqs.map((faq, index) => (
          <details key={index} className={faqItemStyles}>
            <summary className={faqSummaryStyles}>
              {faq.question}
              <span className={iconContainerStyles}>
                <FaChevronDown className="icon-default icon-open" />
                <FaChevronUp className="icon-hidden icon-close" />
              </span>
            </summary>
            <p className={faqAnswerStyles}>{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
