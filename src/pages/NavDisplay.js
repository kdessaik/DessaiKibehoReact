import React from 'react'
import About from './About'
import MyWork from './Mywork'
import Home from './Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Navbarlist'


export default function NavDisplay() {
  return (
      <BrowserRouter>
      <Navbar/>
     
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/My-work' element={<MyWork/>}/>
          
          </Routes>
          
      
      
      </BrowserRouter>
    
    
  )
}
