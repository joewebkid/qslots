import React, { FC, memo } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import { snackbarSelector } from "@core/store";
import { CookieInfo } from "@core/components";
import { Theme } from "@core/theme";
import { SnackbarProvider } from "notistack";

import { SnackBar } from "@boot/components";
import { Routing } from "./core/routing/Routing";

export const App: FC = memo(() => {
  const snackBar = useSelector(snackbarSelector);

  return (
    <ThemeProvider theme={Theme}>
      <StylesProvider injectFirst>
        <SnackBar open={snackBar.isVisible} {...snackBar} />
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <Router>
            <Routing />
          </Router>
          <CookieInfo />
        </SnackbarProvider>
      </StylesProvider>
    </ThemeProvider>
  );
});
