import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling
import Moon from './Components/Moon/Moon.jsx';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen.jsx';
import Skills from './Components/Skills/Skills.jsx';
import About from './Components/About/About.jsx';
import Roles from './Components/Roles/Roles.jsx';
import Webmaster from './Components/Webmaster/Webmaster.jsx';
import NftCard from './Components/Project/Projects.jsx';
import Contact from './Components/Contact/Contact.jsx';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Function to be called when loading is complete
  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="app">
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />} {/* Show loading screen if isLoading is true */}
      {!isLoading && ( // Render content only if loading is complete
        <div className="content">

        <Moon />
        <About/>
        <Webmaster/>
        <Skills/>
        <NftCard/>
        <Roles/>
        <Contact/>

        </div>
      )}
    </div>
  );
}

export default App;
