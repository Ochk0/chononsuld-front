"use client";

import { useEffect, useState } from "react";
import DropDownBox from "./basic/dropdown";
import { PlusSquare } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

<<<<<<< HEAD
export default function SidebarRight({}) {
    const [data, setData] = useState<any>();
    const [filter , setFilter] = useState<any>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://10.2.203.44:8080/api/v1/grades/options');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
=======
export default function SidebarRight({
  selected,
  setSelected,
  onClickButton,
}: any) {
  const [data, setData] = useState<any>();
  const [filter, setFilter] = useState<any>([]);
  useEffect(() => {
    console.log(`changed: ${JSON.stringify(data)}`);
  }, [data]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://10.2.203.44:8080/api/v1/grades/options"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
>>>>>>> 7a00041bf1c5eb8e7e75231188a993dee70daa66

    fetchData();
  }, []);
  function addFilter(datas: any) {
    setFilter((st: any) => [...st, datas]);
    setData((el: any) => el.filter((datum: any) => datum.value != datas.value));
    // setSelected((selected:any)=> ({...selected, datas.value: {}}))
    const newData = datas.value;
    setSelected({ ...selected, [newData]: {} });
  }
  function handleClose(data: any) {
    setFilter((el: any) =>
      el.filter((datum: any) => datum.value != data.value)
    );
    setData((st: any) => [...st, data]);
  }
  return (
    <div className="flex grow flex-col gap-y-5 h-full overflow-y-auto bg-[#154185] px-6 text-indigo-200">
      <div className="flex h-16 shrink-0 items-center justify-end">
          <Link href='/'>
              <img
                  className="h-8 w-auto cursor-pointer"
                  src="https://cdn-icons-png.flaticon.com/512/311/311591.png"
                  alt="Wolf Totem"
              />
          </Link>
      </div>
      <nav className="flex  flex-1 flex-col">
        <form className="space-y-4">
          {filter?.map((filters: any) => (
            <DropDownBox
              key={filters.value}
              handleClose={(data: any) => handleClose(data)}
              data={filters}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
          <ul className="flex flex-col space-y-2 items-center justify-center">
            <div className="text-lg font-medium">Filter add</div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button>
                  <PlusSquare />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white cursor-pointer w-full text-[#154185] rounded-md focus:outline-none p-1">
                {data?.map((datas: any) => (
                  <DropdownMenuItem
                    onClick={() => addFilter(datas)}
                    className="p-2 hover:bg-[#154185]/20 rounded-md"
                    key={datas.value}
                  >
                    {datas.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {/* <Button></Button> */}
            <button onClick={(e) => onClickButton(e)}>bolchloo</button>
          </ul>
        </form>
      </nav>
    </div>
  );
}
