"use client";

import ChatContainer from "@/Components/Chat/ChatContainer";
import { firebaseApp } from "@/firebase";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";

const ChatPage = () => {
  // const app = firebaseApp;
  // const auth = getAuth(app);

  // const [user, loading] = useAuthState(auth);
  // console.log(user);

  return (
    <>
      <ChatContainer />
    </>
  );
};

export default ChatPage;
