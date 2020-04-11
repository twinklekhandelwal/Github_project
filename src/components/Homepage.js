import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Github_logo from './download.png';
const useStyles = makeStyles((theme) => ({
  root: {
   
       margin: theme.spacing(1),
      width: '70ch',
    
  },
  Submitbtn: {
    
      margin: theme.spacing(1),
      padding: theme.spacing(2),
     
      width: '25ch',
    
  },
  maindiv:{
    position: 'absolute', 
    left: '30%', 
    top: '30%',
  },
  logo:{
    // position: 'absolute', 
      paddingLeft:'25%'
     
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
      <div className={classes.maindiv}>
          <div className={classes.logo}>
      <img src={Github_logo} alt="logo"/>
      </div>
      <br/>
    <form  noValidate autoComplete="off" >
      
      <TextField id="outlined-basic" className={classes.root} label="Username" variant="outlined" />
      <Button variant="contained" color="primary" className={classes.Submitbtn} >
        Submit
      </Button>
    </form>
    </div>
  );
}
