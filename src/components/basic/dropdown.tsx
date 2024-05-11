import { useState } from "react";
import Select from "react-tailwindcss-select";

const options = [
  { value: "fox", label: "🦊 Fox" },
  { value: "Butterfly", label: "🦋 Butterfly" },
  { value: "Honeybee", label: "🐝 Honeybee" },
];

const DropDownBox = () => {
  const [animal, setAnimal] = useState(null);

  const handleChange = (value: any) => {
    console.log("value:", value);
    setAnimal(value);
  };

  return (
    <Select
      value={animal}
      onChange={handleChange}
      options={options}
      primaryColor={""}
    />
  );
};

export default DropDownBox;
