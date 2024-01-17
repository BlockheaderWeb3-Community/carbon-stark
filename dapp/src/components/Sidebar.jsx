import SidebarItem from "./SidebarItem";
import dashboardLogo from "../assets/dashboard.svg";
import projectsLogo from "../assets/signpost.svg";
import impactLogo from "../assets/impact.svg";
import profileLogo from "../assets/profile-circle.svg";
import carbonLogo from "../assets/profile-circle.svg";

function Sidebar() {
  return (
    <div className="bg-darkPrimary pt-10 px-[15px] sidebar flex flex-col gap-y-4">
      <SidebarItem logo={dashboardLogo} title={"Dashboard"} to={"dashboard"} />
      <SidebarItem logo={projectsLogo} title={"Projects"} to={"projects"} />
      <SidebarItem logo={impactLogo} title={"Impact tracking"} to={"impact"} />
      <SidebarItem logo={profileLogo} title={"Profile"} to={"profile"} />
      <SidebarItem
        logo={carbonLogo}
        title={"Carbon footprint"}
        to={"carbon-footprint"}
      />
    </div>
  );
}

export default Sidebar;
