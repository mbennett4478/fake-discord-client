import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import AddIcon from "@material-ui/icons/Add";
import ExploreIcon from "@material-ui/icons/Explore";
import GetAppIcon from "@material-ui/icons/GetApp";
import CustomAvatar from "../components/ServerAvatar";
import ServerList from "../components/ServerList";
import ChannelList from "../components/ChannelList";
import styled from "@emotion/styled";
import { Typography } from "@material-ui/core";

const MainContainer = styled.div({
  display: "flex",
  overflow: "hidden",
  position: "absolute",
  left: "72px",
  right: 0,
  top: 0,
  bottom: 0,
});

const Content = styled.div({
  display: "flex",
  alignItems: "stretch",
  justifyContent: "flex-start",
  minWidth: 0,
  minHeight: 0,
  flex: "1 1 auto",
});

const TestRoute = () => {
  return (
    <Grid style={{ fontSize: "1rem" }}>
      <ServerList />
      <MainContainer>
        <Content>
          <ChannelList />
        </Content>
      </MainContainer>
    </Grid>
  );
};

export default ProtectedRoute(TestRoute);
