
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


export enum CarTabs{
    suv="SUV",
    hatchback="Hatchback",
    sedan="Sedan",
    muv="MUV",
    luxury="Luxury"
}
export type CarDetails={
    name:string,
    price:string,
    image:string
}

export type CarData={
    [key in CarTabs]: CarDetails[]
}