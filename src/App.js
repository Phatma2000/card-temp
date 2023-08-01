import FrontFoto from "../src/photos/FrontFoto192.png";
import BackFoto from "../src/photos/BackFoto192.png";
import Logo from "../src/photos/logo1.svg";
import VisaPage from "./pages/visaPage/VisaPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Examples from './components/examples/Examples';
import {
  FaArrowPointer,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import VisitCard from "./components/visitCard/VisitCard";
import Store from "./context/store";
import { useState } from "react";

function App() {

  const[selectedCard,setSelectedCard]=useState(0)

  const cards = [
    {
      firstCardContent: {
        companyName: "company-name",
        companyNameStyle: "company-name-design",
        companyNameText: "Media",
        companyNameSlogan: "company-name-slogan",
        companyNameSloganText: "SLOGANHERE",
        companyNameLoremText: "lorem",
        companyNameLoremContext: "lorem ipsum dolor",
        backGroundImage: `../..${FrontFoto}`,
        cardDesign: "first-card-design",
        firstCard: "first-card",
        LogoContent: `../..${Logo}`,
        cardLogo: "card-first-card-logo",
        LogoBox: "card-first-card-logo-box",
        companyNameLoremTextBox: "company-name-lorem-text-box",
      },
      secondCardContent: {
        divClassName: "company-info",
        cardHolderName: "card-holder-name",
        cardHolderNameText: `THOMAS`,
        cardHolderSurNameText: "THMIS",
        cardHolderOccupation: "span-text",
        cardHolderOccupationText: "occupation",
        cardHolderOccupationDescription: "Graphic Designer",
        backGroundImage: `../..${BackFoto}`,
        informationBox: "information-box",
        iconGroup: "icon-group",
        iconInformation: "icon-information",
        secondCard: "second",
      },
      contactList: [
        {
          id: 1,
          className: "down-part-lorem1",
          text: "123 Dummy, Lorem Ipsum",
          customStyle: { padding: "5px", fontWeight: "800" },
        },
        {
          id: 2,
          className: "down-part-number",
          text: "+00 1234 5XXX 9012",
          customStyle: { padding: "5px", fontWeight: "800" },
        },
        {
          id: 3,
          className: "down-part-email",
          text: "info@email space",
          customStyle: { padding: "5px", fontWeight: "800" },
        },
        {
          id: 4,
          className: "down-part-website",
          text: "www.websiteaddress",
          customStyle: { padding: "5px", fontWeight: "800" },
        },
      ],
      iconList: [
        {
          id: 1,
          className: "fa-location-dot",
          icon: <FaLocationDot />,
        },
        {
          id: 2,
          className: "fa-phone",
          icon: <FaPhone />,
        },
        {
          id: 3,
          className: "fa-envelope",
          icon: <FaEnvelope />,
        },
        {
          id: 4,
          className: "fa-arrow-pointer",
          icon: <FaArrowPointer />,
        },
      ],
    },
  ];

  return (
    <Store.Provider value={{selectedCard,setSelectedCard, cards}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VisaPage />} />
          <Route path="/visitCard" element={<VisitCard card={cards[selectedCard]} />} />
          {/* <Route path= '/buy' element={<Buy/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </Store.Provider>

    //  <>
    //  <VisaPage/>
    // <Examples/></>
    // <>
    //   {/* <VisitCard cards={cards} /> */}
    //   {
    //     cards.map((item, i) => (
    //       <VisitCard key={i} card={item}  />
    //     ))
    //   }
    // </>
  );
}

export default App;
