"use client";
import React from "react";
import ChatMenuItem from "./ChatMenuItem";
import List from "@mui/material/List/List";
import { doc, setDoc } from "firebase/firestore";

const ChatMenu = ({ chats, addContact }: { chats: any[]; addContact: any }) => {
  const createMessageWithUser = async () => {
    // const messageRef =
  };
  console.log(chats);
  return (
    <div className="w-full flex flex-grow overflow-y-auto scrollbar ">
      <List sx={{ width: "100%", bgcolor: "background.paper" }} component="nav">
        {chats.map((chat) => (
          <ChatMenuItem
            key={chat.userId}
            read
            photoURL={chat.photoUrl}
            displayName={chat.name}
            id={chat.userId}
            addContact={addContact}
            lastMessage={chat.lastMessage}
          />
        ))}
        {/* <ChatMenuItem read photoURL="" displayName="Jesse Lingard" />
        <ChatMenuItem read={false} photoURL="" displayName="Ali Pio" />
        <ChatMenuItem read photoURL="" displayName="Aisha Banda" /> */}
      </List>
    </div>
  );
};

export default ChatMenu;
