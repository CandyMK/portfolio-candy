import React from 'react'
import './MyWork.css'

import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='myWork'>
        <div className="myWork-title">
            <h1>My Project</h1>
        </div>

        <div className="myWork-container">
            {mywork_data.map((work, index) => (
                <div key={index} className="myWork-card">
                    <img src={work.w_img} alt={work.w_name} />

                    <h3>{work.w_name}</h3>
                    {work.description && <p>{work.description}</p>}

                    {work.skills && (
                        <ul className="myWork-skills">
                        {work.skills.map((skill, id) => (
                            <li key={id}>{skill}</li>
                        ))}
                        </ul>
                    )}

                    <div className='myWork-links'>
                        {/* {work.demo && (
                            <a href={work.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                        )} */}

                        {work.source && (
                            <a href={work.source} target="_blank" rel="noopener noreferrer">Source</a>
                        )}
                    </div>
                </div>
            ))}
        </div>

        {/* <div className="myWork-showmore">
          <p>Show More</p>
          <img src={arrow_icon} alt="" />
        </div> */}
    </div>
  )
}

export default MyWork