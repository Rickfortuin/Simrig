import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Navbar({ setCount }){
    return (
    <>
      <div className="navbar">
        <nav>
            <button className='image' src={"./images/Simrig-logo.jpg"} onClick={() => setCount(0)}/>
            <button className="nav-option" id="home" onClick={() => setCount(0)}>Home</button>
            <button className="nav-option" id="builder" onClick={() => setCount(1)}>Bouwen</button>
            <button className="nav-option" id="products" onClick={() => setCount(0)}>Vergelijk</button>
            <button className="nav-option" id="list" onClick={() => setCount(2)}>Lijst</button>
        </nav>
      </div>
    </>
    )
  }
export default Navbar