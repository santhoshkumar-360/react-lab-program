import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserData from './UserData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserData />
  </StrictMode>,
)
