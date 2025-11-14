import React from 'react'

import './App.css'
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom'
import Home from './Navbar/Home'
import About from './Navbar/About'
import Details from './Navbar/Details'
import Dashboard from './Navbar/Dashboard'
import Contact from './Navbar/Contact'

import StudentData from './Navbar/StudentData'
import TeacherData from './Navbar/TeacherData'


function Navbar() {
  return (
    <nav className='navbar'>
      <div className='logo'>One World Academy</div>
      <ul className='nav-links'>
        <li><NavLink to='/' end >Home</NavLink></li>
        <li><NavLink to='/about' >About</NavLink></li>
        <li><NavLink to='/details' >Details</NavLink></li>
        <li><NavLink to='/dashboard' >Dashboard</NavLink></li>
        <li><NavLink to='/contact' >Contact</NavLink></li>
      </ul>
      

    </nav>
  )
}


function App() {
  

  return (
    <>
      <div>
        <Router>
          <Navbar />

          <div className='content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/details' element={<Details />}>
                <Route path='student' element={<StudentData/>}/>
                <Route path='teacher' element={<TeacherData/>}/>
              </Route>
              
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/contact' element={<Contact />} />

            </Routes>
          </div>


        </Router>
      </div>

    </>
  )
}

export default App
