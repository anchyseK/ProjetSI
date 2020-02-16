import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SliderMenu from "./sliderMenu.component";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1
    },
    link: {
      margin: theme.spacing(1, 1.5),
      "&:hover": {
        textDecoration: "none"
      },
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    },
    linkButton: {
      marginLeft: theme.spacing(0),
      [theme.breakpoints.up("md")]: {
        marginLeft: theme.spacing(5)
      }
    }
  })
);

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <SliderMenu />
          <Typography variant="h6" className={classes.title}>
            Projet SI
          </Typography>
          <nav>
            <Link
              variant="button"
              color="inherit"
              component={RouterLink}
              to="/"
              className={classes.link}
            >
              Accueil
            </Link>
            <Link
              variant="button"
              color="inherit"
              component={RouterLink}
              to="/formations"
              className={classes.link}
            >
              Formations
            </Link>
            <Link
              variant="button"
              color="inherit"
              component={RouterLink}
              to="/rejoindre"
              className={classes.link}
            >
              Nous rejoindre
            </Link>
            <Button
              variant="outlined"
              color="inherit"
              component={RouterLink}
              to="/connexion"
              className={classes.linkButton}
            >
              Se connecter
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}
