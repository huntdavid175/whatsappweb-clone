import React from "react";
import AppNavHeader from "./AppNavHeader";
import Avatar from "@mui/material/Avatar/Avatar";
import Stack from "@mui/material/Stack/Stack";
import IconButton from "@mui/material/IconButton/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ChatSectionHeader = ({
  displayName,
  photoUrl,
}: {
  displayName: string | undefined;
  photoUrl: string | undefined;
}) => {
  return (
    <>
      <AppNavHeader leftBorder>
        <div className="flex justify-center items-center space-x-2">
          <Avatar alt="Owner Avatar" src={photoUrl} />
          <span className="text-base font-normal text-gray-800">
            {displayName}
          </span>
        </div>
        <div className="text-iconsdeep ">
          <Stack direction="row" spacing={1}>
            <IconButton>
              <SearchIcon />
            </IconButton>

            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Stack>
        </div>
      </AppNavHeader>
    </>
  );
};

export default ChatSectionHeader;
