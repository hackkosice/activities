import React from "react";
import { CssBaseline, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./molecules/Navbar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5e2137"
    },
    secondary: {
      main: "#f90"
    }
  }
});

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
