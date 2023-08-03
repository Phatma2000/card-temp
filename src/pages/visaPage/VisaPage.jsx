import React, { useContext, useState, useRef, useEffect } from "react";
//Assets
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./visaPage.css";
import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
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
    setCards,
    cardData,
    setCardData,
  } = useContext(Store);
  const [formData, setFormData] = useState({
    fullName: "",
    position: "",
    companyName: "",
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
    {
      name: "companyName",
      placeholder: "Company name",
    },
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
    console.log("jsonData", jsonData);
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
      companyName: e.target.companyName.value,
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
        <h3 className="left-header">Choose business card</h3>
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
            sx={{ display: "block", mt: 2, m: "auto" }}
            id="choose-button"
            type="submit"
            variant="outlined"
          >
            Submit
          </Button>
        </Box>
      </Grid>
      <Grid item xs={11} md={6} className="right-box">
        <div className="right-header">
          <h3>Melumatlarinizi daxil edin.</h3>
        </div>
        <div>
          <InputLabel id="demo-controlled-open-select-label">
            {" "}
            Choose
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            label="Choose select"
            onChange={selectChange}
            sx={{ m: 1, minWidth: 200 }}
          >
            <MenuItem value={0}>
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
          {selectedCard == 0 && (
            <VisitCard card={cards[0]} formData={formData} />
          )}
          {selectedCard == 1 && <Card2 card={cards[1]} formData={formData} />}
          {selectedCard == 2 && <Card3 card3={cards[2]} formData={formData} />}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default VisaPage;
