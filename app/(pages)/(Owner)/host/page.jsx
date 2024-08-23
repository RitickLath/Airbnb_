"use client";

import React, { useState } from "react";

// Reusable Form Input Component
const FormInput = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}) => (
  <div className="flex flex-col space-y-3">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input
      className="bg-white border border-gray-300 rounded-lg py-3 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-150 ease-in-out"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

// Section Heading Component
const SectionHeading = ({ title }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
    <div className="border-b-4 border-blue-600 w-16 mt-1"></div>
  </div>
);

// Property Details Component
const PropertyDetails = ({ details, setDetails }) => (
  <div className="space-y-8">
    <SectionHeading title="Property Details" />
    <FormInput
      label="Title"
      placeholder="Enter the title of the property"
      value={details.title}
      onChange={(e) =>
        setDetails((prev) => ({ ...prev, title: e.target.value }))
      }
      required
    />
    <FormInput
      label="Description"
      placeholder="Enter a brief description of the property"
      value={details.description}
      onChange={(e) =>
        setDetails((prev) => ({ ...prev, description: e.target.value }))
      }
      required
    />
    <FormInput
      label="About Property"
      placeholder="Provide more details about the property"
      value={details.about}
      onChange={(e) =>
        setDetails((prev) => ({ ...prev, about: e.target.value }))
      }
      required
    />
    <FormInput
      label="Property Type"
      placeholder="Specify the type of property"
      value={details.type}
      onChange={(e) =>
        setDetails((prev) => ({ ...prev, type: e.target.value }))
      }
      required
    />
  </div>
);

// Location Component
const Location = ({ location, setLocation }) => (
  <div className="space-y-8">
    <SectionHeading title="Location" />
    <FormInput
      label="Address"
      placeholder="Enter the address"
      value={location.address}
      onChange={(e) =>
        setLocation((prev) => ({ ...prev, address: e.target.value }))
      }
      required
    />
    <FormInput
      label="City"
      placeholder="Enter the city"
      value={location.city}
      onChange={(e) =>
        setLocation((prev) => ({ ...prev, city: e.target.value }))
      }
      required
    />
    <FormInput
      label="State"
      placeholder="Enter the state"
      value={location.state}
      onChange={(e) =>
        setLocation((prev) => ({ ...prev, state: e.target.value }))
      }
      required
    />
    <FormInput
      label="Country"
      placeholder="Enter the country"
      value={location.country}
      onChange={(e) =>
        setLocation((prev) => ({ ...prev, country: e.target.value }))
      }
      required
    />
    <FormInput
      label="Postal Code"
      placeholder="Enter the postal code"
      value={location.postalCode}
      onChange={(e) =>
        setLocation((prev) => ({ ...prev, postalCode: e.target.value }))
      }
      required
    />
    <FormInput
      label="Latitude"
      placeholder="Enter latitude"
      value={location.latitude}
      onChange={(e) =>
        setLocation((prev) => ({ ...prev, latitude: e.target.value }))
      }
      required
    />
    <FormInput
      label="Longitude"
      placeholder="Enter longitude"
      value={location.longitude}
      onChange={(e) =>
        setLocation((prev) => ({ ...prev, longitude: e.target.value }))
      }
      required
    />
  </div>
);

// Guests Component
const Guests = ({ guest, setGuest }) => (
  <div className="space-y-8">
    <SectionHeading title="Guests" />
    <FormInput
      label="Number of Guests"
      type="number"
      placeholder="Enter the number of guests"
      value={guest}
      onChange={(e) => setGuest(parseInt(e.target.value, 10))}
      required
    />
  </div>
);

// Pricing Component
const Pricing = ({ pricing, setPricing }) => (
  <div className="space-y-8">
    <SectionHeading title="Pricing" />
    <FormInput
      label="Price"
      type="number"
      placeholder="Enter the price"
      value={pricing.price}
      onChange={(e) =>
        setPricing((prev) => ({ ...prev, price: e.target.value }))
      }
      required
    />
    <FormInput
      label="Cleaning Fee"
      type="number"
      placeholder="Enter cleaning fee"
      value={pricing.cleaningFee}
      onChange={(e) =>
        setPricing((prev) => ({ ...prev, cleaningFee: e.target.value }))
      }
      required
    />
    <FormInput
      label="Service Fee"
      type="number"
      placeholder="Enter service fee"
      value={pricing.serviceFee}
      onChange={(e) =>
        setPricing((prev) => ({ ...prev, serviceFee: e.target.value }))
      }
      required
    />
  </div>
);

// Main Host Component
const Host = () => {
  const [details, setDetails] = useState({
    title: "",
    description: "",
    about: "",
    type: "",
  });

  const [location, setLocation] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    latitude: "",
    longitude: "",
  });

  const [guest, setGuest] = useState(0);
  const [pricing, setPricing] = useState({
    price: "",
    cleaningFee: "",
    serviceFee: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted successfully!");
  };

  return (
    <div className="mt-12 max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-12 border border-gray-200">
      <form className="mb-12 flex flex-col space-y-10" onSubmit={handleSubmit}>
        <PropertyDetails details={details} setDetails={setDetails} />
        <Location location={location} setLocation={setLocation} />
        <Guests guest={guest} setGuest={setGuest} />
        <Pricing pricing={pricing} setPricing={setPricing} />
        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Host;
