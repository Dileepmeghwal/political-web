import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home'

import About from './Components/About/About';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';
import PhotoGallery from './Components/PhotoGallery/PhotoGallery';
import Press from './Components/Press/Press';

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/press' element={<Press />} />
        
        <Route path='/photo' element={<PhotoGallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>

  )
}

export default App