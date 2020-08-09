import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";

export default function ChannelList() {
  return (
    <Drawer variant="permanent">
      <Typography>Paco</Typography>
    </Drawer>
    // <List>
    //   <ListItem button>
    //     <ListItemText primary="Channel name" />
    //   </ListItem>
    // </List>
  );
}
