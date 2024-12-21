import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FrameSection from './components/FrameSection';
import FrameSectionSecond from './components/FrameSectionSecond'; 
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FrameSection />
      <FrameSectionSecond />
      <FAQSection />
      <Footer />
    </>
  );
};

export default App;
