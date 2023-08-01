import React from "react";
// CUSTOM IMPORTS
import FirstCard from "../../components/firstCard/firstCard";
import SecondCard from "../../components/secondCard/secondCard";
import DownFoto from "../../photos/Frontlogo192.png";
import UpFoto from "../../photos/Backlogo192.png";
// ASSETS
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Home({ data }) {
  return (
    <div className="home" >

      
      {/* <FirstCard
        data={data}
        // logoSpan="logoSpan"
        // title="Media"
        // SLOGANHERE="SLOGANHERE"
        // url={UpFoto}
        // firstSpan={"firstSpan"}
      />

      <SecondCard
        data={data}
        // url={DownFoto}
        // boxShadow="5px 10px 20px 20px #888888"
        // justifyContent="flex-start"
        // alignItems="flex-end"
        // paddingBottom="8px"
        // borderRadius="10px"
      /> */}
    </div>
  );
}

export default Home;
