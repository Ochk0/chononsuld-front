"use client";

import { useEffect, useState} from "react";
import DropDownBox from "./basic/dropdown";

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

export default function SidebarRight() {
    const [data, setData] = useState();

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await fetch('http://192.168.0.112:8080/api/v1/staffs/options');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    console.log(data)
  return (
    <div className="flex grow flex-col gap-y-5 h-full overflow-y-auto bg-[#154185] px-6 text-indigo-200">
      <div className="flex h-16 shrink-0 items-center justify-end">
        <img
          className="h-8 w-auto"
          src="https://cdn-icons-png.flaticon.com/512/311/311591.png"
          alt="Your Company"
        />
      </div>
      <nav className="flex flex-1 flex-col">
          <form className='space-y-4'>
              <ul >
                  <div className='pb-2'>Тэнхим сонгох</div>
                  <DropDownBox  data={data.id} />
              </ul>
              <ul>
                  <div className='pb-2'>Хөтөлбөр сонгох</div>
                  <DropDownBox/>
              </ul>
          </form>
      </nav>
    </div>
  );
}
