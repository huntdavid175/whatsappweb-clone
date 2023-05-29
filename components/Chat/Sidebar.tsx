import React from "react";
import ChatNavHeader from "./AppNavHeader";
import ChatSearchSection from "./ChatSearchSection";
import ChatMenu from "./ChatMenu";
import SidebarHeader from "./SidebarHeader";
// import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-full min-w-[450px] flex-sidebar  h-full  shadow-lg   overflow-y-scroll ">
      <SidebarHeader />
      <ChatMenu />
    </div>
  );
};

export default Sidebar;
