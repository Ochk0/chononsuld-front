"use client";
import { PieChart } from "@/components/charts/pie-chart";
import SidebarLeft from "@/components/sideBarLeft";
import SidebarRight from "@/components/sideBarRight";
import { useEffect, useState } from "react";

const VisualizePage = ({ params }: { params: { table: string } }) => {
  const [selected, setSelected] = useState({});
  useEffect(() => {
    console.log(`selected changed: ${JSON.stringify(selected)}`);
  }, [selected]);
  const onClickButton = async (e: any) => {
    e.preventDefault();
    const request = await fetch("http://10.2.203.44:8080/api/v1/grades", {
      method: "post",
      body: JSON.stringify(selected),
    });
    const res = await request.json();
  };
  return (
    <div className="flex w-full h-full">
      <div className="md:w-[20%] xl:w-[15%]">
        <SidebarLeft table={params.table ?? "#"} />
      </div>
      <div className="w-[70%]">
        <PieChart />
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
