import React from 'react'
import { useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import SignUp from './SignUp'
import Error from './Error'
import Dashboard from './Dashboard'
import "../App.css";


function App() {
  useEffect(()=>{
    fetch('http://localhost:3000/students',
    {
      mode: 'cors',
  credentials: 'include'
    })
    .then(res =>{
      return res.json()
    })
    .then((data)=>{
      console.log(data)
    })
  },[]);
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
