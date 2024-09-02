// AtomWrapper.js
"use client"; // Mark this as a client component
import React from "react";
import { RecoilRoot } from "recoil";

const AtomWrapper = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default AtomWrapper;
