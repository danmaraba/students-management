import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import About from './About'
import Login from './Login'
import SignUp from './SignUp'
import Error from './Error'
import Dashboard from './Dashboard'
import "../App.css";


function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/*" element={<Error/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </div>
    
  )
}

export default App
