import { useEffect, useState } from "react";
import Select from "react-tailwindcss-select";
import { XCircle } from "lucide-react";

type DropDownBoxProps = {
  data: any;
  handleClose: (data: any) => void;
  selected: any;
  setSelected: (data: any) => void;
};
const DropDownBox = ({
  data,
  handleClose,
  selected,
  setSelected,
}: DropDownBoxProps) => {
  const [option, setOption] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://10.2.203.44:8080/api/v1/grades/filter-options/${data.value}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let jsonData = await response.json();
        jsonData = jsonData.map((data: any) => ({
          value: `${data.value}`,
          label: `${data.label}`,
        }));
        setOption(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [select, setSelect] = useState<any>(null);
  const handleChange = (value: any) => {
    const newstate = { ...selected, name: {} };
    const name = data.value;
    setSelected({ ...selected, [name]: value });
    setSelect(value);
  };
  return (
    <>
      <div className="text-sm flex justify-between items-center">
        {data.label}{" "}
        <XCircle className="cursor-pointer" onClick={() => handleClose(data)} />
      </div>
      <Select
        value={
          select &&
          select.map((selects: any) => ({
            value: selects.value,
            label: `${
              selects.value.length >= 10
                ? selects.label.substring(0, 10) + "..."
                : selects.value
            }`,
          }))
        }
        onChange={handleChange}
        options={option}
        primaryColor={""}
        placeholder="Бүгд"
        isSearchable={true}
        isMultiple={true}
      />
    </>
  );
};

export default DropDownBox;
