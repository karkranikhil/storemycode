import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  appbar:{
    backgroundColor: '#1976d2 !important'
  },
  toolbar:{
    flexDirection: 'column',
    fontFamily: 'cursive'
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" color="inherit">
            Store My Code 
          </Typography>
          <div>A place for web snippets </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}