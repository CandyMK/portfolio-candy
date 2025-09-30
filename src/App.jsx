import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skill from './components/Skill/Skill'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <MyWork />
      <Contact />
      <ToastContainer />
    </div>
  )
}

export default App