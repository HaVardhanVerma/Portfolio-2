import { useState } from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home/Home';
import './App.css'
import About_me from './Pages/About__me/About_me';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-me' element={<About_me />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
