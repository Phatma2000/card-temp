import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './contactInfo.css'

function ContactInfo({text,icon,color}) {
    
 
 
  return (
    <div className="icons">
      <div className="iconbox" >
        <FontAwesomeIcon 
        icon={icon} 
        color={color}
        />
        <span >
        {text} 
        </span> 
      </div>
     
    </div>
  );
}

export default ContactInfo;
