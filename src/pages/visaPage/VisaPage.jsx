import React, { useContext, useState, useRef, useEffect } from "react";
//Assets
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./visaPage.css";
import { Grid } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Store from "../../components/context/store";
import VisitCard from "../../components/visitCard/VisitCard";
import Card2 from "../../components/Cards/Card2/Card2";
import Card3 from "../../components/Cards/Card3/Card3";

// import { useStore } from "../../store/Store";

function VisaPage() {
  const {
    selectedCard,
    setSelectedCard,
    cards,
    cardData,
    setCardData,
  } = useContext(Store);
  const [formData, setFormData] = useState({
    fullName: "",
    position: "",
    // companyName: "",
    address: "",
    phone: "",
    email: "",
    website: "",
  });

  const fields = [
    {
      name: "fullName",
      placeholder: "FullName",
      value: "",
    },
    {
      name: "position",
      placeholder: "Position",
    },
    // {
    //   name: "companyName",
    //   placeholder: "Company name",
    // },
    {
      name: "address",
      placeholder: "Address",
    },
    {
      name: "phone",
      placeholder: "Phone",
      autoComplete: "current-phone",
    },
    {
      name: "email",
      placeholder: "Email",
      autoComplete: "current-email",
    },
    {
      name: "website",
      placeholder: "Appload your logo",
      autoComplete: "Website",
    },
  ];


// import bgFoto from "../../components/photos/desktop-wallpaper.jpg";
  // const [cardData, setCardData] = useState([]);
  const [selectData, setSelectData] = useState([]);
  // Array(100).fill(null).map
  const [cardList] = useState([
    {
      projectName: "Card1",
      progectBgColor: "red",
    },
    {
      projectName: "Card2",
      progectBgColor: "blue",
    },
    {
      projectName: "Card3",
      progectBgColor: "yellow",
    },
    // {
    //   projectName: "Card4",
    //   progectBgColor: "gray",
    // },
  ]);

  useEffect(() => {
    let jsonData = JSON.parse(localStorage.getItem("cardData"));
  }, []);
  const [message, setMessage] = useState([]);
  const firstRef = useRef([]);
  const templateBox = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.fullName.value);
    const cardInformation = {
      fullName: e.target.fullName.value,
      position: e.target.position.value,
      // companyName: e.target?.companyName?.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      website: e.target.website.value,
    };
    setCardData([...cardData, cardInformation]); //keohne datalari sxlamaq shertile
    //  yeni dtalari yazdirmaq istedikde spread metodu ist ele
    // setCardData(cardInformation); //2ci metod
    // localStorage.setItem("cardData", JSON.stringify(cardData))
    //  let draft = [...cards]
    // draft[selectedCard].secondCardContent.cardHolderNameText = cardData.fullName
    // setCards(draft)
    // console.log(cardInformation);
  };

  const formChange = (e) => {
    let trg = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [trg]: value });
  };

  const selectChange = (e) => {
    let id = e.target.value;
    setSelectedCard(id);

  };

  return (
    <Grid container className="visaPageBox">
      <Grid item xs={11} md={6} className="left-box">
        <h2
          className="left-header"
          style={{ color: "#208E2B", marginBottom: "20px" }}
        >
          Choose business car
        </h2>
        <Box
          onSubmit={handleSubmit}
          onChange={formChange}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >


          {fields.map((field) => (
            <TextField
              name={field.name}
              placeholder={field.placeholder}
              variant="standard"
              type={field.type ? field.type : null}
              value={formData[field.name]}
              autoComplete={field.autoComplete ? field.autoComplete : null}
            />
          ))}
         

          <Button
            style={{ marginTop: "20px" }}
            size="large"
            id="choose-button"
            type="submit"
            variant="contained"
            sx={{
              width: "250px",
              height: "45px",
              bgcolor: "#208E2B",
              display: "block",
              borderRadius: "20px",
              mt: 5,
              m: "auto",
              transition: ".3s linear",
              "&:hover": {
                bgcolor: "brown",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Grid>
      <Grid item xs={11} md={6} className="right-box">
        <div className="right-header">
          <h2 style={{ color: "#208E2B", marginBottom: "20px" }}>Choose business card </h2>
           
         
        </div>
        <div>

          {/* </InputLabel> */}
          <Select
            size="small"
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            label="Choose select"

            onChange={selectChange}
            sx={{ m: 1, minWidth: 200 }}

          >
            <MenuItem selected value={null}>
              <em>None</em>
            </MenuItem>

            {cardList.map((item, index) => {
              return (
                <MenuItem key={item + index} value={index}>
                  {item.projectName}{" "}
                </MenuItem>
              );
            })}
          </Select>
        </div>

        <Grid>
          {selectedCard == null && (
            <>
            <Box 
              sx={{
                width: 400,
                height: 230,
                // backgroundImage:`url('${bgFoto}')`,
                margin: "auto",
                marginTop: "20px",
                borderRadius: "20px",
                backgroundColor: "#ECECEC",
                "&:hover": {
                  backgroundColor: "#D5D5D5",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}  
           />
           <Box 
              sx={{
                width: 400,
                height: 230,
                // backgroundImage:`url('${bgFoto}')`,
                margin: "auto",
                marginTop: "20px",
                borderRadius: "20px",
                backgroundColor:  "#ECECEC",
                "&:hover": {
                  backgroundColor: "#D5D5D5",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}  
           />
           
            
            </>
            
          )}
          {selectedCard == 0 && <VisitCard card={cards[0]} width="300px" />}
          {selectedCard == 1 && <Card2 card={cards[1]} />}
          {selectedCard == 2 && <Card3 card3={cards[2]} />}

        </Grid>
      </Grid>
    </Grid>
  );
}

export default VisaPage;
