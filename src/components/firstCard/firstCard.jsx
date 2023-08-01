import React from "react";
import Logo from "../logo/Logo";
import FirstCardContent from "../firstCardContent/firstCardContent";
import CompanyInfo from "../companyInfo/companyInfo"
import background from '../../photos/FrontSidecard.jpg'
import "./firstCard.css";


function FirstCard({data}) {
  // firstSpan,title,SLOGANHERE,logoSpan,
  return (
    <div className="media">

      <div className="flexBox" 
      style={{
      backgroundImage:`url ${background}`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center' ,
      marginTop:'10px'
 
    }}>
        <Logo 
         logoDesigin={"logo-desigin"}
         data={data}
        />
        
        <CompanyInfo
        data={data}
        />

        </div>
        <FirstCardContent
         data={data}
        className={'lorem'}
      />
    </div>
  );
}

export default FirstCard;
