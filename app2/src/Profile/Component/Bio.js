import React, {Component} from 'react'
import img from './img1.jpg'
import PropTypes from 'prop-types';
class Bio extends Component {
    render(){
        const myStyle={color:"rgb(92, 52, 151)" , fontSize:"1.2rem",margin:"7px", };
    return (
        <div className="media">
            <img src= {img}className="mr-3" alt="Biophoto"  style={{width:"100px", paddingLeft:"20px", paddingTop:"5px"}}/>
            <div className="media-body">
            <h5 className="mt-0" style={{textTransform: "uppercase",margin:"10px", color:" rgb(92, 52, 151)" , fontFamily:"'Slabo 27px', serif"}}>{this.props.FullName}</h5>
            <span style = {myStyle}>Age:</span> {this.props.Age} <br/>
            <span style= {myStyle}>Gender:</span>{this.props.Gender}<br/>
            <span style= {myStyle}>Interests:</span>{this.props.Interests}<br/>
            <span style= {myStyle}>Bio:</span>{this.props.FullName} is {this.props.Age} years old, I like {this.props.Interests}
            </div>
        </div>
    )
}}

Bio.propTypes = {
  
    firstName: PropTypes.array,
  }

export default Bio;