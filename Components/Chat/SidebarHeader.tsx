"use client";
import React from "react";
import ChatNavHeader from "./AppNavHeader";
import { Avatar, IconButton } from "@mui/material";
import { Stack } from "@mui/material";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatSearchSection from "./ChatSearchSection";

const SidebarHeader = () => {
  return (
    <>
      <ChatNavHeader>
        <div>
          <Avatar alt="Owner Avatar" />
        </div>
        <div className="text-iconsdeep ">
          <Stack direction="row" spacing={1}>
            <IconButton>
              <PeopleRoundedIcon />
            </IconButton>
            <IconButton>
              <DataSaverOffIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Stack>
        </div>
      </ChatNavHeader>
      <ChatSearchSection />
    </>
  );
};

export default SidebarHeader;

{
  /* <div>
          <Avatar alt="Owner Avatar" />
        </div>
        <div className="text-iconsdeep ">
          <Stack direction="row" spacing={1}>
            <IconButton>
              <PeopleRoundedIcon />
            </IconButton>
            <IconButton>
              <DataSaverOffIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Stack>
        </div> */
}
