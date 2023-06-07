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
  whatsAppUsers: {
    showUsers: boolean;
    users: WhatsappUser[];
  };
}

const initialState: UserState = {
  user: { name: "", photoUrl: "", userId: "", email: "" },
  whatsAppUsers: {
    showUsers: false,
    users: [],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<any>) => {
      // console.log(action.payload);
      state.user = action.payload;
    },

    showWhatsAppUsers: (state, action: PayloadAction<any>) => {
      state.whatsAppUsers.showUsers = action.payload;
    },

    loadWhatsAppUsers: (state, action: PayloadAction<any>) => {
      state.whatsAppUsers.users = action.payload;
    },
  },
});

export const { addUser, showWhatsAppUsers, loadWhatsAppUsers } =
  userSlice.actions;

export default userSlice.reducer;
