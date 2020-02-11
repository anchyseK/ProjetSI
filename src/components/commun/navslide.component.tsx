import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CardContent from "@material-ui/core/CardContent";

import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";
import GroupIcon from "@material-ui/icons/Group";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

export default function NavSlide() {
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

  return(
    <Drawer open={open} onClose={handleDrawerToggle}>
      {drawer}
    </Drawer>
  )
}
