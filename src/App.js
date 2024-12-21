import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FrameSection from './components/FrameSection';
import FrameSectionSecond from './components/FrameSectionSecond'; 
import FAQSection from './components/FAQSection';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FrameSection />
      <FrameSectionSecond />
      <FAQSection /> {/* Add FrameSection here */}
      <footer>
        {/* Footer content */}
      </footer>
    </>
  );
};

export default App;
