import React from "react";
import Typography from "@mui/material/Typography";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { RiShareForwardFill } from "react-icons/ri";

const MessageBubble = ({
  message,
  self,
  forwarded,
  time,
}: {
  message: string;
  self: boolean;
  forwarded: boolean;
  time: any;
}) => {
  // console.log(time);
  return (
    <div className={`my-1 flex ${self ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[60%] min-w-[100px]  inline-block   px-2 py-1 pb-4 pr-14 ${
          self ? "bg-ownmessage" : "bg-white"
        }  rounded-lg relative`}
      >
        <div className="flex items-center">
          {forwarded && (
            <span className="text-xs text-iconsdeep">
              <span className="inline-block mr-1">
                <RiShareForwardFill />
              </span>
              Forwarded
            </span>
          )}

          {/* show when div is hovered upon  */}
          {/* <span className="absolute right-0 mt-1 mr-1 text-iconsdeep ">
            <ExpandMoreIcon sx={{ fontSize: "30px" }} />
          </span> */}
        </div>

        <span className="text-sm text-gray-700">{message}</span>
        <span className="text-xs absolute bottom-0 right-4 text-iconsdeep ">
          {time} {self && <DoneAllIcon sx={{ fontSize: "1.2rem" }} />}
        </span>
      </div>
    </div>
  );
};

export default MessageBubble;
