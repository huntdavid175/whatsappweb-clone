import React, { useState } from "react";
import { Button, Drawer } from "@mui/material";

const drawerWidth = 300;

const ChatDrawer = ({ children }: { children: React.ReactNode }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      {/* Your specific div where the Drawer will be positioned */}
      {children}
      <div>
        <Button onClick={toggleDrawer}>Open Drawer</Button>
      </div>
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: drawerWidth,
            position: "relative",
          },
        }}
        anchor="left"
        variant="persistent"
        sx={{
          "& .MuiDrawer-paper": {
            overflow: "auto",
          },
        }}
      >
        {/* Content inside the drawer */}
      </Drawer>
      {/* Rest of the app content */}
    </div>
  );
};

export default ChatDrawer;
