"use client";

import { configureStore } from "@reduxjs/toolkit";
import userReducer, { addUser } from "./Features/userSlice";
import chatReducer from "./Features/chatSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    user: userReducer,
    chats: chatReducer,
  },
  middleware: [thunk],
});

const storedUser = localStorage.getItem("user");

// console.log(JSON.parse(storedUser).user);

if (storedUser) {
  store.dispatch(addUser(JSON.parse(storedUser).user));
}

store.subscribe(() => {
  const state = store.getState();
  if (state.user) {
    localStorage.setItem("user", JSON.stringify(state.user));
  } else {
    localStorage.removeItem("user");
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
