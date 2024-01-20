/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function SidebarItem({ logo, title, to }) {
  return (
    <NavLink to={to}>
      <div className="flex w-[233px] items-center gap-x-4 rounded-[5px] px-[26px] py-[18px] text-base font-semibold  text-white transition-all duration-300 ease-out hover:bg-primaryColor">
        <img src={logo} className="h-5 w-5" alt="" />
        <h3>{title}</h3>
      </div>
    </NavLink>
  );
}

export default SidebarItem;
