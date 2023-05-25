import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

export default function BasicMenu({
  anchorEl,
  open,
  handleClick,
  handleClose,
}: {
  anchorEl: any;
  open: boolean;
  handleClick: any;
  handleClose: any;
}) {
  //   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  //   const open = Boolean(anchorEl);
  //   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //     setAnchorEl(event.currentTarget);
  //   };
  //   const handleClose = () => {
  //     setAnchorEl(null);
  //   };
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
        <MenuItem onClick={handleClose}>New group</MenuItem>
        <MenuItem onClick={handleClose}>New community</MenuItem>
        <MenuItem onClick={handleClose}>Starred messages</MenuItem>
        <MenuItem onClick={handleClose}>Select chats</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
