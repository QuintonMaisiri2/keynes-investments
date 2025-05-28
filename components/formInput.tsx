import { Input } from "./ui/input";

interface FormInputProps {
  id: string;
  type?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const FormInput = ({ id, type, name, onChange, value }: FormInputProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor="email" className="text-brown">
        {name}
      </label>
      <Input
        id={id}
        type={type}
        className="bg-white"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
