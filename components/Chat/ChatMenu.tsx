"use client";
import React from "react";
import ChatMenuItem from "./ChatMenuItem";
import List from "@mui/material/List/List";
import { doc, setDoc } from "firebase/firestore";

const ChatMenu = ({ messages }: { messages: any[] }) => {
  const createMessageWithUser = async () => {
    // const messageRef =
  };
  console.log(messages);
  return (
    <div className="w-full flex flex-grow overflow-y-auto scrollbar ">
      <List sx={{ width: "100%", bgcolor: "background.paper" }} component="nav">
        {messages.map((message) => (
          <ChatMenuItem
            key={message.photoUrl}
            read
            photoURL={message.photoUrl}
            displayName={message.name}
          />
        ))}
        <ChatMenuItem read photoURL="" displayName="Jesse Lingard" />
        <ChatMenuItem read={false} photoURL="" displayName="Ali Pio" />
        <ChatMenuItem read photoURL="" displayName="Aisha Banda" />
      </List>
    </div>
  );
};

export default ChatMenu;
