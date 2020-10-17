import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { Menu as MenuIcon } from "@material-ui/icons";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { Router } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import PropTypes from "prop-types";
import React from "react";
import theme from "../theme";

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 100,
});

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
Router.events.on("routeChangeError", () => {
  NProgress.done();
});

const prefix = "/nextjs-ecommerce";

export default function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <link
          rel="shortcut icon"
          href={prefix + "/favicon.ico"}
          type="image/x-icon"
        />
        <title>Nextjs Demo</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AppBar position="fixed" style={{ background: "#835858", zIndex: 999 }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Link href="/">
              <Typography style={{ cursor: "pointer" }} variant="h6">
                Microphone Shop
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <Box marginTop={10}>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
