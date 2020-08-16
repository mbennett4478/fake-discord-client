import React from "react";
import { Tooltip, makeStyles } from "@material-ui/core";

const useBootstrapStyles = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontSize: "12px",
    fontWeight: 550,
    padding: "7px 10px 7px 10px",
  },
}));

export default function GenericTooltip(props) {
  const classes = useBootstrapStyles();
  return <Tooltip arrow classes={classes} {...props} />;
}
