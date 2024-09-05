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
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
  </StrictMode>,
)
