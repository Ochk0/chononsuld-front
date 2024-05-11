import { PieChart } from "@/components/charts/pie-chart";
import SidebarLeft from "@/components/sideBarLeft";
import SidebarRight from "@/components/sideBarRight";
import { HeroHighlightDemo } from "@/view/root/hero-highlight";

const Main = () => {
  return (
    <div className="flex w-full h-full">
      {/* <div className="w-[30vw]"> */}
      <div className="md:w-[20%] xl:w-[15%]">
        <SidebarLeft table={"#"} />
      </div>
      <div className="w-[70%]">
        {/* <PieChart />; */}
        <HeroHighlightDemo />
      </div>
      <div className="md:w-[20%] xl:w-[15%]">
        <SidebarRight />
      </div>
    </div>
  )
};
export default Main;
