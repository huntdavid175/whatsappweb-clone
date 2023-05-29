import React from "react";

const ChatDate = ({ date }: { date: string }) => {
  return (
    //Date for chat
    <div className="w-full flex justify-center items-center my-6">
      <span className="inline-block bg-white p-2 rounded-lg text-gray-700 text-xs">
        {date}
      </span>
    </div>
  );
};

export default ChatDate;
