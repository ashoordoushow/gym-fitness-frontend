import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axios from 'axios'
axios.defaults.baseURL = import.meta.env.MODE === "development" ? "http://localhost:3000/" : "https://gym-fitness-api.onrender.com";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


