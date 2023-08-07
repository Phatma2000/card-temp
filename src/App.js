import "./App.css";
import FrontFoto from "./components/photos/FrontFoto192.png";
import BackFoto from "./components/photos/BackFoto192.png";
import Logo from "./components/photos/logo1.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VisaPage from "../src/pages/visaPage/VisaPage"
import Store from "./components/context/store";
import { useState } from "react";
import {
  FaArrowPointer,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import Card2 from "./components/Cards/Card2/Card2"; 
import Card3 from "./components/Cards/Card3/Card3";
import VisitCard from "./components/visitCard/VisitCard";

function App() {
  const [selectedCard, setSelectedCard] = useState(0);
  const [cardData, setCardData] = useState([]);

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
        cardHolderName: "card-holder-name1",
        cardHolderNameText: `THOMAS`,
        cardHolderSurNameText: "SMITH",
        cardHolderOccupation: "span-text",
        cardHolderOccupationText: "occupation",
        cardHolderOccupationDescription: "Graphic Designer",
        backGroundImage: `../..${BackFoto}`,
        informationBox: "information-box",
        iconGroup: "icon-group",
        iconInformation: "icon-information1",
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
          className: "fa-location1",
          icon: <FaLocationDot />,
        },
        {
          id: 2,
          className: "fa-phone1",
          icon: <FaPhone />,
        },
        {
          id: 3,
          className: "fa-envelope1",
          icon: <FaEnvelope />,
        },
        {
          id: 4,
          className: "fa-arrow-pointer1",
          icon: <FaArrowPointer />,
        },
      ],
    },
    // card2

    {
      firstCardContent: {
        companyName: "company-name",
        companyNameText: "Design",
        companyNameSlogan: "slogan1",
        companyNameSloganText: "Tagline space",
        companyNameLoremText: "down-part-lorem2",
        companyNameLoremTextContent: "Lorem Ipsum Dolor",
      },

      secondCardContent: {
        DivclassName: "company-info",
        cardHolderName: "card-holder-name",
        cardHolderNameText: "MARK",
        cardHolderSurname: "card-holder-surname",
        cardHolderSurnameText: "Smith",
        cardHolderOccupation: "cofounder-p",
        cardHolderOccupationText: "Co-Founder Brand Name",
        flexClassName: "flex",
      },

      addressText: [
        {
          id: 1,
          className: "down-part-lorem1",
          text: "123 Dummy, Lorem Ipsum",
        },
        {
          id: 2,
          className: "down-part-number",
          text: "+00 1234 5XXX 9012",
        },
        {
          id: 3,
          className: "down-part-email",
          text: "info@email space",
        },
        {
          id: 4,
          className: "down-part-website",
          text: "www.websiteaddress",
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
    //card3

    {
      firstCardContent: {
        companyName: "company-name",
        companyNameText: "Design",
        companyNameSlogan: "slogan",
        companyNameSloganText: "Tagline space",
        companyNameLorem: "lorem-text",
        companyNameLoremText: "Lorem Ipsum Dolor",
      },

      secondCardContent: {
        divClassName: "name-class",
        cardHolderName: "card-holder-namee",
        cardHolderNameText: "MARK",
        cardHolderSurname: "card-holder-surnamee",
        cardHolderSurnameText: "Smith",
        cardHolderOccupation: "project-manager",
        cardHolderOccupationText: "Project Manager",
        flexClassName: "flex",
      },

      addressIcon: [
        {
          id: 1,
          className: "location-dot",
          icon: <FaLocationDot />,
        },
        {
          id: 2,
          className: "phone",
          icon: <FaPhone />,
        },
        {
          id: 3,
          className: "envelope",
          icon: <FaEnvelope />,
        },
        {
          id: 4,
          className: "arrow-pointer",
          icon: <FaArrowPointer />,
        },
      ],

      addressText: [
        {
          id: 1,
          className: "location-text",
          text: "123 Dummy, Lorem Ipsum",
        },

        {
          id: 2,
          className: "phone-text",
          text: "+00 1234 5XXX 9012",
        },

        {
          id: 3,
          className: "envelope-text",
          text: "info@email space",
        },
        {
          id: 4,
          className: "arrow-text",
          text: "www.websiteaddress",
        },
      ],
    },
  ];

  return (
    <>
      {/* {cards2.map((item, i) => (
        <Card2 key={i} card={item} />
      ))}

      {cards3.map((item, i) => (
        <Card3 key={i} card3={item} />
      ))} */}

      <Store.Provider value={{ selectedCard, setSelectedCard, cards }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<VisaPage />} />
            <Route
              path="/visitCard"
              element={<VisitCard card={cards[selectedCard]} />}
            />
            <Route path="/card2" element={<Card2 card={cards[1]} />}></Route>
            <Route path="/card3" element={<Card3 card3={cards[2]} />}></Route>
          </Routes>
        </BrowserRouter>
      </Store.Provider>
    </>
  );
}

export default App;
