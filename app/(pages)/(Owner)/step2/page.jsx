import Step from "@/app/Component/StepPage/Step";
import React from "react";

const Step2 = () => {
  return (
    <Step
      step="step-2"
      title="Make your place stand out"
      desc="In this step, you’ll add some of the amenities your place offers, plus 5 or more photos. Then you’ll create a title and description."
      img="/Image/step1.jpeg"
      back="/location"
      next="/amenities"
    />
  );
};

export default Step2;
