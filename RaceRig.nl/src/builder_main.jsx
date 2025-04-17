import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './builder.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
