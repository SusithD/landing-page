import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FrameSection from './components/FrameSection';
import FrameSectionSecond from './components/FrameSectionSecond'; 

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FrameSection />
      <FrameSectionSecond /> {/* Add FrameSection here */}
      <footer>
        {/* Footer content */}
      </footer>
    </>
  );
};

export default App;
