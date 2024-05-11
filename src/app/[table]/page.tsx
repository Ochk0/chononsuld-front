import { PieChart } from "@/components/charts/pie-chart";
import SidebarLeft from "@/components/sideBarLeft";
import SidebarRight from "@/components/sideBarRight";

const VisualizePage = ({ params }: { params: { table: string } }) => {
  return (
    <div className="flex w-full h-full">
      {/* <div className="w-[30vw]"> */}
      <div className="md:w-[20%] xl:w-[15%]">
        <SidebarLeft table={params.table ?? "#"} />
      </div>
      {/* </div> */}
      <div className="w-[70%]">
        <PieChart />;
      </div>
      <div className="md:w-[20%] xl:w-[15%]">
        <SidebarRight />
      </div>
    </div>
  );
};
export default VisualizePage;
