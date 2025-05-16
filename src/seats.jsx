import React, { useState, useEffect } from "react";
import "./App.css";
import seats from "./assets/seats.json";
import Quicklink from "./Quicklink";

const Seats = ({ name, page }) => {
    const [filteredData, setFilteredData] = useState([]);

    // Filter based on the provided name
    useEffect(() => {
        let filteredSteering = [];

        if (name === "") {
            filteredSteering = seats.filter((item) => item);
        } else {
            filteredSteering = seats; // Include all items if name is empty
        }
          // Sort by price in ascending order
        filteredSteering.sort((a, b) => a.price - b.price);
        setFilteredData(filteredSteering);
    }, [name]); // Runs when `name` changes

    if (filteredData.length === 0) {
        return <h1>Geen producten gevonden</h1>;
    }

    return (
        <>
            <h1 className="builderkop">Kies je stoel</h1>
            <div className="container">
            {filteredData.map((item) => (
                <Quicklink key={item.title} name={item.title} price={item.price} href= {item.href}paragraph="" type="seat" image= {item.imagehref} page = {page
                }/>
            ))}
            </div>
        </>
    );
};

  
  export default Seats;