// import React from 'react'
// const header_main ={
//     background: '#1976d2',
//     padding: '1rem',
//     fontSize: '20px',
//     fontFamily: 'fantasy',
//     color:'white',
//     position: 'sticky',
//     fontWeight: '700',
//     borderBottom: '5px solid #f5f5f5'
// } 
// const logo_block ={
//     width: 'fit-content',
//     textAlign: 'center'
// } 
// const logo_text ={
//     fontSize: '2rem',
//     height: '34px'
// } 
// const logo_subtext ={
//     fontSize: '16px'
// } 


// const Header = ()=><>
// <header style={header_main}>
//     <div style={logo_block}>
//         <div style={logo_text}>Cadet Who Code</div>
//         <div style={logo_subtext}>Believe you can and you're halfway there.</div>
//     </div>
// </header>

// </>
// export default Header
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
    fontFamily: 'fantasy'
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