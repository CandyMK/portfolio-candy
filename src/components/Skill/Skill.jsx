import React from 'react'
import skills from '../../data/skills.json'
import './Skill.css'

const images = import.meta.glob("../../assets/skills/*", { eager: true });

const Skill = () => {
  return (
    <div id='skills' className='skills'>
        <div className='skill-title'>
            <h1>Skills</h1>
        </div>
                
        <div className='content'>
            <div className='my-skills'>
                {skills.map((skill, id) => {

                    const imagePath = `../../assets/skills/${skill.imageSrc}`;
                    const image = images[imagePath]?.default;

                    return (
                        <div key={id} className='skill'>
                            <div className='skillImageContainer'>
                                <img src={image} alt={skill.title} />
                            </div>

                            <p>{skill.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default Skill