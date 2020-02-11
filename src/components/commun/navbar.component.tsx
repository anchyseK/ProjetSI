import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CardContent from "@material-ui/core/CardContent";

import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";
import GroupIcon from "@material-ui/icons/Group";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
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
    },
    list: {
      width: 250
    },
    fullList: {
      width: "auto"
    },
    test: {
      paddingBottom: theme.spacing(1)
    }
  })
);

export default function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
    return <ListItem button component="a" {...props} />;
  }

  function handleDrawerToggle() {
    setOpen(!open);
  }

  const drawer = (
    <div>
      <CardContent className={classes.test}>
        <Typography component="h5" variant="h5">
          Projet SI
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Application web de formations
        </Typography>
      </CardContent>
      <Divider />
      <List
        className={classes.list}
        onClick={handleDrawerToggle}
        aria-labelledby="list-subheader-navigation"
        subheader={
          <ListSubheader component="div" id="list-subheader-navigation">
            Navigation
          </ListSubheader>
        }
      >
        <ListItemLink href="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Accueil" />
        </ListItemLink>
        <ListItemLink href="/fomations">
          <ListItemIcon>
            <AppsIcon />
          </ListItemIcon>
          <ListItemText primary="Formations" />
        </ListItemLink>
        <ListItemLink href="/rejoindre">
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Nous rejoindre" />
        </ListItemLink>
      </List>
      <Divider />
      <List
        className={classes.list}
        onClick={handleDrawerToggle}
        aria-labelledby="list-subheader-connection"
        subheader={
          <ListSubheader component="div" id="list-subheader-connection">
            Connexion
          </ListSubheader>
        }
      >
        <ListItemLink href="/connexion">
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Se connecter" />
        </ListItemLink>
        <ListItemLink href="/inscription">
          <ListItemIcon>
            <PersonAddOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="S'inscrire" />
        </ListItemLink>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Projet SI
          </Typography>
          <nav>
            <Drawer open={open} onClose={handleDrawerToggle}>
              {drawer}
            </Drawer>
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
