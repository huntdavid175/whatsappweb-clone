import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

export default function BasicMenu({
  anchorEl,
  open,
  handleClose,
}: {
  anchorEl: any;
  open: boolean;
  handleClick: any;
  handleClose: any;
}) {
  const signoutHandler = async () => {
    try {
      await signOut(auth);
      console.log("Signed out");
      handleClose();
    } catch (error) {}
  };
  return (
    <React.Fragment>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        // PaperProps={{
        //   elevation: 0,
        //   sx: {
        //     overflow: "visible",
        //     filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
        //     mt: 1.5,
        //     "& .MuiAvatar-root": {
        //       width: 32,
        //       height: 32,
        //       ml: -0.5,
        //       mr: 1,
        //     },
        //     "&:before": {
        //       content: '""',
        //       display: "block",
        //       position: "absolute",
        //       top: 0,
        //       right: 14,
        //       width: 10,
        //       height: 10,
        //       bgcolor: "background.paper",
        //       transform: "translateY(-50%) rotate(45deg)",
        //       zIndex: 0,
        //     },
        //   },
        // }}
        PaperProps={{
          style: {
            width: 200,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <span className="text-sm text-iconsdeep">New group</span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span className="text-sm text-iconsdeep">New community</span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span className="text-sm text-iconsdeep">Starred messages</span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span className="text-sm text-iconsdeep">Select chats</span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span className="text-sm text-iconsdeep">Settings</span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span onClick={signoutHandler} className="text-sm text-iconsdeep">
            Logout
          </span>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
