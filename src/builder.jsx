import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Steering from './steering.jsx'
import Console from './Console.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

function App() {

    return(
        <>
            <Navbar />
            <Console />
            <Footer />
        </>
    )
}

export default App
