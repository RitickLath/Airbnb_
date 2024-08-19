import DisplayIcons from "@/app/Component/PropertyPgComponents/DisplayIcons/DisplayIcons";
import Searchbar from "@/app/Component/PropertyPgComponents/Searchbar/Searchbar";
import React from "react";

const Property = () => {
  return (
    <div className="px-6 lg:px-16">
      <Searchbar />
      <DisplayIcons />
    </div>
  );
};

export default Property;
