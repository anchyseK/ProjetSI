import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./components/commun/navbar.component";
import Footer from "./components/commun/footer.component";
import Formations from "./components/formations.component";
import Connexion from "./components/connection.component";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const useStyles = makeStyles(theme => ({
  site: {
    display: "flex",
    flexDirection: "column",
    minHeight: 'calc(100vh - 92px)',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.site}>
        <Router>
          <div>
            <Navbar />
          </div>
          <div>
            <Route path="/connexion" component={Connexion} />
            <Route path="/formations" component={Formations} />
          </div>
        </Router>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
