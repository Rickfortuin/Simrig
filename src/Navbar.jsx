import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import path from './images/Simrig-logo.jpg'
function Navbar(){
    return (
    <>
      <div className="navbar">
        <nav>
            <img src={path} />
            <a class="nav-option" id="home" href="./index.html">Home</a>
            <a class="nav-option" id="builder" href="./builder.html">Builder</a>
            <a class="nav-option" id="products" href="./products.html">Products</a>
            <a class="nav-option" id="List" href="./list.html">Saved-Lists</a>
            
            
            
        </nav>
      </div>
    </>
    )
  }
export default Navbar