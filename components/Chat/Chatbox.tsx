"use client";

import React, { useEffect, useRef } from "react";

import ChatSectionHeader from "./ChatSectionHeader";
import ChatFooter from "./ChatFooter";
import ChatDrawer from "../UI/ChatDrawer";
import SpeedDIal from "../UI/SpeedDial";
import MessageBubble from "./MessageBubble";
import ChatDate from "../UI/ChatDate";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import ChatPresentation from "../Presentational/ChatPresentation";

const Chatbox = () => {
  const bottomRef = useRef<HTMLInputElement>(null);

  const currentChatUser = useSelector(
    (state: RootState) => state.chats.currentChat
  );

  const user = useSelector((state: RootState) => state.user.user);

  const messages = useSelector((state: RootState) => state.chats.messages);
  // console.log(messages);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const formatTime = (timeStamp: any) => {
    const formattedTime = timeStamp.toDate().toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return formattedTime;
  };

  return (
    <>
      <div className="h-full flex-shrink-0 flex flex-col grow min-w-[700px] relative">
        <ChatSectionHeader
          displayName={currentChatUser.name}
          photoUrl={currentChatUser.photoUrl}
        />
        <div className="w-full   flex-1  overflow-scroll bg-whatsapp-light scrollbar pt-8 px-8 py-1 relative">
          <ChatDate date=" 5/13/2023" />
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              self={message.accountOwnerId === user.userId}
              forwarded={message.forwarded}
              message={message.message}
              time={formatTime(message.timeStamp)}
            />
          ))}
          <div className="w-full" ref={bottomRef}></div>
        </div>

        <ChatFooter />
        {messages.length < 1 && <ChatPresentation />}
      </div>
    </>
  );
};

export default Chatbox;
