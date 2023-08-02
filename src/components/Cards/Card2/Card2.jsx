//assets
import FirstCard from "../Card2/FirstCard.png";
import SecondCard from "../Card2/SecondCard.png";
import Logo from "../Card2/Logo.svg";
//css
import "./Card2.css";

const Card2 = ({ card, cardDesc, cardss }) => {
  return (
    <>
      {/* first card */}
      <div
        className="background"
        style={{
          backgroundImage: `url(${FirstCard})`,
          backgroundSize: "cover",
          width: "400px",
          height: "230px",
        }}
      >
        <div className="design-div">
          <img className="logo-img" src={Logo} alt="fd" id="design" />
          <h3 className={card.firstCardContent.companyName}>
            {cardss ? cardss : card.firstCardContent.companyNameText}
          </h3>
          <p className={card.firstCardContent.companyNameSlogan}>
            {card.firstCardContent.companyNameSloganText}
          </p>
          <p className={card.firstCardContent.companyNameLoremText}>
            {cardDesc
              ? cardDesc
              : card.firstCardContent.companyNameLoremTextContent}
          </p>
        </div>
        <p className="down-part-lorem"></p>
      </div>

      {/* second card */}
      <div
        className="background-second"
        style={{
          backgroundImage: `url(${SecondCard})`,
          backgroundSize: "cover",
          width: "400px",
          height: "230px",
          margin: "auto",
        }}
      >
        <div className="company-info">
          <div className={card.secondCardContent.flexClassName}>
            <h2 className={card.secondCardContent.cardHolderName}>
              {card.secondCardContent.cardHolderNameText}
            </h2>
            <span className={card.secondCardContent.cardHolderSurname}>
              {card.secondCardContent.cardHolderSurnameText}
            </span>
          </div>
          <p className={card.secondCardContent.cardHolderOccupation}>
            {card.secondCardContent.cardHolderOccupationText}
          </p>
        </div>
        <div className="address-div">
          <div className="diviconlist">
            {card.iconList.map((v) => {
              return (
                <>
                  <div key={v.id} />
                  <div className={`${v.className}`}>{v.icon}</div>
                </>
              );
            })}
          </div>

          <div className="fonticon">
            {card.addressText.map((v) => {
              return (
                <>
                  <div key={v.id} />
                  <p className={v.className}>{v.text}</p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
