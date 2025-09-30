import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>Hi, i'm Candy Maurentia Kwan</span> and you can call me Candy!</h1>
        <p>I'm a Software Engineering Student at BINUS University.</p>
        
        <div className="hero-action">
            <a className="hero-resume" href="https://github.com/CandyMK" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="hero-resume" href="/path/to/resume.pdf" target="_blank" rel="noopener noreferrer">My Resume</a>
        </div>
    </div>
  )
}

export default Hero