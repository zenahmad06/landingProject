import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'virtual:windi.css'       
import 'virtual:windi-devtools'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
