import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Titlebar from './Titlebar.jsx'
import Quicklink from './Quicklink.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Titlebar />
      <h1 className="builderkop">Plug and Play Simrigs</h1>
      <h2 className="builderkop">Aangeraden combinaties:</h2>
      <div className='container'>
        <Quicklink name="Voor de beginner" price="550" paragraph="Deze combinatie is perfect voor de beginnende simracer, met een opklapbare stoel, instapmodel (modulair) Moza-stuur en pendalen kan jij je nieuwe hobby starten!" />
        <Quicklink name="Voor de enthousiast" price="1000" paragraph="Deze combinatie is perfect voor de enthousiastelling, met een sterker Fanatec-stuur en pendalen voor een nog realistischere ervaring." />
        <Quicklink name="Voor de professional" price="1000" paragraph="Dit is een simrig"  />
      </div>
      <Footer />
    </>
  )
}

export default App
