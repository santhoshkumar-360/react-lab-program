import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Greetings from './Greetings.jsx'
// import Productcard from './Productcard.jsx'
import Themechanger from './Themechanger' 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Themechanger></Themechanger>
  </StrictMode>,
)
