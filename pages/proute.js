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

const MainContainer = styled(Grid)({
  position: "absolute",
  left: "72px !important",
  flex: "0 0 auto",
});

const TestRoute = () => {
  return (
    <Grid>
      <ServerList />
      <MainContainer container direction="column">
        <ChannelList />
      </MainContainer>
    </Grid>
  );
};

export default ProtectedRoute(TestRoute);
