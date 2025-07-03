// components/FormElements.tsx

import React from 'react';
import { Calendar } from 'lucide-react';

// --- Input Field ---
export interface InputFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'number' | 'tel';
  required?: boolean;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({ id, label, placeholder, type = 'text', required = false, className }) => (
  <div className={className}>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder || label}
      required={required}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
    />
  </div>
);

// --- Select Field ---
export interface SelectFieldProps {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  required?: boolean;
  placeholder?: string;
  className?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({ id, label, options, required = false, placeholder, className }) => (
  <div className={className}>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      id={id}
      name={id}
      required={required}
      defaultValue=""
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all appearance-none bg-white bg-no-repeat bg-right-4"
      style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em' }}
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

// --- Radio Group ---
export interface RadioGroupProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ label, name, options, className }) => (
  <fieldset className={className}>
    <legend className="block text-sm font-medium text-gray-700 mb-2">{label}</legend>
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      {options.map((option) => (
        <div key={option.value} className="flex items-center">
          <input
            id={`${name}-${option.value}`}
            type="radio"
            value={option.value}
            name={name}
            className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          />
          <label htmlFor={`${name}-${option.value}`} className="ml-2 text-sm text-gray-600">
            {option.label}
          </label>
        </div>
      ))}
    </div>
  </fieldset>
);

// --- Checkbox Field ---
export interface CheckboxFieldProps {
    id: string;
    label: React.ReactNode;
    required?: boolean;
}

export const CheckboxField: React.FC<CheckboxFieldProps> = ({ id, label, required = false }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0">
            <input 
              id={id} 
              name={id} 
              type="checkbox" 
              required={required}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" 
            />
        </div>
        <div className="ml-3">
            <label htmlFor={id} className="text-sm text-gray-600">{label}</label>
        </div>
    </div>
);

// --- Phone Field ---
export const PhoneField: React.FC<InputFieldProps> = ({ id, label, placeholder, required }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="mt-1 flex rounded-lg shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                +977
            </span>
            <input
                type="tel"
                name={id}
                id={id}
                required={required}
                placeholder={placeholder}
                className="flex-1 py-3 px-4 block w-full focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-r-lg transition-all"
            />
        </div>
    </div>
);

// --- Form Section Wrapper ---
export const FormSection: React.FC<{ number: number; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
    <div className="sm:col-span-2 space-y-6 pt-8 border-t border-gray-200 first:border-t-0 first:pt-0">
        <h3 className="text-lg font-semibold text-gray-900">
            <span className="bg-indigo-600 text-white rounded-full h-8 w-8 inline-flex items-center justify-center mr-3">{number}</span>
            {title}
        </h3>
        {children}
    </div>
);