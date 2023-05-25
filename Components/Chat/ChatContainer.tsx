import React from "react";
import Sidebar from "./Sidebar";
import Chatbox from "./Chatbox";

const ChatContainer = () => {
  return (
    <div className="w-[calc(100%-38px)] h-[calc(100vh-38px)] max-w-[1600px] mt-[19px] m-auto shadow-2xl overflow-hidden">
      <div className="w-full h-full flex bg-white">
        <Sidebar />
        <Chatbox />
      </div>
    </div>
  );
};

export default ChatContainer;
