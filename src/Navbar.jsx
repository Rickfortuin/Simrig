import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Navbar({ setCount }){
    return (
    <>
      <div className="navbar">
        <nav>
            <img src={"./images/Simrig-logo.jpg"} />
            <button className="nav-option" id="home" onClick={() => setCount(0)}>Home</button>
            <button className="nav-option" id="builder" onClick={() => setCount(1)}>Builder</button>
            <button className="nav-option" id="products" onClick={() => setCount(0)}>Products</button>
            <button className="nav-option" id="list" onClick={() => setCount(0)}>Saved-Lists</button>
            
            
            
        </nav>
      </div>
    </>
    )
  }
export default Navbar