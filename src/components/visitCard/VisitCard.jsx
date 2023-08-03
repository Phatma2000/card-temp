import React, { useContext, useEffect, useRef } from "react";

// ASSETS
import "./visitCard.css";
import Store from "../context/store";

// CUSTOM IMPORTS

const VisitCard = ({ card, formData }) => {
  const { cardData } = useContext(Store);
  const cardContent = useRef();
  useEffect(() => {
    if (cardData.length > 0) {
      cardContent.current.innerText = cardData.at(-1)?.fullName;
    }
  }, [cardData]);

  return (
    <div>
      <div className="box">
        {/* first card */}
        <div
          className={card.firstCardContent.firstCard}
          style={{
            backgroundImage: `url(${card.firstCardContent.backGroundImage})`,
          }}
               
        >
          <div className={card.firstCardContent.cardDesign}>
            <div className={card.firstCardContent.LogoBox}>
              <img
                className={card.firstCardContent.cardLogo}
                src={`${card.firstCardContent.LogoContent}`}
                alt=""
              />
            </div>
            <div>
             
              <div
               className={card.firstCardContent.companyName}>
                {formData.companyName ? (
                  <h1> {
                    formData.companyName
                    }
                  </h1>
                ) : (
                  <h1>
                    {card.firstCardContent.companyNameText}
                  </h1>
                )}

                
                <p className={card.firstCardContent.companyNameSlogan}>

                  {formData.companyNameSlogan ? (
                    <p>
                      {
                      formData.companyNameSlogan
                      }
                    </p>
                  ):(
                    <p>
                      {card.firstCardContent.companyNameText}
                    </p>
                  )}
                  {card.firstCardContent.companyNameSloganText}
                </p>
              </div>
            </div>
          </div>
          <div className={card.firstCardContent.companyNameLoremTextBox}>
            <p className={card.firstCardContent.companyNameLoremText}>
              {card.firstCardContent.companyNameLoremContext}
            </p>
          </div>
        </div>

        {/* second card */}
        <div
          className={card.secondCardContent.secondCard}
          style={{
            backgroundImage: `url(${card.secondCardContent.backGroundImage})`,
          }}
        >
          <div className={card.secondCardContent.informationBox}>
            <div className={card.secondCardContent.iconGroup}>
              {card.iconList.map((i) => {
                return (
                  <div key={i.id}>
                    <div className={i.className} style={{ padding: "4px" }}>
                      {i.icon}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={card.secondCardContent.iconInformation}>
              {card.contactList.map((i) => {
                return (
                  <div key={i.id}>
                    <p style={i?.customStyle || {}}>{i.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            {formData.fullName ? (
                      <p className={card.secondCardContent.cardHolderName}>

              {formData.fullName}
                      </p>
            ) : (
              <p className={card.secondCardContent.cardHolderName}>
                {card.secondCardContent.cardHolderNameText}{" "}
                <b
                  ref={cardContent}
                  className={card.secondCardContent.cardHolderSurNameText}
                >
                  {card.secondCardContent.cardHolderSurNameText}
                </b>
              </p>
            )}
  
             
                
            <p className={card.secondCardContent.cardHolderOccupation}>
              {card.secondCardContent.cardHolderOccupationDescription}
            </p>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitCard;
