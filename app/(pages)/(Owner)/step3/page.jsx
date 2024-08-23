import Step from "@/app/Component/StepPage/Step";
import React from "react";

const Step3 = () => {
  return (
    <Step
      step="step-3"
      title="Finish up and publish"
      desc="Finally, you'll choose booking settings, set up price and publish your listing."
      img="/Image/step3.jpeg"
      back="/add-title"
      next="/pricing"
    />
  );
};

export default Step3;
