import React from "react";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full min-h-screen bg-Layoutbg fixed top-0 left-0 -z-10 overflow-hidden">
        <div className="w-full h-32 bg-whatsapp"></div>
      </div>

      {children}
    </>
  );
};

export default ChatLayout;
