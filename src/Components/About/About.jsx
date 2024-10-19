import React, { useRef, useEffect } from 'react';
import './About.css';
import backgroundVideo from '../../Assets/asteroid.mp4'; // Make sure to replace this with the actual path to your video file

function About() {
  const aboutRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current.classList.add('fade-in');
        } else {
          aboutRef.current.classList.remove('fade-in');
        }
      },
      {
        threshold: 0.5000, // Trigger when 10% of the element is visible
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className='aboutmain'>
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="about" ref={aboutRef}>
        <h1 className='h1'>AND I AM</h1>
        <h1 className='h2'>ABHISHEK. R</h1>
        <p className='para'>
        self-taught full stack MERN and Python developer, currently in my final year of B.Tech CSE, based in Kerala, India. My experience with startups has enriched my understanding of new tools, teamwork, and solving real-world challenges. At 21, I continue to explore the tech landscape, constantly evolving and adapting to build efficient and impactful solutions. Explore my skills and achievements for more details!
        </p>
      </div>
      
    </div>
  );
}

export default About;
