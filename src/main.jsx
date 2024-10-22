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
import Viewtrip from './view-trip/[tripId]/index.jsx'
import MyTrips from './my-trips/index.jsx'

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
  },
  {
    path : '/view-trip/:tripId' ,
    element : <Viewtrip />
  },
  {
    path : '/my-trips' ,
    element : <MyTrips/>
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
