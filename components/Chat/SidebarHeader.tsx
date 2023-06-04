"use client";
import React, { useEffect, useState } from "react";
import ChatNavHeader from "./AppNavHeader";
import { Avatar, IconButton } from "@mui/material";
import { Stack } from "@mui/material";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatSearchSection from "./ChatSearchSection";
import BasicMenu from "../Menu/BasicMenu";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { auth, firebaseApp } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { RootState } from "@/app/GlobalRedux/store";
import { useSelector } from "react-redux";

const SidebarHeader = () => {
  // const [user, setUser] = useState<User | null>(null);
  // const [userFetched, setUserFetched] = useState<boolean>(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // useEffect(() => {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       console.log(user);
  //       setUser(user);
  //       const uid = user.uid;
  //       // ...
  //     } else {
  //       // User is signed out
  //       // ...
  //     }
  //   });
  // }, []);

  const user = useSelector((state: RootState) => state.user.user);
  console.log(user);

  // const [user, loading, error] = useAuthState(auth);
  // console.log(user?.photoURL);

  return (
    <>
      <ChatNavHeader>
        <div>
          <Avatar
            alt="Owner Avatar"
            src={user?.photoUrl ? user?.photoUrl : undefined}
          />
        </div>
        <div className="text-iconsdeep ">
          <Stack direction="row" spacing={1}>
            <IconButton>
              {/* <h1>{user?.displayName}</h1> */}
              <PeopleRoundedIcon />
            </IconButton>
            <IconButton>
              <DataSaverOffIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          </Stack>
        </div>
      </ChatNavHeader>
      <ChatSearchSection />
      <BasicMenu
        anchorEl={anchorEl}
        open={open}
        handleClick={handleClick}
        handleClose={handleClose}
      />
    </>
  );
};

export default SidebarHeader;

{
  /* <div>
          <Avatar alt="Owner Avatar" />
        </div>
        <div className="text-iconsdeep ">
          <Stack direction="row" spacing={1}>
            <IconButton>
              <PeopleRoundedIcon />
            </IconButton>
            <IconButton>
              <DataSaverOffIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Stack>
        </div> */
}
