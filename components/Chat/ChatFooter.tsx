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
import { useSelector } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { v4 as uuid } from "uuid";
import { addRecipientToChat, sendMessage } from "@/helpers/messages";

const ChatFooter = () => {
  const [openTray, setOpenTray] = useState(false);
  const [inputMessage, setInputMessage] = useState("");

  const currentChatUser = useSelector(
    (state: RootState) => state.chats.currentChat
  );

  const user = useSelector((state: RootState) => state.user.user);

  const openTrayHandler = () => {
    setOpenTray(true);
  };

  const closeTrayHandler = () => {
    setOpenTray(false);
  };

  const messageInputHandler = (e: any) => {
    const value = e.target.value;
    setInputMessage(value);
  };

  // const addRecipientToChat = async (chatId: string, recipientId: any) => {
  //   const docRef = doc(db, "chats", recipientId);
  //   const docSnap = await getDoc(docRef);

  //   console.log(chatId, recipientId);

  //   if (docSnap.exists()) {
  //     const currentChats = docSnap.data().chats;

  //     const alreadyExistChat = currentChats.find(
  //       (chat: any) => chat.chatId === chatId
  //     );

  //     if (alreadyExistChat) return;

  //     const updatedChats = [
  //       ...currentChats,
  //       {
  //         chatId,
  //         name: user.name,
  //         photoUrl: user.photoUrl,
  //         userId: user.userId,
  //         lastMessage: "",
  //       },
  //     ];

  //     await updateDoc(docRef, { chats: updatedChats });
  //   } else {
  //     return;
  //   }
  // };

  // const sendMessage = async (
  //   chatId: any,
  //   accountOwnerId: string,
  //   message: string
  // ) => {
  //   const docRef = doc(db, "messages", chatId);
  //   const docSnap = await getDoc(docRef);
  //   const id = uuid();

  //   if (docSnap.exists()) {
  //     const currentMessages = docSnap.data().messages;
  //     const updatedMessages = [
  //       ...currentMessages,
  //       { id, accountOwnerId, message, forwarded: false, read: false },
  //     ];

  //     await updateDoc(docRef, { messages: updatedMessages });
  //     await addRecipientToChat(
  //       chatId,
  //       currentChatUser.userId,
  //       user.name,
  //       user.photoUrl,
  //       user.userId
  //     );
  //     setInputMessage("");
  //   } else {
  //     const newMessage = {
  //       id,
  //       accountOwnerId,
  //       message,
  //       forwarded: false,
  //       read: false,
  //     };
  //     await setDoc(docRef, { messages: newMessage });
  //     await addRecipientToChat(
  //       chatId,
  //       currentChatUser.userId,
  //       user.name,
  //       user.photoUrl,
  //       user.userId
  //     );

  //     setInputMessage("");
  //   }
  // };

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
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            sendMessage(
              currentChatUser.chatId,
              user.userId,
              inputMessage,
              currentChatUser.userId,
              user.name,
              user.photoUrl,
              addRecipientToChat,
              setInputMessage
            );
          }}
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
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              messageInputHandler(event)
            }
            value={inputMessage}
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
