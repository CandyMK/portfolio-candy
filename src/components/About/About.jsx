import { useEffect, useRef } from "react";
import './About.css'
import profile_img from '../../assets/profile_img.png'

const About = () => {

  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); 
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>

        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>

            <div className="about-right slide-in" ref={textRef}>
                <div className="about-para">
                    <p>I have a strong interest in UI/UX design and frontend development.</p>
                    <p>Passionate about creating user-friendly, visually appealing, and intuitive digital experiences.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;