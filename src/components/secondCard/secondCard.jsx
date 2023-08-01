import React from "react";
import "./secondCard.css";
import background2 from "../../photos/CardBackSide.jpg";
import CardOwnerInfo from "../cardOwnerInfo/cardOwnerInfo";
import ContactInfo from "../contactInfo/contactInfo";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function SecondCard({ data, url }) {
  
  return (
    <div
      className="mediaBackSide"
      style={{
        backgroundImage: `url ${background2}`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        backgroundImage: `url(${url})`,
      }}
    >
      <div
        className="icons"
        // style={{
        //   display: "flex",
        //   justifyContent: "flex-end",
        //   flexDirection: "column",
        //   textAlign: "left",
        // }}
      >
       {/* <div className="icons">
      <div className="iconbox" >
        <FontAwesomeIcon 
        icon={icon} 
        color={color}
        />
        <span >
        {text} 
        </span> 
      </div>
     
    </div> */}
        
          return (
            <>
              <ContactInfo
                key={i}
                icon={v.icon}
                text={v.text}
                color={v.color}
              />
            </>
          );
      
      </div>

      <CardOwnerInfo
        data={data}
      />
    </div>
  );
}
export default SecondCard;
