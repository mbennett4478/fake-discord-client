import React, { useState, ReactNode } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type StyleProps = {
  color?: string;
  hovered?: boolean;
};

const useStyles = makeStyles({
  listItem: {
    padding: "5px",
    borderRadius: "2px",
    "&:hover": {
      backgroundColor: "#5c6fb1",
    },
    margin: "3px 0",
  },
  listItemTextRoot: {
    margin: "0px",
  },
  listItemTextPrimary: {
    color: ({ hovered, color }: StyleProps) =>
      hovered ? "white" : color || "#b9bbbe",
    padding: "3px 4px",
    fontSize: "12px",
    fontWeight: 600,
  },
  icon: {
    color: ({ hovered, color }: StyleProps) =>
      hovered ? "white" : color || "#b9bbbe",
    marginRight: "8px",
    width: "1em !important",
  },
});

type GenericListItemProps = {
  color?: string;
  text?: string;
  icon?: IconDefinition;
  SecondaryAction?: any;
  [x: string]: any;
};

export default function GenericListItem({
  color,
  text,
  icon,
  SecondaryAction,
  ...rest
}: GenericListItemProps) {
  const [hovered, setHovered] = useState(false);
  const classes = useStyles({ color, hovered });

  const onHover = () => setHovered((hovered) => !hovered);

  return (
    <ListItem
      classes={{ root: classes.listItem }}
      button
      dense
      onMouseEnter={onHover}
      onMouseLeave={onHover}
      {...rest}
    >
      <ListItemText
        classes={{
          root: classes.listItemTextRoot,
          primary: classes.listItemTextPrimary,
        }}
        primary={text}
      />
      {icon && (
        <FontAwesomeIcon className={classes.icon} color={color} icon={icon} />
      )}
      {SecondaryAction && <SecondaryAction />}
    </ListItem>
  );
}
