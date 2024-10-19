import React from 'react'
import backgroundVideo from '../../Assets/reddd.mp4'; 
import './Roles.css'

function Roles() {
  return (
    <div className='rolesmain'>

    <h1 className="role">ROLES AND ACHIEVEMENTS</h1>

    <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
  
  <div className="box">

         <ul>
          
          <li>Python Developer</li>
          <li>CO-FOUNDER AICALLER</li>
          <li>INTERNED AT UST GLOBAL</li>
          <li>CO-FOUNDER QWIPBOARDAI</li>
          <li>Full Stack Web Developer</li>
          <li>CHAIRPERSON AT IEEE SB NCERC</li>
          <li>Winner at National LEVEL Hackathon</li>
          <li>WEBMASTER AT IEEE PES KERALA CHAPTER</li>
          <li>RESEARCH INTERN AT AMRITA VISHWA VIDYAPEETHAM</li>
          
          
        </ul>
  </div>
      
    </div>
  )
}

export default Roles
