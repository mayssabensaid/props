import React from 'react';
import PropTypes from 'prop-types';
const fullName = (props) => {
    
    console.log(props);
    
    const myStyle={
        textAlign:"center",
        color:"rgb(9, 30, 90)",
        textTransform: "uppercase",
        fontFamily: 'Roboto Condensed',margin:"auto",
    }
    return (
        <div style ={{color:"black",textAlign:"center" ,fontFamily:"Roboto Condensed"}}>
    <h1 style ={myStyle}>  {props.firstName} {props.lastName}</h1>

    {/* the nessecity of   {props.children}  for the inner of open and closing tag*/}
    {props.children}
        </div>

    );
};
fullName.propTypes = {
  
    firstName: PropTypes.string,
  }
export default fullName;