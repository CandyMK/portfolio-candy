import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>

        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>

            <div className="about-right">
                <div className="about-para">
                    <p>I have a strong interest in UI/UX design and frontend development.</p>
                    <p>Passionate about creating user-friendly, visually appealing, and intuitive digital experiences. Detail-oriented, responsible, and adaptable, with strong motivation to learn and grow through new challenges.</p>
                </div>
            </div>
        </div>

        {/* <div className="about-achievements">
            <div className="about-achievement">
                <h1>7+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
        </div> */}
    </div>
  )
}

export default About