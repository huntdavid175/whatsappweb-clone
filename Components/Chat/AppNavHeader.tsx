"use client";

import React from "react";
import { Avatar, IconButton } from "@mui/material";
import { Stack } from "@mui/material";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatSearchSection from "./ChatSearchSection";

const AppNavHeader = ({
  children,
  leftBorder,
  rightBorder,
}: {
  children: React.ReactNode;
  leftBorder?: boolean;
  rightBorder?: boolean;
}) => {
  return (
    // <div className="w-full  sticky left-0 top-0 z-1000000">
    //   <div className=" w-full  px-4 py-2 bg-chatLayoutbg flex justify-between items-center">
    //     <div>
    //       <Avatar alt="Owner Avatar" />
    //     </div>
    //     <div className="text-iconsdeep ">
    //       <Stack direction="row" spacing={1}>
    //         <IconButton>
    //           <PeopleRoundedIcon />
    //         </IconButton>
    //         <IconButton>
    //           <DataSaverOffIcon />
    //         </IconButton>
    //         <IconButton>
    //           <ChatIcon />
    //         </IconButton>
    //         <IconButton>
    //           <MoreVertIcon />
    //         </IconButton>
    //       </Stack>
    //     </div>
    //   </div>
    //   <ChatSearchSection />
    // </div>

    <div className="w-full  sticky left-0 top-0 z-1000000">
      <div
        className={` w-full  px-4 py-2 bg-chatLayoutbg flex justify-between items-center ${
          leftBorder ? "border-l-2" : ""
        } ${rightBorder ? "border-r-2" : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default AppNavHeader;
