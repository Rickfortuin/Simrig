
import React, { useState } from "react";
import './App.css'
import steering from './assets/steering.json'
import Quicklink from './Quicklink';

function Steering(name){
    const FilteredList = () => {
        const [filteredData, setFilteredData] = useState(steering);}
    if (name === 'playstation') {
        FilteredList([]);
        const steering = steering.filter(item => item.playstation === True);
        setFilteredData(steering);
        return (
            <>
                {filteredData.map((item) => (
                    <Quicklink name={item.title} price={item.price} paragraph="" />
                ))}
            </>
        )
    }
    else if (name === 'xbox') {
        FilteredList([]);
        const steering = steering.filter(item => item.playstation === True);
        setFilteredData(steering);
        
    }
    else if (name === 'pc') {
        FilteredList([]);
        const steering = steering.filter(item => item.playstation === True);
        setFilteredData(steering);
        
    }
    else {
        return (
            <h1>Er is iets fout gegaan</h1>
        )
    }
}

export default Steering