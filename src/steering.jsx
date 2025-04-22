import React, { useState, useEffect } from "react";
import "./App.css";
import steeringData from "./assets/steering.json";
import Quicklink from "./Quicklink";

const Steering = ({ name, page }) => {
  const [filteredData, setFilteredData] = useState([]);

  // Filter based on the provided name
  React.useEffect(() => {
    let filteredSteering = [];

    if (name === "playstation") {
      filteredSteering = steeringData.filter((item) => item.playstation === true);
    } else if (name === "xbox") { 
      filteredSteering = steeringData.filter((item) => item.xbox === true);
    } else if (name === "pc") {
      filteredSteering = steeringData.filter((item) => item.pc === true);
    } else {
      setFilteredData([]); // Reset if invalid input
      return;
    }

    setFilteredData(filteredSteering);
  }, [name]); // Runs when `name` changes

  if (filteredData.length === 0) {
    return <h1>Geen producten gevonden</h1>;
  }

  return (
    
    <>
        <h1 className="builderkop">Kies je stuur</h1>
        <div className="container">
      {filteredData.map((item) => (
        <Quicklink key={item.title} name={item.title} price={item.price} href= {item.href}paragraph="" type="wheel" image= {item.imagehref} page = {page}/>
      ))}
        </div>
    </>
  );
};

export default Steering;