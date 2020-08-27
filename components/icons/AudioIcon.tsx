import React from "react";
import { makeStyles, IconButton } from "@material-ui/core";

const useStyles = makeStyles({
  audioIcon: {
    color: "#b9bbbe",
    borderRadius: "4px",
    height: 32,
    width: 32,
    "&:hover": {
      color: "#dcddde",
    },
  },
});

export default function AudioIcon({ children }) {
  const classes = useStyles();

  return (
    <IconButton className={classes.audioIcon} size="small">
      {children}
    </IconButton>
  );
}
