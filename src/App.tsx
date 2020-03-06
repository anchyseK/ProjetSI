import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./components/commun/navbar.component";
import Footer from "./components/commun/footer.component";
import Formations from "./components/formations.component";
import Connexion from "./components/connection.component";
import Treeview from "./components/treeview.component";

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
    <div>
      <div className={classes.site}>
        <Router>
          <div>
            <Navbar />
          </div>
          <div>
            <Route path="/connexion" component={Connexion} />
            <Route path="/formations" component={Formations} />
            <Route path="/cours" component={Treeview} />
          </div>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
