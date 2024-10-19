import React, { useEffect, useRef } from 'react'
import './Webmaster.css'
import backgroundVideo from '../../Assets/earth3.mp4'; 

function Webmaster() {

    const textRef = useRef();

    useEffect(() => {
      const observerOptions = {
        threshold: 0.1, // Trigger when 10% of the element is visible
      };
  
      const textObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            textRef.current.classList.add('fade-in-up');
          } else {
            textRef.current.classList.remove('fade-in-up');
          }
        },
        observerOptions
      );
  
      if (textRef.current) {
        textObserver.observe(textRef.current);
      }
  
      return () => {
        if (textRef.current) {
          textObserver.unobserve(textRef.current);
        }
      };
    }, []);

    
  return (
    <div className='webmain'>

    <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    <div className="text-container">

        <h1 className="aka">AKA</h1>
        <h2 className="webmaster" ref={textRef}>The WEBMASTER</h2>

    </div>
      
    </div>
  )
}

export default Webmaster
