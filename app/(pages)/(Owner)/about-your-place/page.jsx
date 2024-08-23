import Step from "@/app/Component/StepPage/Step";
import React from "react";

const Step1 = () => {
  return (
    <Step
      step="step-1"
      title="Tell us about your place"
      desc="In this step, we'll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay."
      img="/Image/step1.jpeg"
      back="/overview"
      next="/structure"
    />
  );
};

export default Step1;
