import React from 'react';

// --- Reusable InputField Component ---
interface InputFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'number' | 'tel';
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, placeholder, type = 'text', required = false }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder || label}
      required={required}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

// --- NEW: Reusable SelectField (Dropdown) Component ---
interface SelectFieldProps {
  id: string;
  label: string;
  options: { value: string; label:string }[];
  required?: boolean;
  placeholder?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({ id, label, options, required = false, placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <select
      id={id}
      name={id}
      required={required}
      defaultValue="" // Important for placeholder to work with 'required'
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {placeholder && <option value="" disabled>{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);


// --- Reusable RadioGroup Component ---
interface RadioGroupProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({ label, name, options }) => (
  <div className="md:col-span-2 flex flex-col md:flex-row md:items-center">
    <label className="text-base font-semibold text-gray-700 md:w-1/3">{label}</label>
    <div className="flex flex-col md:flex-row md:flex-wrap md:w-2/3 mt-2 md:mt-0">
      {options.map((option) => (
        <div key={option.value} className="flex items-center mr-4 mb-2 md:mb-0">
          <input
            id={`${name}-${option.value}`}
            type="radio"
            value={option.value}
            name={name}
            className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor={`${name}-${option.value}`} className="ml-2 text-gray-600">
            {option.label}
          </label>
        </div>
      ))}
    </div>
  </div>
);


// --- Main Form Component ---
const VehicleValuationForm = () => {
  // Define options for the city dropdown
  const cityOptions = [
    { value: 'Kathmandu', label: 'Kathmandu' },
    { value: 'Pokhara', label: 'Pokhara' },
    { value: 'Lalitpur', label: 'Lalitpur (Patan)' },
    { value: 'Biratnagar', label: 'Biratnagar' },
    { value: 'Bhaktapur', label: 'Bhaktapur' },
  ];

  const carTypesOptions=[
    { value: 'sedan', label: 'Sedan' },
    { value: 'suv', label: 'SUV' },
    { value: 'hatch', label: 'Hatch' },
    { value: 'coupe', label: 'Coupe' },
    { value: 'wagon', label: 'Wagon' },
    { value: 'van', label: 'Van' },
    { value: 'peoplemover', label: 'People Mover' },
  ];

  const priceRangeOptions = [
   {value:'above 30 lakhs', label:'Above 30 lakhs'},
   {value:'above 50 lakhs', label:'Above 50 lakhs'},
   {value:'above 75 lakhs', label:'Above 75 lakhs'},
    {value:'above 1 crore', label:'Above 1 crore'},
  ];

  const carColorOptions = [
  "White",
  "Black",
  "Silver",
  "Grey",
  "Red",
  "Blue",
  "Maroon",
  "Brown",
  "Green",
  "Yellow",
  "Orange",
  "Gold",
  "Beige",
  "Sky Blue",
  "Pearl White",
  "Metallic Silver",
  "Gunmetal Grey",
  "Navy Blue"
];

  return (
    <div className='w-full max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-8 py-10'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className='text-center font-bold sm:text-3xl text-5xl'>Exchange to EV</h1>
        <p className='text-center'>Your one-stop destination for electric vehicle exchange</p>
      </div>
      <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">

        <form className="w-full max-w-5xl p-8 bg-white rounded-xl shadow-lg">
          {/* Responsive Grid: 1 column on mobile, 2 columns on medium screens and up */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

            {/* --- Section 1: Owner Details --- */}
            <h2 className="text-xl font-semibold text-gray-800 md:col-span-2">1. Owner Details</h2>
            <InputField id="fullName" label="Full Name" placeholder="prajwol" required />
            <InputField id="email" label="Email Address" type="email" placeholder="prajwolstha@example.com" required />
            <InputField id="phone" label="Phone Number" type="tel" placeholder="98XXXXXXXX" required />
            
            {/* UPDATED: Using the new SelectField component for City */}
            <SelectField
              id="city"
              label="City"
              options={cityOptions}
              placeholder="Select your city"
              required
            />
            
            {/* --- Section 2: Vehicle Details --- */}
            <h2 className="text-xl font-semibold text-gray-800 md:col-span-2 mt-4">2. Vehicle Details</h2>
           <InputField id="vehicleModel" label="Vehicle Model" placeholder="e.g., Maruti Suzuki Alto 800" required />
{/* <InputField id="vehicleType" label="Vehicle Type" placeholder="e.g., Hatchback, SUV" required /> */}
 <SelectField
              id="vehicleType"
              label="Vehicle Type"
              options={carTypesOptions}
              placeholder="Select your vehicle type"
              required
            />
<InputField id="makeYear" label="Make year"  placeholder="e.g., 2078 (2021)" required />
{/* <InputField id="vehicleColor" label="Vehicle Color" placeholder="e.g., Metallic Silver" required />
 */}
<SelectField
              id="vehicleColor"
              label="Vehicle Color"
              options={carColorOptions.map(color => ({ value: color.toLowerCase(), label: color }))}
              placeholder="Select vehicle color"
              required
            />
<InputField id="kmDriven" label="KM driven"  placeholder="e.g., 35,000" required />
<InputField id="expectedValuation" label="Expected Valuation amount (in NPR)" type="text" placeholder="e.g., NPR 12,50,000" required />

            <RadioGroup
              label="Features:"
              name="features"
              options={[
                { value: 'full', label: 'Full Option' },
                { value: 'mid', label: 'Mid Option' },
                { value: 'unknown', label: "I don't know" },
              ]}
            />
            <RadioGroup
              label="Fuel Type:"
              name="fuelType"
              options={[
                { value: 'petrol', label: 'Petrol' },
                { value: 'diesel', label: 'Diesel' },
                { value: 'electric', label: 'Electric' },
                { value: 'hybrid', label: 'Hybrid' },
              ]}
            />
{/* 
            <div className="flex items-center gap-4">
              <label htmlFor="fuel" className="text-base font-semibold text-gray-700">Fuel type:</label>
              <select
                id="fuel"
                name="fuel"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="electric">Electric</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div> */}
            <hr className="my-2 md:col-span-2" />

            <RadioGroup
              label="Vehicle Condition:"
              name="condition"
              options={[
                { value: 'new', label: 'Like New' },
                { value: 'minimal', label: 'Minimal damage' },
                { value: 'mechanical', label: 'Mechanical Issues' },
              ]}
            />
            <hr className="my-2 md:col-span-2" />

            <RadioGroup
              label="Accidents:"
              name="accidents"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            <div className="md:col-span-2">
              <label htmlFor="accidentInfo" className="block text-sm font-medium text-gray-700 mb-1">Additional Information (accidents/damages)</label>
              <textarea id="accidentInfo" placeholder="Describe any past accidents or current damages..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows={3}></textarea>
            </div>
            <hr className="my-2 md:col-span-2" />

            <RadioGroup
              label="Transmission:"
              name="transmission"
              options={[
                { value: 'manual', label: 'Manual' },
                { value: 'automatic', label: 'Automatic' },
              ]}
            />

            {/* --- Section 3: New Vehicle Details --- */}
            <h2 className="text-xl font-semibold text-gray-800 md:col-span-2 mt-4">3. New Vehicle Details</h2>
            <InputField id="newVehicleBrand" label="Vehicle Brand" placeholder="Leave empty if not applicable" />
            <InputField id="newVehicleModel" label="Vehicle Model" placeholder="Leave empty if not applicable" />
            {/* <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
              <div className="flex flex-col md:flex-row gap-4">
                <input placeholder="Minimum Price" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" />
                <input placeholder="Maximum Price" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" />
              </div>
            </div> */}
            <SelectField
              id="newVehiclePriceRange"
              label="Price Range"
              options={priceRangeOptions}
              placeholder="Select price range"
            />
            <InputField id="downpayment" label="Downpayment amount" type="number" placeholder="NPR" />

            <RadioGroup
              label="Looking to Finance?:"
              name="finance"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            <div className="md:col-span-2">
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
              <textarea id="additionalInfo" placeholder="Any other requirements or details..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows={3}></textarea>
            </div>

            {/* --- Action Buttons --- */}
            <div className="flex items-center mt-6 md:col-span-2">
              <button type="submit" className="cursor-pointer text-white bg-blue-600 font-medium py-2 px-6 rounded-lg transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:bg-blue-700">
                Submit
              </button>
              <button type="reset" className="cursor-pointer text-gray-700 font-medium ml-4 border-2 border-gray-300 py-2 px-6 rounded-lg transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-gray-100">
                Reset
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default VehicleValuationForm;


