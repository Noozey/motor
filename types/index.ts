export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownFieldProps {
  label: string;
  options: DropdownOption[];
  placeholder: string;
  id: string;
}

export enum CarTabs {
  suv = "SUV",
  hatchback = "Hatchback",
  sedan = "Sedan",
  muv = "MUV",
  luxury = "Luxury",
}
export type CarDetails = {
  name: string;
  price: string;
  image: string;
};

export type CarData = {
  [key in CarTabs]: CarDetails[];
};

export type typeCarDetail = {
  imageUrl: string;
  year: number;
  make: string;
  model: string;
  variant: string;
  mileage: number;
  transmission: string;
  price: number;
};

type AdditionalFeatures = {
  id: number;
  text: string;
};

export type ExchangeEVDataDetail = {
  fullName: string;
  email: string;
  phone: number;
  city: string;
  vehicleModel: string;
  vehicleType: string;
  makeYear: number;
  vehicleColor: string;
  kmDriven: number;
  expectedValuation: number;
  features: string;
  fuelType: string;
  condition: string;
  accidents: string;
  accidentInfo: string;
  transmission: string;
  newVehicleBrand: string;
  newVehicleModel: string;
  newVehiclePriceRange: string;
  downpayment: number;
  finance: string;
  additionalInfo: string;
  images: File[];
  additionalFeatures: AdditionalFeatures[];
  engineType: string;
};
