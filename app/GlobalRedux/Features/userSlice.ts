"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WhatsappUser {
  name: string;
  photoUrl: string;
  userId: string;
  email: string;
}

interface UserState {
  user: WhatsappUser;
}

const initialState: UserState = {
  user: { name: "", photoUrl: "", userId: "", email: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
      state.user = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
