import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { AuthProvider } from "../contexts/AuthContext";
import { useEffect } from "react";
import Head from "next/head";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#677bc4",
    },
  },
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Fake Discord</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
