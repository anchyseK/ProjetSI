import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Omit } from '@material-ui/types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    title: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
      '&:hover': {
        textDecoration: 'none',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    linkButton: {
      marginLeft: theme.spacing(0),
      [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(5),
      },
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  }),
);

export default function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  interface ListItemLinkProps {
    primary: string;
    to: string;
  }

  function ListItemLink(props: ListItemLinkProps) {
    const { primary, to } = props;
  
    const renderLink = React.useMemo(
      () =>
        React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
          <RouterLink to={to} ref={ref} {...itemProps} />
        )),
      [to],
    );

    return (
      <li>
        <ListItem button component={renderLink}>
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }

  function handleDrawerToggle() {
    setOpen(!open);
  }

  const drawer = (
    <div>
      <List
        className={classes.list}
        onClick={handleDrawerToggle}
      >
        <ListItemLink to="/" primary="Accueil" />
        <ListItemLink to="/fomations" primary="Formations" />
        <ListItemLink to="/rejoindre" primary="Nous rejoindre" />
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Projet SI
          </Typography>
          <nav>
            <Drawer open={open} onClose={handleDrawerToggle}>
              {drawer}
            </Drawer>
            <Link variant="button" color="inherit" component={RouterLink} to="/" className={classes.link}>
              Accueil
            </Link>
            <Link variant="button" color="inherit" component={RouterLink} to="/formations" className={classes.link}>
              Formations
            </Link>
            <Link variant="button" color="inherit" component={RouterLink} to="/rejoindre" className={classes.link}>
              Nous rejoindre
            </Link>
            <Button variant="outlined" color="inherit" component={RouterLink} to="/connexion" className={classes.linkButton}>Se connecter</Button>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}