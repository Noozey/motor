import { DropdownFieldProps } from "@/types";

export const DropdownField: React.FC<DropdownFieldProps> = ({ label, options, placeholder, id }) => (
  <div className="flex-1 min-w-[100px] sm:min-w-[120px]">
    <label htmlFor={id} className="block text-xs sm:text-sm font-medium text-gray-600 mb-1">
      {label}
    </label>
    <div className="relative">
      <select
        id={id}
        name={id}
        className="w-full p-2 sm:p-2.5 border border-gray-300 rounded-md appearance-none focus:ring-1 focus:ring-[#0f2a3f] focus:border-[#0f2a3f] text-sm text-gray-700 placeholder-gray-400"
        defaultValue=""
        // If this were a controlled component, you'd have value and onChange props
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 sm:px-3 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  </div>
);