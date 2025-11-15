import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import TypingTitle from "./TypingTitle";

const Hero = () => {
  return (
    <div id='home' className='hero'>

      <img src={profile_img} alt="" />
      
      <TypingTitle />
      <p>I'm a Software Engineering Student at BINUS University.</p>
        
      <div className="hero-action">
        <a className="hero-resume" href="https://github.com/CandyMK" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="hero-resume" href="/path/to/resume.pdf" target="_blank" rel="noopener noreferrer">My Resume</a>
      </div>
    </div>
  )
}

export default Hero
