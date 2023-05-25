import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { ListItemButton } from "@mui/material";
import { IoIosDoneAll } from "react-icons/io";

const ChatMenuItem = () => {
  return (
    <>
      {/* <ListItemButton> */}
      <ListItem alignItems="flex-start" button>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        {/* <ListItemText
            sx={{
              width: "10px",
            }}
            primary="Ali Connors"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{
                    display: "inline",
                    overflow: "hidden",
                  }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                  noWrap={true}
                >
                  I'll be in your neighborhood doing errands this and life will
                  treat me good and for God so loved the world that he
                </Typography>

               
              </React.Fragment>
            }
          /> */}
        <div className="w-full m-auto h-full ">
          <div className="flex w-full justify-between">
            <p>Ali Pio</p>
            <span className="text-xs">4/14/2023</span>
          </div>
          <div className="text-sm w-[290px] min-w-[300px] ">
            <Typography noWrap sx={{ fontSize: "0.875rem", color: "#54656F" }}>
              <span className="inline-block text-blue-400 mr-1">
                <DoneAllIcon sx={{ fontSize: "1.2rem" }} />
                {/* <IoIosDoneAll /> */}
              </span>
              Long message can go here i promise you and i will make it worth
              your while
            </Typography>
          </div>
        </div>
      </ListItem>
      {/* </ListItemButton> */}
      <Divider variant="inset" component="li" />
    </>
  );
};

export default ChatMenuItem;
