import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './create-trip/index.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Testimonials from './components/Testimonials.jsx'
import { Toaster } from './components/ui/toaster.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

const router = createBrowserRouter ([
  { path : '/' , 
    element:<App/>
  } ,
  {
    path: 'create-trip' ,
    element:<CreateTrip/>
  } ,
  {
    path : '/home' ,
    element : <App/>
  },
  {
    path : '/testimonials' ,
    element : <Testimonials />
  },
  {
    path: '/howItWorks' ,
    element : <HowItWorks />
  }
]) 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID} >
    <Header/>
    <Toaster />
    <RouterProvider router={router} />
    <Footer/>
    </GoogleOAuthProvider>
  </StrictMode>,
)
