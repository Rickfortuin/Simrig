import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function Titlebar(){
    return (
      <>
        <h1 className="builderkop">Bouw je eigen Race Simulator</h1>
        <div className="knop1">
          <a id="Bouw" href="./builder.html">Bouwen</a>
        </div>
      </>
    )
  }
export default Titlebar