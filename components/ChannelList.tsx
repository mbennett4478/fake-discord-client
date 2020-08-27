import React, { useState } from "react";
import {
  faHashtag,
  faUserPlus,
  faCog,
  faGem,
  faChevronDown,
  faVolumeUp,
  faPlusCircle,
  faFolderPlus,
  faBell,
  faPencilAlt,
  faShieldVirus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";
import {
  Checkbox,
  Popper,
  Popover,
  Paper,
  List,
  ListItem,
  Divider,
  makeStyles,
  ClickAwayListener,
  IconButton,
  Avatar,
} from "@material-ui/core";
import GenericTooltip from "./GenericTooltip";
import GenericListItem from "./List";
import AudioIcon from "./icons/AudioIcon";
import UserAudioContainer from "./channels/UserAudioContainer";

const Sidebar = styled.div({
  flexDirection: "column",
  minHeight: 0,
  width: "240px",
  flex: "0 0 auto",
  background: "#2f3136",
  display: "flex",
  overflow: "hidden",
});

const Container = styled.nav({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "flex-start",
  flex: "1 1 auto",
  minHeight: 0,
  position: "relative",
  backgroundColor: "#2f3136",
});

const HeaderContainer = styled.div({
  cursor: "pointer",
  position: "relative",
});

const Header = styled.header({
  position: "relative",
  fontWeight: 500,
  padding: "0 16px",
  height: "48px",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  zIndex: 3,
  transition: "background-color .1s linear",
  "&&:hover": {
    backgroundColor: "rgba(79,84,92,0.16) !important",
  },
  color: "white",
  boxShadow:
    "0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05)",
});

const HeaderText = styled.h1({
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "20px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  flex: 1,
});

const HeaderIcon = styled(FontAwesomeIcon)({
  position: "relative",
  top: "3px",
  opacity: 0.8,
  transition:
    "transform .2s ease-out,stroke-dasharray .2s ease-out,-webkit-transform .2s ease-out",
  marginLeft: "4px",
});

const Spacer = styled.div({
  height: "16px",
});

const ChannelContainer = styled.div({
  overflow: "hidden scroll",
  paddingRight: "0px",
  scrollbarColor: "transparent transparent",
  scrollbarWidth: "thin",
  position: "relative",
  boxSizing: "border-box",
  minHeight: 0,
  flex: "1 1 auto",
  "&&:hover": {
    scrollbarColor: "#202225 transparent",
  },
});

const GenericChannelContainer = styled.div({
  position: "relative",
  transition: "opacity .2s ease-in-out",
});

const GenericChannel = styled.div({
  cursor: "pointer",
  height: "32px",
  paddingTop: "1px",
  paddingBottom: "1px",
  overflow: "visible",
  position: "relative",
});

const Content = styled.div(({ selected }: ChannelTextProps) => ({
  backgroundColor: selected ? "rgba(79,84,92,0.32)" : "transparent",
  position: "relative",
  boxSizing: "border-box",
  height: "32px",
  padding: "0 8px",
  marginLeft: "8px",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  "&&:hover": {
    backgroundColor: selected ? "rgba(79,84,92,0.32)" : "rgba(79,84,92,0.16)",
  },
}));

const PoundSymbol = styled(FontAwesomeIcon)({
  color: "#72767d",
  display: "block",
  width: "20px",
  height: "20px",
  flex: "0 0 auto",
  marginRight: "6px",
});

type ChannelTextProps = {
  selected?: boolean;
  hovered?: boolean;
};

const ChannelText = styled.div(({ hovered, selected }: ChannelTextProps) => ({
  color: selected || hovered ? "white" : "#72767d",
  fontSize: "14px",
  lineHeight: "20px",
  fontWeight: 600,
  whiteSpace: "nowrap",
  flex: "1 1 auto",
  textOverflow: "ellipsis",
  overflow: "hidden",
}));

type ActionIconContainerProps = {
  selected?: boolean;
};

const ActionIconContainer = styled.div(
  ({ selected }: ActionIconContainerProps) => ({
    display: selected ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 auto",
    "&&:hover": {
      display: "flex",
    },
  })
);

const AddUserIconContainer = styled.div({
  display: "block",
  position: "relative",
  marginLeft: "4px",
  lineHeight: 0,
});

const AddUserIcon = styled(FontAwesomeIcon)({
  color: "#b9bbbe",
  width: "14px !important",
  cursor: "pointer",
  display: "block",
  "&&:hover": {
    color: "#dcddde",
  },
});

type ChannelProps = {
  voice?: boolean;
  selected?: boolean;
  name: string;
};

function Channel({ voice, selected, name }: ChannelProps) {
  const [hovered, setHovered] = useState(false);
  const onHover = () => setHovered((hovered) => !hovered);
  return (
    <GenericChannelContainer>
      <GenericChannel>
        <Content
          selected={selected}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
        >
          <PoundSymbol icon={voice ? faVolumeUp : faHashtag} />
          <ChannelText selected={selected} hovered={hovered}>
            {name}
          </ChannelText>
          <ActionIconContainer selected={(selected && !voice) || hovered}>
            <GenericTooltip title="Create Invite" placement="top">
              <AddUserIconContainer>
                <div>
                  <div>
                    <AddUserIcon icon={faUserPlus} width="16" height="16" />
                  </div>
                </div>
              </AddUserIconContainer>
            </GenericTooltip>
            <GenericTooltip title="Edit Channel" placement="top">
              <AddUserIconContainer>
                <div>
                  <div>
                    <AddUserIcon icon={faCog} />
                  </div>
                </div>
              </AddUserIconContainer>
            </GenericTooltip>
          </ActionIconContainer>
        </Content>
      </GenericChannel>
    </GenericChannelContainer>
  );
}

const useStyles = makeStyles({
  root: {
    padding: "0px 4px",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.MuiCheckbox-colorSecondary.Mui-checked:hover": {
      backgroundColor: "transparent",
    },
    "&.MuiCheckbox-colorSecondary.Mui-checked": {
      color: "white",
    },
  },
});

export default function ChannelList() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleHeaderClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((open) => !open);
  };

  const onClickAway = () => {
    setAnchorEl(null);
    setOpen((open) => !open);
  };

  return (
    <Sidebar>
      <Container>
        <Popper open={open} anchorEl={anchorEl}>
          <ClickAwayListener onClickAway={onClickAway}>
            <Paper
              style={{
                width: "220px",
                opacity: 1,
                background: "#18191c",
              }}
            >
              <List style={{ padding: "8px" }}>
                <GenericListItem text="Server Boost" icon={faGem} />
                <Divider style={{ margin: "0px 4px" }} />
                <GenericListItem
                  color="#677bc4"
                  text="Send Invite"
                  icon={faUserPlus}
                />
                <GenericListItem text="Server Settings" icon={faCog} />
                <GenericListItem text="Create Channel" icon={faPlusCircle} />
                <GenericListItem text="Create Category" icon={faFolderPlus} />
                <Divider style={{ margin: "0px 4px" }} />
                <GenericListItem text="Notification Settings" icon={faBell} />
                <GenericListItem text="Privacy Settings" icon={faShieldVirus} />
                <Divider style={{ margin: "0px 4px" }} />
                <GenericListItem text="Change Nickname" icon={faPencilAlt} />
                <GenericListItem
                  text="Hide Muted Channels"
                  SecondaryAction={() => (
                    <Checkbox className={classes.root} size="small" />
                  )}
                />
              </List>
            </Paper>
          </ClickAwayListener>
        </Popper>
        <HeaderContainer onClick={handleHeaderClick}>
          <Header>
            <HeaderText>Server name</HeaderText>
            <HeaderIcon icon={faChevronDown} />
          </Header>
        </HeaderContainer>
        <ChannelContainer>
          <div>
            <Spacer />
            <Channel selected name="general" />
            <Channel name="need-help" />
            <Channel name="skewl-projects" />
            <Channel name="smarticle" />
            <Channel name="games" />
            <Channel name="camping-and-trip-plans" />
            <Channel voice name="Dev Work" />
            <Channel voice name="General" />
            <Channel voice name="Need Help" />
            <Channel voice name="AFK" />
          </div>
        </ChannelContainer>
        <UserAudioContainer />
      </Container>
    </Sidebar>
  );
}
