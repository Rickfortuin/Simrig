
import React from 'react'
import './App.css'
import path from './assets/beginner-rig.png'
import writeToCartJson from './list.jsx' 

function Quicklink({ name, price, href,paragraph, type, image, page }) {
  return (
    
    <div key= {name} className="Quicklink">
      <img src={'./images/'+image} alt={name} />
      <h2 className="kop">{name}</h2>
      <button className="knop2" id="kies" onClick={() => {
        writeToCartJson(name, price, href, image, type);
        if (typeof page === "function") {
          page((prev) => prev + 1); // Verhoog de waarde van page
        } else {
          console.error("De 'page'-prop is geen functie.");
        }
      }}>Kies</button>
      <h3 className="price">€{price}</h3>
      <p>{paragraph}</p>
    </div>
  )
}

export default Quicklink