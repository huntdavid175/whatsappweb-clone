"use client";

import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import CloseIcon from "@mui/icons-material/Close";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import InputBase from "@mui/material/InputBase";

const ChatFooter = () => {
  const [openTray, setOpenTray] = useState<boolean>(false);

  const openTrayHandler = () => {
    setOpenTray(true);
  };

  const closeTrayHandler = () => {
    setOpenTray(false);
  };
  return (
    <div className="w-full bg-chatLayoutbg min-h-[62px]">
      <div className="border-b px-4 py-2 flex space-x-2 justify-center items-center ">
        <div>
          {openTray && (
            <IconButton onClick={closeTrayHandler}>
              <CloseIcon />
            </IconButton>
          )}
          <IconButton onClick={openTrayHandler}>
            <TagFacesIcon />
          </IconButton>
          {openTray && (
            <IconButton>
              <GifBoxOutlinedIcon className="text-teal-600" />
            </IconButton>
          )}
          {openTray && (
            <IconButton>
              <NoteOutlinedIcon />
            </IconButton>
          )}
          <IconButton>
            <AttachFileIcon />
          </IconButton>
        </div>

        <Paper
          className="bg-white rounded-xl flex-1"
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            boxShadow: "none",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Type a message"
            inputProps={{ "aria-label": "search google maps" }}
            className="text-sm"
          />
        </Paper>
        <IconButton>
          <KeyboardVoiceIcon className="text-iconsdeep" />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatFooter;
