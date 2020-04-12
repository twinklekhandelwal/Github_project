import React from 'react';
const Button = (props) => {  
    return (
      <button
      
        onClick={()=>props.toggle()}
        >
        <span class="fa fa-star"></span>
        {props.name}
      </button>
    )
  }
  export default Button