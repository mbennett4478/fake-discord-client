import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography, Container, makeStyles } from "@material-ui/core";
import styled from "@emotion/styled";
import DefaultButton from "./DefaultButton";

const NavContainer = styled.div({
  flexGrow: 1,
});

const Title = styled(Typography)({
  flexGrow: 1,
});

const Nav = () => {
  const classes = useStyles();

  return (
    <NavContainer>
      <AppBar>
        <Container>
          <Toolbar>
            <Title variant="h6">Fake Discord</Title>
            <DefaultButton>Login</DefaultButton>
          </Toolbar>
        </Container>
      </AppBar>
    </NavContainer>
  );
};

export default Nav;
