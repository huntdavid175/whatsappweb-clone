"use client";

import React from "react";

import ChatSectionHeader from "./ChatSectionHeader";
import ChatFooter from "./ChatFooter";
import ChatDrawer from "../UI/ChatDrawer";
import SpeedDIal from "../UI/SpeedDial";
import MessageBubble from "./MessageBubble";
import ChatDate from "../UI/ChatDate";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";

const Chatbox = () => {
  const currentUser = useSelector(
    (state: RootState) => state.chats.currentChat
  );

  console.log(currentUser);
  return (
    <>
      <div className="h-full flex-shrink-0 flex flex-col grow min-w-[700px] ">
        <ChatSectionHeader
          displayName={currentUser.name}
          photoUrl={currentUser.photoUrl}
        />
        <div className="w-full   flex-1  overflow-scroll bg-whatsapp-light scrollbar pt-8 px-8 py-1">
          <ChatDate date=" 5/13/2023" />
          <MessageBubble
            self={false}
            forwarded
            message=" MessageBubble this is where messages re written i honestly don't know
        why its like that but i hpe it ends soon"
          />

          <MessageBubble self={false} forwarded={false} message="*" />

          <MessageBubble
            self={true}
            forwarded={false}
            message="I don't get you "
          />
          <MessageBubble self={true} forwarded={false} message=". " />
          <MessageBubble
            self={true}
            forwarded={false}
            message="Honestly i don't see the reason why you should be angry "
          />
          <MessageBubble self={false} forwarded={false} message="Lol " />
          <MessageBubble
            self={false}
            forwarded={false}
            message="You are joking right ? "
          />
          <ChatDate date="TODAY" />
          <MessageBubble self={true} forwarded={false} message="Lol " />
          <MessageBubble self={false} forwarded={true} message="I hate you " />
          <MessageBubble
            self={false}
            forwarded={false}
            message="That is what she sent to me "
          />

          <MessageBubble self={false} forwarded={true} message="I hate you " />
          <MessageBubble self={true} forwarded={false} message="Goats " />
        </div>

        <ChatFooter />
      </div>
    </>
  );
};

export default Chatbox;
