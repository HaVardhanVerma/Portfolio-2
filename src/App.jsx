import { useState } from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main';
import { Routes, Route, BrowserRouter } from "react-router";
import Home from './Pages/Home/Home';
import './App.css'
import About_me from './Pages/About__me/About_me';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';

function App() {
  
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about-me' element={<About_me></About_me>}></Route>
          <Route path='/about-me' element={<About_me></About_me>}></Route>
          <Route path='/projects' element={<Projects></Projects>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
