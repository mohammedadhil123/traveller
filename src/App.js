import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Service from './components/Service'
import Destinations from './components/Destinations'
import Footer from './components/Footer'

function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Service/>
        <Destinations/>
        <Footer/>
    </div>
  )
}

export default App
