"use client";
import React, { useState } from "react";
import ChatNavHeader from "./AppNavHeader";
import { Avatar, IconButton } from "@mui/material";
import { Stack } from "@mui/material";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatSearchSection from "./ChatSearchSection";
import BasicMenu from "../Menu/BasicMenu";

const SidebarHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
            <IconButton onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          </Stack>
        </div>
      </ChatNavHeader>
      <ChatSearchSection />
      <BasicMenu
        anchorEl={anchorEl}
        open={open}
        handleClick={handleClick}
        handleClose={handleClose}
      />
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
