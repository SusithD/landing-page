import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FrameSection from './components/FrameSection';
import FrameSectionSecond from './components/FrameSectionSecond'; 
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Helmet>
        <title>AT Digital Internship Project</title>
      </Helmet>
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
