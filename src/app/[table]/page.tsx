"use client";
import { PieChart } from "@/components/charts/pie-chart";
import SidebarLeft from "@/components/sideBarLeft";
import SidebarRight from "@/components/sideBarRight";
import { useEffect, useState } from "react";
import {HeroHighlight} from "@/components/ui/hero-highlight";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
const VisualizePage = ({ params }: { params: { table: string } }) => {
  const [selected, setSelected] = useState({});
  const [data , setData] = useState<any>();
  useEffect(() => {
  }, [selected]);
  const onClickButton = async (e: any) => {
    e.preventDefault();
    const request = await fetch("http://10.2.203.44:8080/api/v1/grades", {
      method: "get",
    });
    const res = await request.json();
    setData(res)
  };
  console.log(data)
  return (
    <div className="flex w-full h-full">
      <div className="md:w-[20%] xl:w-[15%]">
        <SidebarLeft table={params.table ?? "#"} />
      </div>
      <div className="w-[70%]">
          <div className='w-full'>
              <HeroHighlight className='w-[400px] h-[400px]'>

                  {data &&
                      <PieChart />
                      }
              </HeroHighlight>
          </div>

      </div>
      <div className="md:w-[20%] xl:w-[15%]">
        <SidebarRight
          onClickButton={onClickButton}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
};
export default VisualizePage;
