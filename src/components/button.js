import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  starbtn: {
    marginLeft: "64px", 
    width: "66%", 
    height: "30px"
  },
}))
const Button = (props) => {
  const classes = useStyles();
  return (
    <button
      className={classes.starbtn}
      onClick={() => props.toggle()}
    >
      <span class="fa fa-star"></span>
      {props.name}
    </button>
  )
}
export default Button