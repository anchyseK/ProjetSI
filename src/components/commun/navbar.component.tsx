import React from 'react';
import { createStyles, makeStyles, Theme, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
    }
  }),
);

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Projet SI
          </Typography>
          <nav>
            <Link variant="button" color="inherit" href="#" className={classes.link}>
              Accueil
            </Link>
            <Link variant="button" color="inherit" href="#" className={classes.link}>
              Formations
            </Link>
            <Link variant="button" color="inherit" href="#" className={classes.link}>
              Nous rejoindre
            </Link>
            <Button variant="outlined" color="inherit" href="#" className={classes.linkButton}>Se connecter</Button>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}