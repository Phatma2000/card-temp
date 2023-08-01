import React from "react";
import './cardOwnerInfo.css'
function CardOwnerInfo({data}) {
 
 const {fullName,speciality,className}=data[0]?.cardOwnerInfo;
  return (
    <div 
    className={className.loremBlog}
    >
      <h6>{fullName.name} <b>{fullName.surname}</b></h6>
      <p
      className={className.speciality}
      >{speciality}</p>
    </div>
  );
}

export default CardOwnerInfo;
