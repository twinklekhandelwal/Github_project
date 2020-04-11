import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
   
       margin: theme.spacing(1),
      width: '80ch',
    
  },
  Submitbtn: {
    
      margin: theme.spacing(1),
      padding: theme.spacing(2),
     
      width: '25ch',
    
  },
  form:{
    position: 'absolute', 
    left: '30%', 
    top: '50%',
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
      
    <form  noValidate autoComplete="off" className={classes.form}>
      
      <TextField id="outlined-basic" className={classes.root} label="Outlined" variant="outlined" />
      <Button variant="contained" color="primary" className={classes.Submitbtn} >
        Primary
      </Button>
    </form>
  );
}
