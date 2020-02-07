import React from "react";
import { CssBaseline, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./molecules/Navbar";
import SortGamePage from "./pages/SortGamePage";
import GuessGamePage from "./pages/GuessGamePage";
import AboutUsPage from "./pages/AboutUsPage";

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
          <Route path="/sort" component={SortGamePage} />
          <Route path="/guess" component={GuessGamePage} />
          <Route path="/aboutus" component={AboutUsPage} />
        </Switch>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
