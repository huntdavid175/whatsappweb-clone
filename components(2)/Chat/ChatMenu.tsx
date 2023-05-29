"use client";
import React from "react";
import ChatMenuItem from "./ChatMenuItem";
import List from "@mui/material/List/List";

const ChatMenu = () => {
  return (
    <div className="w-full flex flex-grow overflow-y-auto scrollbar ">
      <List sx={{ width: "100%", bgcolor: "background.paper" }} component="nav">
        <ChatMenuItem read />
        <ChatMenuItem read={false} />
        <ChatMenuItem read />
      </List>
    </div>
  );
};

export default ChatMenu;
