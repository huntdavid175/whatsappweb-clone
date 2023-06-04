"use client";

import React, { useEffect, useState } from "react";
import ChatNavHeader from "./AppNavHeader";
import ChatSearchSection from "./ChatSearchSection";
import ChatMenu from "./ChatMenu";
import SidebarHeader from "./SidebarHeader";
// import SidebarHeader from "./SidebarHeader";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import { fetchChats } from "@/app/GlobalRedux/Features/chatSlice";

const Sidebar = () => {
  const [messages, setMessages] = useState<any[]>([]);

  const chats = useSelector((state: RootState) => state.chats);

  const dispatch = useDispatch<any>();

  useEffect(() => {
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages: any[] = [];
      querySnapshot.forEach((doc) => {
        messages.push(doc.data());
      });
      setMessages(messages);
      console.log("Current cities in CA: ", messages.join(", "));
    });

    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   dispatch(fetchChats());
  // }, [dispatch]);

  console.log(messages);

  return (
    <div className="flex flex-col w-full min-w-[450px] flex-sidebar  h-full  shadow-lg   overflow-y-scroll ">
      <SidebarHeader />
      <ChatMenu messages={messages} />
    </div>
  );
};

export default Sidebar;
