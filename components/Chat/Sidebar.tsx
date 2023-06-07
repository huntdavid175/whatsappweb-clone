"use client";

import React, { useEffect, useState } from "react";
import ChatNavHeader from "./AppNavHeader";
import ChatSearchSection from "./ChatSearchSection";
import ChatMenu from "./ChatMenu";
import SidebarHeader from "./SidebarHeader";
import { v4 as uuid } from "uuid";
// import SidebarHeader from "./SidebarHeader";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/firebase";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/GlobalRedux/store";
import {
  setCurrentchat,
  loadChatMessages,
} from "@/app/GlobalRedux/Features/chatSlice";
import {
  loadWhatsAppUsers,
  showWhatsAppUsers,
} from "@/app/GlobalRedux/Features/userSlice";

const Sidebar = () => {
  // const [messages, setMessages] = useState<any[]>([]);
  const [chats, setChats] = useState<any>([]);

  // const chats = useSelector((state: RootState) => state.chats);

  const dispatch = useDispatch<any>();

  const user = useSelector((state: RootState) => state.user.user);
  const showUsers = useSelector(
    (state: RootState) => state.user.whatsAppUsers.showUsers
  );

  const whatsAppUsers = useSelector(
    (state: RootState) => state.user.whatsAppUsers.users
  );

  // useEffect(() => {
  //   const q = query(collection(db, "users"));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     const messages: any[] = [];
  //     querySnapshot.forEach((doc) => {
  //       messages.push(doc.data());
  //     });
  //     setMessages(messages);
  //     // console.log("Current cities in CA: ", messages.join(", "));
  //   });

  //   return () => unsubscribe();
  // }, []);

  // Get chats

  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(db, "chats", user.userId),
      (doc: any) => {
        setChats(doc.data()?.chats);
      }
    );

    return () => unsubscribe();
  }, [user]);

  // Get whatsapp users

  const getWhatsAppUsers = async () => {
    const users: any[] = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    return users;
  };

  useEffect(() => {
    if (showUsers === true) {
      const loadUsers = async () => {
        const users = await getWhatsAppUsers();
        console.log(users);
        dispatch(loadWhatsAppUsers(users));
      };

      loadUsers();
    }
  }, [showUsers]);

  console.log(whatsAppUsers);
  console.log(showUsers);

  // Function to load messages after adding to chat
  const loadMessages = (chatId: string) => {
    let messages: any[] = [];
    onSnapshot(doc(db, "messages", chatId), (doc: any) => {
      // console.log("Current data: ", doc.data());
      dispatch(loadChatMessages(doc.data().messages));
    });
  };

  // Function to add chats and open messages
  const addPersonToChat = async (
    id: string,
    name: string,
    photoUrl: string
  ) => {
    const docRef = doc(db, "chats", user.userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const currentChats = docSnap.data().chats;
      const alreadyExists = currentChats.find(
        (chat: any) => chat.userId === id
      );
      if (alreadyExists) {
        dispatch(
          setCurrentchat({
            name,
            photoUrl,
            chatId: alreadyExists.chatId,
            userId: alreadyExists.userId,
            messages: [],
          })
        );

        loadMessages(alreadyExists.chatId);
        dispatch(showWhatsAppUsers(false));
        dispatch(loadWhatsAppUsers([]));
        return;
      } else {
        // create new chat
        const chatId = uuid();
        const updatedChats = [
          ...currentChats,
          { name, photoUrl, chatId, lastMessage: "", userId: id },
        ];

        // updateit to existing chat

        await updateDoc(docRef, { chats: updatedChats });

        // create messages collectionfor chat

        await setDoc(doc(db, "messages", chatId), { messages: [] });

        // update state with recipient details
        dispatch(
          setCurrentchat({
            name,
            photoUrl,
            chatId: chatId,
            messages: [],
          })
        );

        loadMessages(chatId);
        dispatch(showWhatsAppUsers(false));
        dispatch(loadWhatsAppUsers([]));
      }
    } else {
      console.log("enters here");
      const chatId = uuid();
      await setDoc(docRef, {
        chats: [{ name, photoUrl, chatId, lastMessage: "", userId: id }],
      });
      await setDoc(doc(db, "messages", chatId), { messages: [] });
      dispatch(
        setCurrentchat({ name, photoUrl, chatId, userId: id, messages: [] })
      );
    }

    // const chatRef = doc(db, "chats", user.userId);
    // setDoc(
    //   chatRef,
    //   {
    //     id: id,
    //     name: name,
    //     lastMessage: "",
    //     photoUrl: photoUrl,
    //     lastMessageRead: false,
    //   },
    //   { merge: true }
    // );
  };

  // console.log(chats);

  return (
    <div className="flex flex-col w-full min-w-[450px] flex-sidebar  h-full  shadow-lg   overflow-y-scroll ">
      <SidebarHeader photoUrl={user.photoUrl} />
      <ChatMenu
        chats={chats}
        addContact={addPersonToChat}
        whatsAppUsers={whatsAppUsers}
        showUsers={showUsers}
        // chatusers={messages}
      />
    </div>
  );
};

export default Sidebar;
