import React from 'react'
import Particles from './Particles';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skill from './components/Skill/Skill'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import ScrollOnResize from './ScrollOnResize'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className="w-full min-h-screen relative">
      <div className="fixed inset-0 -z-5 bg-gradient-to-br from-[#07064d] via-[#2d0534] to-black">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      
      {/* Konten di atas particles */}
      <div className="relative z-10">
        <ScrollOnResize />
        <Navbar />
        <Hero />
        <About />
        <Skill />
        <MyWork />
        <Contact />
        <ToastContainer />
      </div>
    </div>
  )
}

export default App