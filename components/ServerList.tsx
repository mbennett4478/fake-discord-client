import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import styled from "@emotion/styled";
import ServerAvatar from "./ServerAvatar";
import AddIcon from "@material-ui/icons/Add";
import ExploreIcon from "@material-ui/icons/Explore";
// import GetAppIcon from "@material-ui/icons/GetApp";

const OrgnizationsContainer = styled(Grid)({
  margin: "0.75em 0 0.75em 0",
});

const StyledDivider = styled(Divider)({
  margin: "0 1.5em 0.5em 1.5em !important",
  backgroundColor: "#36393f",
});

const StyledDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    backgroundColor: "#202225 !important",
    borderRight: "none",
    overflow: "hidden scroll",
    userSelect: "none",
    scrollbarWidth: "none",
  },
});

export default function ServerList() {
  return (
    <StyledDrawer variant="permanent">
      <OrgnizationsContainer>
        <ServerAvatar>MAIN</ServerAvatar>
        <StyledDivider />
        <ServerAvatar selected>MB</ServerAvatar>
        <ServerAvatar>MHB</ServerAvatar>
        <ServerAvatar>ST</ServerAvatar>
        <ServerAvatar>MB</ServerAvatar>
        <ServerAvatar selectedColor="#43b581">
          <AddIcon />
        </ServerAvatar>
        <ServerAvatar selectedColor="#43b581">
          <ExploreIcon />
        </ServerAvatar>
      </OrgnizationsContainer>
    </StyledDrawer>
  );
}
