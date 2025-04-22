import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Titlebar from './Titlebar.jsx'
import Quicklink from './Quicklink.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import Console from './Console.jsx'
import useLocalStorage from 'use-local-storage'

function App() {
  const [count, setCount] = useState(0)
  function builder(){
    setCount(1)
  }
  return (
    <>
      <Navbar setCount={setCount} />
      
      {count === 0 && (
        <>
        <Titlebar />
        <button className='builder' onClick ={() => {builder()}}>Start met bouwen &#128296;</button>
        <Footer />
        </>
      )}

      {count === 1 && (
        <>
        <Console page ={0}/>
        </>
      )}

      {count === 2 && (
        <>
        <Console page={3}/>
        </>
      )}
    </>
  )
}

export default App
