import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function AppLayoutMain() {
  return (
    <div className="!h-screen overflow-hidden">
      <Navbar />
      <main className="border-t-solid grid !h-full grid-cols-[auto_1fr] border-t-[0.2px] border-t-white bg-bgFlare bg-cover bg-center bg-no-repeat">
        <Sidebar />
        <div className="overflow-y-scroll pl-5 pr-[60px] pt-[49px] text-white">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayoutMain;
