import React, { useState } from 'react';

// You can create a new file like `CarResearchForm.tsx` and paste this code.
const CarResearchForm = () => {
  // Dummy data for the dropdowns. You can replace this with your actual data.
  const makes = ['Sabaru', 'Toyota', 'Honda', 'Ford', 'BMW'];
  const modelsByMake: { [key: string]: string[] } = {
    Sabaru: ['Forester Hybrid', 'Crosstrek', 'Outback', 'Impreza'],
    Toyota: ['RAV4 Hybrid', 'Camry', 'Corolla', 'Highlander'],
    Honda: ['CR-V Hybrid', 'Civic', 'Accord', 'Pilot'],
    Ford: ['Escape Hybrid', 'Mustang', 'F-150', 'Explorer'],
    BMW: ['X5', '3 Series', '5 Series', 'X3'],
  };
  const years = ['All years', '2024', '2023', '2022', '2021', '2020'];

  // State to manage the selected values
  const [selectedMake, setSelectedMake] = useState('Sabaru');
  const [selectedModel, setSelectedModel] = useState('Forester Hybrid');
  const [selectedYear, setSelectedYear] = useState('All years');

  // A helper SVG component for the dropdown arrow
  const ChevronDownIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="h-5 w-5 text-gray-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );

  return (
    // Main container for the form
    // Handles the overall layout, border, and responsive behavior
    <div
      className="flex w-full flex-col overflow-hidden rounded-lg border border-gray-300 bg-white
                 md:flex-row"
    >
      {/* --- Make Dropdown --- */}
      <div className="relative flex-1 p-4">
        <label
          htmlFor="make"
          className="block text-xs font-medium text-gray-500"
        >
          Make
        </label>
        <select
          id="make"
          name="make"
          value={selectedMake}
          onChange={(e) => {
            setSelectedMake(e.target.value);
            // Reset model when make changes
            setSelectedModel(modelsByMake[e.target.value][0]);
          }}
          className="mt-1 block w-full cursor-pointer appearance-none border-0 bg-transparent p-0 text-base font-medium text-gray-900 focus:outline-none focus:ring-0"
        >
          {makes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
          <ChevronDownIcon />
        </div>
      </div>

      {/* --- Model Dropdown --- */}
      <div className="relative flex-1 border-t border-gray-300 p-4 md:border-l md:border-t-0">
        <label
          htmlFor="model"
          className="block text-xs font-medium text-gray-500"
        >
          Model
        </label>
        <select
          id="model"
          name="model"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="mt-1 block w-full cursor-pointer appearance-none border-0 bg-transparent p-0 text-base font-medium text-gray-900 focus:outline-none focus:ring-0"
        >
          {modelsByMake[selectedMake].map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
          <ChevronDownIcon />
        </div>
      </div>

      {/* --- Year Dropdown --- */}
      <div className="relative flex-1 border-t border-gray-300 p-4 md:border-l md:border-t-0">
        <label
          htmlFor="year"
          className="block text-xs font-medium text-gray-500"
        >
          Year
        </label>
        <select
          id="year"
          name="year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="mt-1 block w-full cursor-pointer appearance-none border-0 bg-transparent p-0 text-base font-medium text-gray-900 focus:outline-none focus:ring-0"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
          <ChevronDownIcon />
        </div>
      </div>

      {/* --- Research Button --- */}
      <button
        type="submit"
        // The background color #93a478 is taken from the image
        className="bg-[#93a478] cursor-pointer p-4 text-center font-bold text-black transition-colors hover:bg-opacity-90 md:px-10"
      >
        Search
      </button>
    </div>
  );
};

export default CarResearchForm;