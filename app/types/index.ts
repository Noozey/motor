
interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownFieldProps {
  label: string;
  options: DropdownOption[];
  placeholder: string;
  id: string;
}