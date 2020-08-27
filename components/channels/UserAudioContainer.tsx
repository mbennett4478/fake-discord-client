import React from "react";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import AudioIcon from "../icons/AudioIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
  userArea: {
    height: "52px",
    fontSize: "14px",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    backgroundColor: "#292b2f",
  },
  avatarContainer: {
    marginRight: "8px",
    position: "relative",
  },
  usernameContainer: {
    cursor: "pointer",
    userSelect: "text",
    flexGrow: 1,
    marginRight: "4px",
    position: "relative",
  },
  username: {
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    color: "#dcddde",
    fontSize: "14px",
    lineHeight: "18px",
  },
  usernameText: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    color: "white",
    lineHeight: "18px",
    fontWeight: 600,
    fontSize: "14px",
  },
  userNumber: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    color: "#b9bbbe",
    lineHeight: "13px",
    fontSize: "12px",
  },
  audioContainer: {
    flex: "0 1 auto",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    display: "flex",
  },
});

export default function UserAudioContainer() {
  const classes = useStyles();
  return (
    <div className={classes.userArea}>
      <div className={classes.avatarContainer}>
        <Avatar style={{ height: 32, width: 32 }}>TE</Avatar>
      </div>
      <div className={classes.usernameContainer}>
        <div className={classes.username}>
          <div className={classes.usernameText}>Simple Jack</div>
        </div>
        <div className={classes.userNumber}>#2451</div>
      </div>
      <div className={classes.audioContainer}>
        <AudioIcon>
          <FontAwesomeIcon icon={faMicrophoneSlash} />
        </AudioIcon>
        <AudioIcon>
          <FontAwesomeIcon icon={faMicrophoneSlash} />
        </AudioIcon>
        <AudioIcon>
          <FontAwesomeIcon icon={faMicrophoneSlash} />
        </AudioIcon>
      </div>
    </div>
  );
}
