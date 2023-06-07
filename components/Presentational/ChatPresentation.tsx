import React from "react";
import PresentationSVG from "./PresentationSVG";

const ChatPresentation = () => {
  return (
    <div className="w-full h-full bg-chatLayoutbg absolute top-0 left-0 flex flex-col justify-center items-center">
      <div className="mb-12">
        <PresentationSVG />
      </div>

      <h4 className="text-3xl font-light text-iconsdeep">WhatsApp Web</h4>
      <div className="mt-4 text-center">
        <p className="text-xs text-iconsdeep">
          Send and receive messages without keeping your phone online.
        </p>
        <p className="text-xs text-iconsdeep">
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time
        </p>
      </div>
    </div>
  );
};

export default ChatPresentation;
