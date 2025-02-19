import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {GoogleOAuthProvider}  from  '@react-oauth/google' ;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="915705005612-7fmgtlhk60i3mb2md0trfcit5gg9eso8.apps.googleusercontent.com">
       <App />
    </GoogleOAuthProvider>
   
  </StrictMode>,
)
