"use client";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, query, where, onSnapshot } from "firebase/firestore";

import { db } from "@/firebase";

type ChatState = {
  chats: any[];
  currentChat: {
    name: string | undefined;
    photoUrl: string | undefined;
    chatId: string | undefined;
    messages: any[];
  };
};

const initialState: ChatState = {
  chats: [],
  currentChat: {
    name: undefined,
    photoUrl: undefined,
    chatId: undefined,
    messages: [],
  },
};

const fetchChats = createAsyncThunk(
  "chats/userchats",
  async (_, { dispatch }) => {
    const q = query(collection(db, "chats"));
    let userChats: any = [];

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const chats: any = [];
      querySnapshot.forEach((doc) => {
        chats.push(doc.data().name);
        userChats = chats;
        dispatch(addChats(chats));
      });
      //   return userChats
    });

    return userChats;
  }
);

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addChats: (state, action: PayloadAction<any>) => {
      state.chats = action.payload;
    },
    setCurrentchat: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
      state.currentChat = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChats.fulfilled, (state, action: PayloadAction) => {
      state.chats;
    });
  },
});
export const { addChats, setCurrentchat } = chatSlice.actions;
export { fetchChats };

export default chatSlice.reducer;
