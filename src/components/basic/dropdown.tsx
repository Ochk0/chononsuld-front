import { useState } from "react";
import Select from "react-tailwindcss-select";

type DropDownBoxProps = {
  data : string | undefined
}
const DropDownBox = ({ data } : DropDownBoxProps ) => {
  const [animal, setAnimal] = useState(null);
  console.log(data)
  const handleChange = (value: any) => {
    console.log("value:", value);
    setAnimal(value);
  };

  return (
    <Select
      value={animal}
      onChange={handleChange}
      options={data}
      primaryColor={""}
      placeholder='Бүгд'
    />
  );
};

export default DropDownBox;
