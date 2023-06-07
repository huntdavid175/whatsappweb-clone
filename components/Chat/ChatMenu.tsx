"use client";
import React from "react";
import ChatMenuItem from "./ChatMenuItem";
import List from "@mui/material/List/List";
import { doc, setDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";

// eslint-disable-next-line react/display-name
const ChatMenu = React.memo(
  ({
    chats,
    addContact,
    whatsAppUsers,
    showUsers,
  }: // chatusers,
  {
    chats: any[];
    addContact: any;
    whatsAppUsers: any[];
    showUsers: boolean;
  }) => {
    const user = useSelector((state: RootState) => state.user.user);

    const filteredWhatsAppUsers = whatsAppUsers.filter(
      (whatsappUser) => whatsappUser.userId !== user.userId
    );

    let data = showUsers ? filteredWhatsAppUsers : chats;
    return (
      <div className="w-full flex flex-grow overflow-y-auto scrollbar ">
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
          component="nav"
        >
          {data?.map((chat) => (
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
          {/* <div className="border-t border-red-300"></div>
          {chatusers.map((chat) => (
            <ChatMenuItem
              key={chat.userId}
              read
              photoURL={chat.photoUrl}
              displayName={chat.name}
              id={chat.userId}
              addContact={addContact}
              lastMessage={chat.lastMessage}
            />
          ))} */}
        </List>
      </div>
    );
  }
);

export default ChatMenu;
