"use client";

import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import FilterListIcon from "@mui/icons-material/FilterList";

const ChatSearchSection = () => {
  return (
    <div className="border-b px-4 py-2 flex space-x-2 justify-center items-center ">
      <Paper
        className="bg-chatLayoutbg rounded-xl flex-1"
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          boxShadow: "none",
        }}
      >
        <span className="px-2">
          <SearchIcon sx={{ fontSize: "19px" }} />
        </span>

        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search or start new search"
          inputProps={{ "aria-label": "search google maps" }}
          className="text-sm"
        />
      </Paper>
      <FilterListIcon className="text-iconsdeep" />
    </div>
  );
};

export default ChatSearchSection;
