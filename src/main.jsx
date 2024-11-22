import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'

import Home from "./pages/home/Home"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)