import ChatContainer from "@/components/Chat/ChatContainer";
import { db, firebaseApp } from "@/firebase";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";
import { collection, getDocs } from "firebase/firestore";

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
