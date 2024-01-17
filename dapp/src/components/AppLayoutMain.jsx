import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function AppLayoutMain() {
  return (
    <div className="!h-screen overflow-hidden">
      <Navbar />
      <main className="grid grid-cols-[auto_1fr] !h-full border-t-[0.5px] border-t-solid border-t-white bg-bgFlare bg-no-repeat bg-cover bg-center">
        <Sidebar />
        <div className="overflow-y-scroll pt-[49px] pl-5 pr-[60px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayoutMain;
