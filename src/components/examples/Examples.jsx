import React from "react";
import { useState } from "react";

function Examples() {
 
    const [color,setColor]=useState({
        name:'abbas',
        surname:'aqa',
        age:20
    })
  
    const changeColor =()=>{

        setTimeout(()=>{
            setColor(previouse=>{
                return{...previouse, name:'albatros'}
    
            })
        },2000)
        
        console.log(color.name)
    }



  return (
    <div>
    <h1>Bu qizin adi {color.name} soyu {color.surname} </h1>
    <button onClick={changeColor}>updatecolor</button>
    </div>
  );
}

export default Examples;
