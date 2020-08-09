import React, { useState, ReactNode } from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import styled from "@emotion/styled";

type StyledAvatarProps = {
  selected?: boolean;
  color?: string;
};

type PillProps = {
  selected?: boolean;
  hovered?: boolean;
  hasNotification?: boolean;
};

type ServerAvatarProps = {
  selected?: boolean;
  selectedColor?: string;
  hasNotification?: boolean;
  imageUrl?: string;
  children?: ReactNode;
};

const AvatarContainer = styled(Grid)({
  margin: "0 0.75em 0 0.75em",
});

const StyledAvatar = styled(Avatar)(
  ({ selected, color }: StyledAvatarProps) => ({
    height: "48px !important",
    width: "48px !important",
    fontSize: "14px !important",
    fontWeight: "bold",
    color: selected ? "white !important" : `${color || "#dcddde"} !important`,
    marginBottom: "0.5em",
    backgroundColor: selected
      ? `${color || "#7289da"} !important`
      : "#36393f !important",
    ...(selected && { borderRadius: "33% !important" }),
    "&:hover": {
      backgroundColor: `${color || "#7289da"} !important`,
      borderRadius: "33%",
      color: "white !important",
      cursor: "pointer",
    },
  })
);

const PillContainer = styled.div({
  position: "absolute",
  left: 0,
  width: "8px",
  height: "48px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  WebkitBoxAlign: "center",
  WebkitBoxPack: "start",
  justifyContent: "flex-start",
  contain: "layout size",
});

const Pill = styled.span(
  ({ selected, hovered, hasNotification }: PillProps) => ({
    height: selected
      ? "40px"
      : hovered
      ? "20px"
      : hasNotification
      ? "8px"
      : "0px",
    transform: "none",
    opacity: 1,
    position: "absolute",
    display: "block",
    width: "4px",
    borderRadius: "0 4px 4px 0",
    backgroundColor: "white",
  })
);

const StyledPilled = ({ selected, hovered, hasNotification }) => (
  <PillContainer>
    <Pill
      selected={selected}
      hovered={hovered}
      hasNotification={hasNotification}
    />
  </PillContainer>
);

export default function ServerAvatar({
  selected,
  selectedColor,
  hasNotification,
  imageUrl,
  children,
}: ServerAvatarProps) {
  const [hovered, setHovered] = useState(false);
  const onHover = () => {
    setHovered(!hovered);
  };

  return (
    <AvatarContainer>
      <StyledPilled
        selected={selected}
        hovered={hovered}
        hasNotification={hasNotification}
      />
      {imageUrl ? (
        <StyledAvatar
          selected={selected}
          color={selectedColor}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          src={imageUrl}
        />
      ) : (
        <StyledAvatar
          selected={selected}
          color={selectedColor}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
        >
          {children}
        </StyledAvatar>
      )}
    </AvatarContainer>
  );
}

// export default CustomAvatar;
