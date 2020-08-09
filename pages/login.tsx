import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Link from "next/link";
import { useFormik } from "formik";
import TextInput from "../components/TextInput";
import PrimaryButton from "../components/PrimaryButton";
import styled from "@emotion/styled";
import useAuth from "../contexts/AuthContext";
import { useRouter } from "next/router";

const MainContainer = styled(Grid)({
  height: "100vh",
  width: "100%",
  backgroundColor: "#36393f",
});

const SecondaryText = styled(Typography)({
  color: "#ACB0B5",
  fontWeight: "bold",
});

const RegisterText = styled(Typography)({
  marginTop: "1em !important",
  color: "#ACB0B5",
  fontSize: "12px !important",
});

const ForgotText = styled.a({
  fontSize: "12px",
  fontWeight: "bold",
  color: "#677bc4",
  textDecoration: "none",
  marginBottom: "4em !imporant",
  "&:hover": {
    color: "#677bc4",
    textDecoration: "underline",
  },
});

const ForgotTextContainer = styled(Grid)({
  marginBottom: "1em",
});

const LoginPage = () => {
  const { login } = useAuth();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        await login(values.email, values.password);
        router.push("/proute");
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <MainContainer container justify="center" alignItems="center">
      <Grid container item xs={3}>
        <Paper style={{ width: "100%" }}>
          <form onSubmit={formik.handleSubmit}>
            <Grid style={{ padding: "1em" }}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Typography variant="h5">Welcome back!</Typography>
                <SecondaryText variant="subtitle2">
                  We're so excited to see you again!
                </SecondaryText>
                <TextInput
                  label="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <TextInput
                  label="Password"
                  name="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </Grid>
              <ForgotTextContainer>
                <Link href="/">
                  <ForgotText href="#">Forgot your password?</ForgotText>
                </Link>
              </ForgotTextContainer>
              <PrimaryButton
                color="primary"
                variant="contained"
                type="submit"
                disabled={formik.isSubmitting}
              >
                Login
              </PrimaryButton>
              <Link href="/">
                <RegisterText>
                  Need an account? <ForgotText href="#">Register</ForgotText>
                </RegisterText>
              </Link>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </MainContainer>
  );
};

export default LoginPage;
